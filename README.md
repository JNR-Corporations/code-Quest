# CodeQuest

An Android-first programming practice app built with HTML5, CSS3 and vanilla JavaScript. No build step, accounts, analytics or backend user database. Includes **119 authored questions in 23 separate question banks**. Collection counts reflect actual available questions; this is a compact starting library, not an exhaustive exam syllabus.

## Run locally

Requires Python 3 or another static HTTP server. From this directory:

```sh
python3 -m http.server 8080 --directory dist
```

Open http://localhost:8080. ES modules cannot be opened with file://. No npm install is required. Run core tests with Node 20+ using `npm test`.

## Use

Home → Start a quiz → choose collection, topics, difficulty, count, format, timing and history pool. Choose an option, submit, read the explanation, and continue. Multiple-answer questions require exact matches. True/False has two options. Output, debugging, missing-code and comparison questions use dedicated prompts and code presentation. Snippets are never executed.

Pause saves the current question and submitted responses. Refresh or reopen and use Resume. Unsubmitted selections are not attempts. A submitted question is counted once per session; retrying it in another session increments attempts while keeping one unique question. The incorrect pool uses the latest result for each question, so a subsequent correct answer removes it from revision. Finished sessions retain their original answers for review. Results count questions without a submission as unanswered. Accuracy uses submitted answers; score uses all session questions. Time tracks foreground quiz time and pauses when leaving the screen.

Bookmarks, question-level attempt counts, history, saved configurations and preferences are stored locally. Settings exports/imports JSON backups and offers confirmed resets. Imports replace local data and are validated against available question IDs and answer references. Clear history retains per-question totals; aggregate unanswered/session counts derive from retained history.

## Deploy

Upload the **contents of dist/** to any HTTPS static host. Preserve relative paths. No server rewrites are needed because routing uses URL hashes. There are no external fonts, libraries or CDNs. The bundled Sites hosting manifest is deployment metadata; it is not needed by other hosts.

## Android installation and WebView

On HTTPS, load once and wait for the offline-ready message. Settings → Check offline availability verifies the app shell and question banks. On Android Chrome use Install app or the browser menu → Add to Home screen. Offline availability requires a successful service-worker installation; initial installation precaches all small question banks. Updates are atomic: a new cache must finish before activation and old caches are then removed. Increment the cache version in `dist/service-worker.js` for releases; do not change assets without changing the version.

The PWA is ready to wrap using a WebView project, but **an APK is not included**. Host under a secure origin (or use Android WebViewAssetLoader), enable JavaScript and DOM storage, and support IndexedDB as available. Avoid enabling broad file access or adding native JS bridges. Wire Android Back to WebView history. Service-worker and install support vary by WebView version; test on target devices. Clipboard and downloads may need wrapper-specific handling. No actual Android hardware or WebView performance measurements are claimed.

## Architecture

- `dist/index.html`: small accessible application shell.
- `dist/css/`: shared responsive UI and customizable palette.
- `dist/js/app.js`: screen composition, delegated events and integration.
- `router.js`: hash navigation and browser Back.
- `question-loader.js`, `question-validator.js`: lazy ES module loading, counts, duplicate and schema checks, configuration filtering.
- `quiz-engine.js`: reusable sessions, exact grading, scoring and attempt statistics independent of language content.
- `database.js`, `storage.js`: versioned IndexedDB transactions, localStorage backup, serialized writes, import validation and graceful fallback.
- `code-renderer.js`: escaped token highlighting, contained code scroll, line numbers, copy and expansion.
- `theme.js`, `search.js`, `utils.js`: preferences, feedback tones, search, icons and formatting.
- `dist/data/catalog.js`: exact collection metadata. Each other data JS file exports a real question bank.
- `manifest.json`, `service-worker.js`, `assets/icons/`: install and atomic offline caching.
- `tests/core.test.js`: bank validation, scoring, persistence payloads, counts, revision filtering and safe code rendering.

## Add a question or pack

Edit the corresponding bank or create `dist/data/your-pack.js` with a default array export. Use a permanent globally unique ID; never renumber existing IDs.

```js
export default [{
  id: 'your-pack-001', language: 'your-pack', topic: 'Topic',
  difficulty: 'Easy', format: 'concept',
  question: 'Which answer is correct?', code: '',
  options: [
    { id: 'a', text: 'Correct answer' },
    { id: 'b', text: 'Distractor one' },
    { id: 'c', text: 'Distractor two' },
    { id: 'd', text: 'Distractor three' }
  ],
  answers: ['a'], explanation: 'Explain why the answer is correct.',
  tags: ['Topic'], hint: 'An optional helpful hint.'
}];
```

Supported formats: `mcq`, `output`, `bug`, `complete`, `syntax`, `concept`, `boolean`, `multiple`, `comparison`, `debug`, `interview`. Mixed, custom and incorrect revision are configurations of these formats. Boolean questions have two options; other formats have four. Multiple-answer questions can have more than one answer ID. Optional `explanationCode` displays an additional code example after submission. Use “Snippet A/B” labels in comparison code. All displayed data is escaped; never add executable code from a question pack.

Update the pack’s count, topics, difficulties and formats in `catalog.js`, add its path to the service worker FILES list, then bump CACHE and run tests. New packs can be loaded dynamically by ID only after being registered in the trusted catalog. Do not import arbitrary executable JS from untrusted users.

## Reliability and limitations

Browser/site data clearing removes local progress. Private browsing, quota limits and device policies can prevent storage; the UI reports write failures and uses localStorage backup if IndexedDB fails. One active tab per device is recommended: simultaneous tabs are not a collaborative editor and can overwrite local state. JSON backups should be kept outside the browser. This app does not execute code, implement cloud sync, or include gamification. Keyboard controls use native buttons/forms with visible focus. Reduced motion is supported. Browser/mobile-emulation QA is separate from actual Android-device testing.
