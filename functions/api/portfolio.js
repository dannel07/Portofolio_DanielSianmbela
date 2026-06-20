import { json, parseMaybeJson } from '../_shared.js';

function mapProject(row) {
  return {
    id: row.id,
    slug: row.slug,
    badge: row.badge,
    accent: row.accent,
    title_id: row.title_id,
    title_en: row.title_en,
    description_id: row.description_id,
    description_en: row.description_en,
    role_id: row.role_id,
    role_en: row.role_en,
    features_id: parseMaybeJson(row.features_id),
    features_en: parseMaybeJson(row.features_en),
    tech: parseMaybeJson(row.tech),
    demo_url: row.demo_url,
    github_url: row.github_url,
    sort_order: row.sort_order,
    published: !!row.published
  };
}

function mapCertificate(row) {
  return {
    id: row.id,
    title_id: row.title_id,
    title_en: row.title_en,
    provider_id: row.provider_id,
    provider_en: row.provider_en,
    year: row.year,
    sort_order: row.sort_order,
    published: !!row.published
  };
}

function mapTechnology(row) {
  return {
    id: row.id,
    category: row.category,
    label_id: row.label_id,
    label_en: row.label_en,
    weight: row.weight,
    sort_order: row.sort_order,
    published: !!row.published
  };
}

export async function onRequestGet({ env }) {
  const [projects, certificates, technologies] = await Promise.all([
    env.PORTFOLIO_DB.prepare('SELECT * FROM projects WHERE published = 1 ORDER BY sort_order ASC, id ASC').all(),
    env.PORTFOLIO_DB.prepare('SELECT * FROM certificates WHERE published = 1 ORDER BY sort_order ASC, id ASC').all(),
    env.PORTFOLIO_DB.prepare('SELECT * FROM technologies WHERE published = 1 ORDER BY sort_order ASC, id ASC').all()
  ]);

  return json({
    projects: projects.results.map(mapProject),
    certificates: certificates.results.map(mapCertificate),
    technologies: technologies.results.map(mapTechnology)
  });
}
