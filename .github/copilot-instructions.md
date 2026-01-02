Purpose
-------
Help AI coding agents be immediately productive in this small static website repository.

Quick summary
-------------
- Type: Single-page static site (HTML + inline CSS/JS) with image and audio assets in repository root.
- Main entry: `Birthday_Website.html` (contains the full page, inline <style> and <script>).
- Extra file: `Untitled-1.css` appears to contain duplicated HTML/CSS content (review before editing).

Big picture
-----------
- This repository is a self-contained client-side page (no build, no server code). Editing the HTML directly is the main workflow.
- Assets (images: `1.jpeg`..`6.jpeg`, audio: `birthday-song.mp3`) live in the repo root and are referenced by filenames in the HTML.
- Confetti animation is loaded from CDN in the HTML via:

```html
<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
```

- Key DOM IDs and elements used by the JS (do not rename without updating JS): `overlay`, `mainContent`, `bgMusic`, `days`, `hours`, `mins`.
- The interactive entry point is the `startPage()` function in `Birthday_Website.html` — many visual behaviors (show/hide, animations, audio play, confetti) rely on it.

Developer workflows
-------------------
- Preview locally: open `Birthday_Website.html` directly in a browser, or run a static server from the repo root:

```powershell
python -m http.server 8000
# then open http://localhost:8000/Birthday_Website.html
```

- VS Code Live Server works fine for rapid iteration.
- No tests, no package manager, no build steps. Keep changes minimal and verify in-browser.

Project-specific conventions / gotchas
-----------------------------------
- Inline-first: most CSS and JS live inside `Birthday_Website.html` (search for `<style>` and `<script>` blocks). When adjusting styles, prefer editing the inline `<style>` block to keep the file self-contained unless you intentionally consolidate styles into a separate CSS file.
- Duplicate file: `Untitled-1.css` contains HTML-like content and appears to be a copy of page markup — treat it as a draft/backup. Do not remove or refactor it without confirming with the repo owner.
- Element IDs are referenced directly from JS; refactors that rename IDs or move elements will break functionality unless JS is updated accordingly.
- Audio: `birthday-song.mp3` is a local asset referenced in the page. If you replace it or move it, update the `<audio>` source path.

Integration points
------------------
- CDN dependency: `canvas-confetti` is loaded from jsdelivr (network required for confetti to run).
- No backend integrations or external APIs beyond the confetti CDN and any external audio sources referenced in `Untitled-1.css` (review before changing).

Examples from the repo
----------------------
- Confetti CDN script (from `Birthday_Website.html` head):

```html
<script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js"></script>
```

- start button calls `startPage()` (entry point):

```html
<button onclick="startPage()">FOR KASHVI 🤍</button>
```

- Audio element uses local file:

```html
<audio id="bgMusic" loop>
  <source src="birthday-song.mp3" type="audio/mpeg">
</audio>
```

Editing guidance for AI agents
-----------------------------
- Preserve IDs and element structure unless you update corresponding JS. When in doubt, make non-destructive changes (add classes or incremental style overrides) and test in-browser.
- If you consolidate styles into a single external CSS file, update the HTML to reference it and test both desktop and mobile (`@media` rules are present in the page).
- If publishing to GitHub Pages, either rename `Birthday_Website.html` to `index.html` at the repo root or configure Pages to serve that file.

What I couldn't find
--------------------
- No build/test scripts or CI configuration present. If you expect automated checks, add a README or CI pipeline describing them.

Next steps / questions for repo owner
-----------------------------------
- Should `Untitled-1.css` be removed, renamed, or merged into `Birthday_Website.html`? (it appears redundant)
- Do you want the published site root to be `index.html` for GitHub Pages?

Please review and tell me which areas you want expanded or edited.
