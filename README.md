# Pit Stop Study Timer

A pixel-art study timer with racing-style pacing: study laps, pit-stop breaks, day/night cycle,
lap goals, long breaks, statistics and presets. Works offline and installs as an app (PWA).
Everything stays in the browser (localStorage). No accounts, no analytics, no third-party requests.

## Publish
Upload this whole folder to any static HTTPS host (GitHub Pages, Netlify, Cloudflare Pages...).
HTTPS (or `localhost`) is required for installation, notifications and keeping the screen awake.

Try it locally: `python3 -m http.server 8000` in this folder, then open http://localhost:8000

After changing any file, bump `CACHE_VERSION` in `sw.js` so installed copies update
(users see a "New version available" prompt).

## Files
- `index.html` the whole app (code + styles)
- `sw.js` offline cache, `manifest.webmanifest` install info, `icons/` app icons
- `fonts/` bundled pixel fonts with their licenses

## Credits and licenses
- Fonts: Press Start 2P and VT323, SIL Open Font License 1.1 (see `fonts/`).
- Independent project, not affiliated with any racing series or team.
- Add a LICENSE file for the project code before publishing (for example MIT).

## License

MIT, see [LICENSE](LICENSE). The bundled pixel fonts (Press Start 2P, VT323) are under the SIL Open Font License 1.1.
