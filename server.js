require('dotenv').config();
const path = require('path');
const express = require('express');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const mysql = require('mysql2/promise');

const app = express();
const port = process.env.PORT || 3000;
const allowedUsers = (process.env.GITHUB_ALLOWED_USERS || '')
  .split(',')
  .map(user => user.trim())
  .filter(Boolean);

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  port: Number(process.env.MYSQL_PORT || 3306),
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'portfolio_daniel',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: process.env.SESSION_SECRET || 'change-me',
  resave: false,
  saveUninitialized: false,
  cookie: { httpOnly: true, sameSite: 'lax' }
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

if (process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET) {
  passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL || `http://localhost:${port}/auth/github/callback`
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      const githubUsername = profile.username || '';
      if (allowedUsers.length && !allowedUsers.includes(githubUsername)) {
        return done(null, false, { message: 'GitHub account is not allowed.' });
      }

      const admin = {
        githubId: profile.id,
        githubUsername,
        displayName: profile.displayName || profile.username || 'Admin',
        avatarUrl: profile.photos && profile.photos[0] ? profile.photos[0].value : null
      };

      await pool.query(
        `INSERT INTO admins (github_id, github_username, display_name, avatar_url)
         VALUES (?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE display_name = VALUES(display_name), avatar_url = VALUES(avatar_url)`,
        [admin.githubId, admin.githubUsername, admin.displayName, admin.avatarUrl]
      );

      return done(null, admin);
    } catch (error) {
      return done(error);
    }
  }));
}

function ensureAuth(req, res, next) {
  if (req.isAuthenticated && req.isAuthenticated()) {
    return next();
  }
  return res.status(401).json({ message: 'Unauthorized' });
}

async function loadPortfolioData() {
  const [projects] = await pool.query('SELECT * FROM projects WHERE published = 1 ORDER BY sort_order ASC, id ASC');
  const [certificates] = await pool.query('SELECT * FROM certificates WHERE published = 1 ORDER BY sort_order ASC, id ASC');
  const [technologies] = await pool.query('SELECT * FROM technologies WHERE published = 1 ORDER BY sort_order ASC, id ASC');
  return { projects, certificates, technologies };
}

app.use(express.static(__dirname, { extensions: ['html'] }));
app.use('/admin', express.static(path.join(__dirname, 'admin')));

app.get('/api/me', (req, res) => {
  res.json({ authenticated: !!(req.isAuthenticated && req.isAuthenticated()), user: req.user || null });
});

