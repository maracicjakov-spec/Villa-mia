# Villa Mia — website demo

A static site with no build step: `index.html`, `styles.css`, `app.js`, plus `images/` and `fonts/`.
It deploys as-is to Vercel, Netlify or ordinary hosting.

## Before launch
- In `app.js`, set `CONFIG.inquiryEmail`. The form sends through formsubmit.co, and until an address is set it shows a "not connected" notice.
- `CONFIG.directBookingUrl` is optional. When it is set, every booking button points to it instead of Airbnb.
- Replace the placeholder domain `villa-mia.vercel.app` in `index.html` (canonical, og, hreflang, JSON-LD), `robots.txt` and `sitemap.xml`.
- Get the owner's permission to use the listing photos.

## Content sources
- The facts come only from Airbnb listing 13507672 (fetched 2026-11-05).
- Distances (Split, Žnjan 15–20 min; Vranjača 8 km) are the host's own figures.
- The listing's destination stock photos (Split, Krka, Dubrovnik, etc.) are deliberately not used.
- The originals are in `_src/`, which is excluded from git and Vercel.

## i18n
- EN is written in the markup using `data-i18n*` keys.
- HR, DE and IT live in `I18N` in `app.js`, and script-only strings live in `UI`.
- Gallery captions are in `GALLERY` in all four languages.
