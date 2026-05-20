# Live deployment checklist

## Build (verified)

```bash
npm ci && npm run build
```

Netlify uses **npm** (not pnpm). Commit `package-lock.json` to Git.

Output:
- **Static site:** `dist/public/`
- **Node server (optional):** `dist/index.js`

---

## Option A — Netlify (recommended in this project)

1. Connect repo to Netlify.
2. Build settings (or use `.netlify/netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** `dist/public`
   - **Functions directory:** `netlify/functions`
3. Set **Environment variables** in Netlify → Site settings → Environment variables:

   | Variable | Example |
   |----------|---------|
   | `SMTP_HOST` | `smtp.gmail.com` |
   | `SMTP_PORT` | `587` |
   | `SMTP_USER` | `thejpsolution1@gmail.com` |
   | `SMTP_PASS` | Gmail App Password (16 chars, no spaces) |
   | `CONSULTATION_TO` | `thejpsolution1@gmail.com,joe@bourbonholdings.net` |
   | `CONSULTATION_REPLY_TO` | `joe@bourbonholdings.net` |

4. Deploy. Form posts to `/api/consultation` → Netlify Function (`consultation.js`) → Gmail SMTP.

5. After deploy, open **Netlify → Functions** and confirm `consultation` is listed. If missing, the form will fail on the live site.

6. Test the API (replace with your domain):

   ```bash
   curl -X POST https://probate.thejpsolution.com/api/consultation \
     -H "Content-Type: application/json" \
     -d "{\"fullName\":\"Test\",\"email\":\"you@example.com\",\"phone\":\"555\",\"role\":\"Heir\",\"propertyAddress\":\"123 Main\",\"solutionType\":\"Other\",\"description\":\"Test\"}"
   ```

   Expect: `{"success":true}`. If you see HTML instead, the function redirect is not active — redeploy after pulling the latest `netlify.toml`.

**Do not** commit `server/.env` — use Netlify env vars only.

---

## Option B — Node host (Railway, Render, VPS)

1. Run `npm run build`.
2. Set the same env vars on the host.
3. Start: `npm start` (serves `dist/public` + `/api/consultation`).

Set `PORT` if the host requires it (e.g. `8080`).

---

## Before go-live

- [ ] Gmail App Password created for `thejpsolution1@gmail.com` (2-Step Verification on).
- [ ] `SMTP_PASS` set on hosting (not placeholder text).
- [ ] Test form on live URL — team inbox + client confirmation both arrive.
- [ ] Check client spam folder if confirmation missing.
- [ ] `server/.env` is **not** pushed to Git (listed in `.gitignore`).

---

## Optional analytics

Only if you use Umami/analytics, set in hosting:

- `VITE_ANALYTICS_ENDPOINT`
- `VITE_ANALYTICS_WEBSITE_ID`

If unset, the analytics script is removed from the built HTML.
