# SPECTER

### See words differently.

SPECTER is a quiet, offline-first reading space. It gives the first few letters of each word a heavier weight, creating visual anchors while keeping the type size and original text intact.

**Paste a passage. Open a document. Find your reading rhythm.** Your library stays in this browser on this device.

## What works today

- Paste text, preview SPECTER formatting, then Quick Read or save it to your library.
- Import text PDFs, EPUB, DOCX, and TXT locally in your browser.
- Choose two-letter, three-letter, or adaptive emphasis.
- Tune type size, line spacing, intensity, and reading theme.
- Copy plain text or rich formatted text where clipboard support is available.
- Keep books and preferences in local IndexedDB storage.
- Use responsive home, library, reader, insights, and settings screens.

## Start locally

Requires Node.js 20 or newer.

```powershell
npm install
npm run dev
```

Open the local address Vite prints, usually `http://localhost:5173`.

```powershell
npm test
npm run build
npm run preview
```

## Offline use

The app includes a service worker and web app manifest. First load the app and its document parsers while online, then install it through a Chromium browser's Install App option. The service worker caches the app shell and requested same-origin assets for later use. A production host must serve the files over HTTPS for installation outside localhost.

## Privacy

Document parsing and reading happen in the browser. Documents are stored in IndexedDB on the current browser profile. SPECTER has no account or backend. Clearing browser site data removes the local library.

## Known limitations

- Scanned PDFs are detected, but OCR is not included.
- PDF text reconstruction is approximate and does not preserve the original page layout.
- Bookmarks, highlights, and notes are not yet persisted.
- Insights are a small local summary, not full reading-session analytics.
- Reader fonts use system fallbacks; font binaries are not bundled.

## Development checks

The formatting engine currently has four automated checks. Run them with `npm test`; run `npm run build` to create the production bundle.
