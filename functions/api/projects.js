import { json, readJson, requireAdmin, serializeArray } from '../_shared.js';

export async function onRequest(context) {
  const { request, env } = context;
  const method = request.method.toUpperCase();

  if (method === 'GET') {
    const { results } = await env.PORTFOLIO_DB.prepare('SELECT * FROM projects ORDER BY sort_order ASC, id ASC').all();
    return json(results);
  }

  if (method === 'POST') {
    if (!requireAdmin(env, request)) {
      return json({ message: 'Unauthorized' }, 401);
    }

    const body = await readJson(request);
    const result = await env.PORTFOLIO_DB.prepare(
      `INSERT INTO projects
        (slug, badge, accent, title_id, title_en, description_id, description_en, role_id, role_en, features_id, features_en, tech, demo_url, github_url, sort_order, published)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    ).bind(
      body.slug,
      body.badge || 'WEB',
      body.accent || 'indigo',
      body.titleId,
      body.titleEn,
      body.descriptionId,
      body.descriptionEn,
      body.roleId,
      body.roleEn,
      serializeArray(body.featuresId),
      serializeArray(body.featuresEn),
      serializeArray(body.tech),
      body.demoUrl || null,
      body.githubUrl || null,
      Number(body.sortOrder || 0),
      body.published ? 1 : 0
    ).run();

    return json({ id: result.meta.last_row_id }, 201);
  }

  if (method === 'PUT' || method === 'PATCH' || method === 'DELETE') {
    if (!requireAdmin(env, request)) {
      return json({ message: 'Unauthorized' }, 401);
    }
    const url = new URL(request.url);
    const id = url.searchParams.get('id') || (await readJson(request)).id;
    if (!id) {
      return json({ message: 'Missing project id' }, 400);
    }

    if (method === 'DELETE') {
      await env.PORTFOLIO_DB.prepare('DELETE FROM projects WHERE id = ?').bind(id).run();
      return json({ ok: true });
    }

    const body = await readJson(request);
    await env.PORTFOLIO_DB.prepare(
      `UPDATE projects SET
        slug = ?, badge = ?, accent = ?, title_id = ?, title_en = ?, description_id = ?, description_en = ?,
        role_id = ?, role_en = ?, features_id = ?, features_en = ?, tech = ?, demo_url = ?, github_url = ?,
        sort_order = ?, published = ?
       WHERE id = ?`
    ).bind(
      body.slug,
      body.badge || 'WEB',
      body.accent || 'indigo',
      body.titleId,
      body.titleEn,
      body.descriptionId,
      body.descriptionEn,
      body.roleId,
      body.roleEn,
      serializeArray(body.featuresId),
      serializeArray(body.featuresEn),
      serializeArray(body.tech),
      body.demoUrl || null,
      body.githubUrl || null,
      Number(body.sortOrder || 0),
      body.published ? 1 : 0,
      id
    ).run();

    return json({ ok: true });
  }

  return json({ message: 'Method not allowed' }, 405);
}
