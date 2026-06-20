export function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      ...headers
    }
  });
}

export async function readJson(request) {
  try {
    return await request.json();
  } catch {
    return {};
  }
}

export function adminTokenFromRequest(request) {
  const url = new URL(request.url);
  return request.headers.get('x-admin-token') || url.searchParams.get('token') || '';
}

export function requireAdmin(env, request) {
  const expectedToken = env.ADMIN_TOKEN || '';
  if (!expectedToken) return false;
  return adminTokenFromRequest(request) === expectedToken;
}

export function parseMaybeJson(value) {
  if (Array.isArray(value)) return value;
  if (value === null || value === undefined || value === '') return [];
  if (typeof value !== 'string') return value;
  try {
    return JSON.parse(value);
  } catch {
    return [];
  }
}

export function serializeArray(value) {
  if (Array.isArray(value)) return JSON.stringify(value);
  if (typeof value === 'string') {
    const normalized = value.split(',').map(item => item.trim()).filter(Boolean);
    return JSON.stringify(normalized);
  }
  return JSON.stringify([]);
}
