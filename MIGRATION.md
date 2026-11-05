# Route migration

The supplied previous export lists the routes below. The published reference was inaccessible during verification. Keep these paths if launching on the same origin. If the origin changes, configure a permanent HTTP 301 or 308 on the old host for each mapped path, targeting the matching path under the new production base.

| Previous path | New path relative to production base |
|---|---|
| `/` | `/` |
| `/services/residential-cleaning/` | `/services/residential-cleaning/` |
| `/services/commercial-cleaning/` | `/services/commercial-cleaning/` |
| `/services/deep-cleaning/` | `/services/deep-cleaning/` |
| `/services/move-in-move-out-cleaning/` | `/services/move-in-move-out-cleaning/` |
| `/services/kitchen-cleaning/` | `/services/kitchen-cleaning/` |
| `/services/bathroom-cleaning/` | `/services/bathroom-cleaning/` |
| `/services/floor-care/` | `/services/floor-care/` |
| `/services/window-cleaning/` | `/services/window-cleaning/` |
| `/services/eco-friendly-cleaning/` | `/services/eco-friendly-cleaning/` |

For a host supporting a Netlify-style _redirects file, place the mappings on the **old host** using the pattern /old-path/ https://NEW-BASE/old-path/ 301 with the real destination. For GitHub project Pages include the repository prefix in the destination. GitHub Pages does not offer configurable HTTP 301 redirects. Use a redirect-capable old host or proxy if available. If the old host only serves static files, retain the old paths and use static forwarding pages with visible destination links as a fallback. Canonical metadata alone does not forward visitors.
