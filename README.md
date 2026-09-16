# Saumya & Kunal — digital wedding invitation

This package contains a mobile-friendly wedding invitation based on the uploaded `Invite.pdf`.

## Included
- `index.html` — invitation page
- `styles.css` — design/theme
- `script.js` — navigation + demo gate
- `assets/page-1.jpg` through `page-7.jpg` — rendered invitation pages

## Security note
A password check inside JavaScript is only a **visual/convenience gate**. It does not protect the images from someone who knows how to inspect a webpage.

For a genuinely private invitation:
1. Deploy the site to Cloudflare Pages.
2. Put the project behind **Cloudflare Access**.
3. Create an Access policy that allows only invited email addresses (or another authentication method you control).
4. Keep the site HTTPS-only.
5. Keep `robots.txt`/`noindex` enabled, but remember that `noindex` is not access control.

This is preferable to putting a real password directly into `script.js`.

## GitHub Pages
The visual site can also be hosted on GitHub Pages, similar to the reference site, but GitHub Pages by itself is **not a private/authenticated hosting layer**. Use it only if the invitation is intended to be public/unlisted rather than confidential.
