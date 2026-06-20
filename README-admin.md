# Cloudflare D1 Admin Setup

## What this adds
- Cloudflare D1 storage for projects, certificates, and technologies
- Cloudflare Pages Functions API for portfolio data
- Token-based admin panel at `/admin`
- Portfolio data API at `/api/portfolio`

## Setup
1. Create a D1 database in Cloudflare.
2. Update `wrangler.toml` with your real `database_id`.
3. Import `db/d1-schema.sql` into the D1 database.
4. Set `ADMIN_TOKEN` in Cloudflare Pages environment variables.
5. Open:
   - Portfolio: your Cloudflare Pages URL
   - Admin: `/admin`

## Notes
- The admin panel uses a token stored in localStorage and sent as `x-admin-token`.
- The portfolio frontend reads from `/api/portfolio` and falls back to local data if the API is unavailable.
- If you later want GitHub login, it can be layered on top of Pages Functions, but D1 itself is already free and ready for this setup.
