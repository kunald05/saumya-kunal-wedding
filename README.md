# Saumya & Kunal — Premium Wedding Microsite

A premium, mobile-first wedding microsite built around the supplied wedding invitation artwork.

## Included
- Elegant cream / muted-gold / botanical-green visual system
- Private invitation landing screen
- Couple monogram + hero section
- Live countdown to Lagna: 26 November 2026, 12:14 PM IST
- Celebrations timeline using the invitation's event details
- Interactive 7-page invitation viewer with swipe support
- Venue section for Nandan Kanan Hotel & Resort
- Responsive mobile and desktop layouts
- Reduced-motion accessibility support
- `noindex` meta + `robots.txt` disallow

## Demo passcode
`SAUMYA-KUNAL`

## Important security note
The passcode in `script.js` is client-side, so it is **not real authentication**. Anyone who downloads the site can inspect the source and see the code.

For a genuinely private shareable URL, deploy this static site behind a server-side access layer such as Cloudflare Access. Recommended flow:

1. Deploy the folder to Cloudflare Pages.
2. Put the Pages domain behind Cloudflare Access.
3. Restrict access to invited email addresses or another server-side authentication method.
4. Keep the client-side passcode only if you also want a second, cosmetic layer.

GitHub Pages alone cannot make a static site private.

## Local preview
Open `index.html` in a browser. The invitation artwork is already included in `assets/`.