app.get('/api/portfolio', async (req, res, next) => {
  try {
    const data = await loadPortfolioData();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

app.get('/api/projects', async (req, res, next) => {
  try {
    const [rows] = await pool.query('SELECT * FROM projects ORDER BY sort_order ASC, id ASC');
    res.json(rows);
  } catch (error) {
    next(error);
  }
});

app.post('/api/projects', ensureAuth, async (req, res, next) => {
  try {
    const {
      slug,
      badge,
      accent,
      titleId,
      titleEn,
      descriptionId,
      descriptionEn,
      roleId,
      roleEn,
      featuresId,
      featuresEn,
      tech,
      demoUrl,
      githubUrl,
      sortOrder,
      published
    } = req.body;

    const [result] = await pool.query(
      `INSERT INTO projects
       (slug, badge, accent, title_id, title_en, description_id, description_en, role_id, role_en, features_id, features_en, tech, demo_url, github_url, sort_order, published)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        slug,
        badge,
        accent,
        titleId,
        titleEn,
        descriptionId,
        descriptionEn,
        roleId,
        roleEn,
        JSON.stringify(featuresId || []),
        JSON.stringify(featuresEn || []),
        JSON.stringify(tech || []),
        demoUrl || null,
        githubUrl || null,
        Number(sortOrder || 0),
        published ? 1 : 0
      ]
    );

    res.status(201).json({ id: result.insertId });
  } catch (error) {
    next(error);
  }
});

app.put('/api/projects/:id', ensureAuth, async (req, res, next) => {
  try {
    const projectId = req.params.id;
    const {
      slug,
      badge,
      accent,
      titleId,
      titleEn,
      descriptionId,
      descriptionEn,
      roleId,
      roleEn,
      featuresId,
      featuresEn,
      tech,
      demoUrl,
      githubUrl,
      sortOrder,
      published
    } = req.body;

    await pool.query(
      `UPDATE projects SET
        slug = ?, badge = ?, accent = ?, title_id = ?, title_en = ?, description_id = ?, description_en = ?,
        role_id = ?, role_en = ?, features_id = ?, features_en = ?, tech = ?, demo_url = ?, github_url = ?,
        sort_order = ?, published = ?
      WHERE id = ?`,
      [
        slug,
        badge,
        accent,
        titleId,
        titleEn,
        descriptionId,
        descriptionEn,
        roleId,
        roleEn,
        JSON.stringify(featuresId || []),
        JSON.stringify(featuresEn || []),
        JSON.stringify(tech || []),
        demoUrl || null,
        githubUrl || null,
        Number(sortOrder || 0),
        published ? 1 : 0,
        projectId
      ]
    );

    res.json({ ok: true });
  } catch (error) {
    next(error);
  }
});

app.delete('/api/projects/:id', ensureAuth, async (req, res, next) => {
  try {
    await pool.query('DELETE FROM projects WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (error) {
    next(error);
  }
});

app.get('/api/certificates', async (req, res, next) => {
  try {
    const [rows] = await pool.query('SELECT * FROM certificates ORDER BY sort_order ASC, id ASC');
    res.json(rows);
  } catch (error) {
    next(error);
  }
});

app.post('/api/certificates', ensureAuth, async (req, res, next) => {
  try {
    const { titleId, titleEn, providerId, providerEn, year, sortOrder, published } = req.body;
    const [result] = await pool.query(
      `INSERT INTO certificates (title_id, title_en, provider_id, provider_en, year, sort_order, published)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [titleId, titleEn, providerId, providerEn, year, Number(sortOrder || 0), published ? 1 : 0]
    );
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    next(error);
  }
});

app.put('/api/certificates/:id', ensureAuth, async (req, res, next) => {
  try {
    const { titleId, titleEn, providerId, providerEn, year, sortOrder, published } = req.body;
    await pool.query(
      `UPDATE certificates SET title_id = ?, title_en = ?, provider_id = ?, provider_en = ?, year = ?, sort_order = ?, published = ? WHERE id = ?`,
      [titleId, titleEn, providerId, providerEn, year, Number(sortOrder || 0), published ? 1 : 0, req.params.id]
    );
    res.json({ ok: true });
  } catch (error) {
    next(error);
  }
});

app.delete('/api/certificates/:id', ensureAuth, async (req, res, next) => {
  try {
    await pool.query('DELETE FROM certificates WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (error) {
    next(error);
  }
});

app.get('/api/technologies', async (req, res, next) => {
  try {
    const [rows] = await pool.query('SELECT * FROM technologies ORDER BY sort_order ASC, id ASC');
    res.json(rows);
  } catch (error) {
    next(error);
  }
});

app.post('/api/technologies', ensureAuth, async (req, res, next) => {
  try {
    const { category, labelId, labelEn, weight, sortOrder, published } = req.body;
    const [result] = await pool.query(
      `INSERT INTO technologies (category, label_id, label_en, weight, sort_order, published)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [category, labelId, labelEn, Number(weight || 0), Number(sortOrder || 0), published ? 1 : 0]
    );
    res.status(201).json({ id: result.insertId });
  } catch (error) {
    next(error);
  }
});

app.put('/api/technologies/:id', ensureAuth, async (req, res, next) => {
  try {
    const { category, labelId, labelEn, weight, sortOrder, published } = req.body;
    await pool.query(
      `UPDATE technologies SET category = ?, label_id = ?, label_en = ?, weight = ?, sort_order = ?, published = ? WHERE id = ?`,
      [category, labelId, labelEn, Number(weight || 0), Number(sortOrder || 0), published ? 1 : 0, req.params.id]
    );
    res.json({ ok: true });
  } catch (error) {
    next(error);
  }
});

app.delete('/api/technologies/:id', ensureAuth, async (req, res, next) => {
  try {
    await pool.query('DELETE FROM technologies WHERE id = ?', [req.params.id]);
    res.json({ ok: true });
  } catch (error) {
    next(error);
  }
});

app.get('/auth/github', passport.authenticate('github', { scope: ['read:user', 'user:email'] }));
app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/admin/?auth=failed' }), (req, res) => {
  res.redirect('/admin/?auth=success');
});

app.post('/auth/logout', (req, res, next) => {
  req.logout(err => {
    if (err) return next(err);
    req.session.destroy(() => {
      res.clearCookie('connect.sid');
      res.json({ ok: true });
    });
  });
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin', 'index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`Portfolio server running on http://localhost:${port}`);
});
