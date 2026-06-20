import { json, readJson, requireAdmin } from '../_shared.js';

export async function onRequest(context) {
  const { request, env } = context;
  const method = request.method.toUpperCase();

  if (method === 'GET') {
    const { results } = await env.PORTFOLIO_DB.prepare('SELECT * FROM technologies ORDER BY sort_order ASC, id ASC').all();
    return json(results);
  }

  if (method === 'POST') {
    if (!requireAdmin(env, request)) return json({ message: 'Unauthorized' }, 401);
    const body = await readJson(request);
    const result = await env.PORTFOLIO_DB.prepare(
      `INSERT INTO technologies (category, label_id, label_en, weight, sort_order, published)
       VALUES (?, ?, ?, ?, ?, ?)`
    ).bind(
      body.category || 'tool',
      body.labelId,
      body.labelEn,
      Number(body.weight || 0),
      Number(body.sortOrder || 0),
      body.published ? 1 : 0
    ).run();
    return json({ id: result.meta.last_row_id }, 201);
  }

  if (method === 'PUT' || method === 'PATCH' || method === 'DELETE') {
    if (!requireAdmin(env, request)) return json({ message: 'Unauthorized' }, 401);
    const url = new URL(request.url);
    const id = url.searchParams.get('id') || (await readJson(request)).id;
    if (!id) return json({ message: 'Missing technology id' }, 400);

    if (method === 'DELETE') {
      await env.PORTFOLIO_DB.prepare('DELETE FROM technologies WHERE id = ?').bind(id).run();
      return json({ ok: true });
    }

    const body = await readJson(request);
    await env.PORTFOLIO_DB.prepare(
      'UPDATE technologies SET category = ?, label_id = ?, label_en = ?, weight = ?, sort_order = ?, published = ? WHERE id = ?'
    ).bind(
      body.category || 'tool',
      body.labelId,
      body.labelEn,
      Number(body.weight || 0),
      Number(body.sortOrder || 0),
      body.published ? 1 : 0,
      id
    ).run();
    return json({ ok: true });
  }

  return json({ message: 'Method not allowed' }, 405);
}
