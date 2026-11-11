// Single source of truth for all site copy. Pages render from this module,
// so updating a version, size or feature here updates every page.

export const site = {
  name: "Zowe Worship",
  tagline: "Scripture First. Always.",
  description:
    "Zowe Worship is a desktop app for worship services — one operator runs scripture, songs, media and themes from a studio window while the audience display shows exactly what is on air. Fully offline, including AI scripture detection.",
  org: "Zowesoft",
  repo: "https://github.com/zowesoft/zowe-worship",
  releaseTag: "v0.1.0",
  releaseUrl: "https://github.com/zowesoft/zowe-worship/releases/tag/v0.1.0",
  releasesUrl: "https://github.com/zowesoft/zowe-worship/releases",
  latestUrl: "https://github.com/zowesoft/zowe-worship/releases/latest",
};

export const nav = [
  { href: "/screenshots", label: "Screenshots" },
  { href: "/docs", label: "Docs" },
  { href: "/blog", label: "Blog" },
  { href: "/download", label: "Download" },
] as const;

export const features = [
  {
    title: "Service order & live presentation",
    body: "Build a service from scripture, songs, media and custom items; send anything preview or live with a keystroke. A separate audience window mirrors the live output, and the decision history lets you restore whatever was already projected.",
  },
  {
    title: "Bible library",
    body: "Install the translations you hold licenses for — nothing copyrighted ships with the app. Reference entry (Jn 3:16), word/phrase/prefix search and verse ranges, with lookups answering in single-digit milliseconds.",
  },
  {
    title: "Songs",
    body: "A song library with multiple arrangements and sections. Add a whole arrangement or a single section to the service, then preview and project it.",
  },
  {
    title: "Media",
    body: "Image, audio and video with a full transport — play, pause, seek, volume, stop. Audio and video assets can carry a background picture, and the editor doubles as the player when no second display is connected.",
  },
  {
    title: "Themes",
    body: "A full theme editor with live preview: typography, size, spacing, alignment, colours, backgrounds and reference placement. Themes resolve and freeze into each slide, so editing can never restyle content that is already on air.",
  },
  {
    title: "Offline AI detection",
    body: "While listening, on-device speech recognition watches the preacher, detects scripture as it is spoken and queues one-click approval with an explicit confidence statement. Nothing leaves the machine; auto-projection is off by default.",
  },
];

export const downloads = [
  {
    id: "windows",
    platform: "Windows",
    package: "NSIS installer",
    file: "zowe-worship-amd64-installer.exe",
    size: "115.4 MB",
    detail: "x86-64 · speech engine bundled",
  },
  {
    id: "macos",
    platform: "macOS",
    package: ".app bundle (zip)",
    file: "zowe-worship-macos.zip",
    size: "114.2 MB",
    detail: "Universal · ad-hoc signed",
  },
  {
    id: "deb",
    platform: "Linux (Debian/Ubuntu)",
    package: ".deb",
    file: "zowe-worship.deb",
    size: "115.3 MB",
    detail: "GTK 4 + WebKitGTK 6.0",
  },
  {
    id: "rpm",
    platform: "Linux (Fedora/RHEL)",
    package: ".rpm",
    file: "zowe-worship.rpm",
    size: "129.1 MB",
    detail: "GTK 4 + WebKitGTK 6.0",
  },
  {
    id: "appimage",
    platform: "Linux (any distro)",
    package: "AppImage",
    file: "zowe-worship-x86_64.AppImage",
    size: "192.0 MB",
    detail: "x86-64 · engine included",
  },
].map((d) => ({
  ...d,
  href: `https://github.com/zowesoft/zowe-worship/releases/download/${site.releaseTag}/${d.file}`,
}));

export type Doc = {
  slug: string;
  title: string;
  summary: string;
  body: string;
};

export const docs: Doc[] = [
  {
    slug: "getting-started",
    title: "Getting started",
    summary: "Install the app, run your first service, and know where your data lives.",
    body: `## Install

Download the installer for your platform from the [releases page](${site.releasesUrl}):

| Platform | Package |
|---|---|
| Windows | NSIS installer (\`.exe\`) |
| Linux | \`.deb\`, \`.rpm\` or \`.AppImage\` (GTK 4 + WebKitGTK 6.0) |
| macOS | \`.app\` bundle (universal, ad-hoc signed) |

Packages are currently **unsigned** — SmartScreen (Windows) or Gatekeeper
(macOS) will ask for confirmation on first run. That is expected for v0.1.0.

## Your first service

1. Open Zowe Worship. The studio window is where you work; the audience
   display is a separate window you can move to the projector.
2. Add items to the service order: scripture references, songs from the
   library, media, or custom items.
3. Select an item to preview it in the studio, then press **Ctrl+L** to send
   it live to the audience display.
4. Anything already projected can be restored from the decision history —
   a misstep never leaves the screen blank.

## Where your data lives

Per-user data (database, backups, installed translations, media library)
follows the OS convention:

- **Windows:** \`%LOCALAPPDATA%\\Zowesoft\\Zowe Worship\`
- **Linux:** \`~/.local/share/Zowesoft/Zowe Worship\`
- **macOS:** \`~/Library/Application Support/Zowesoft/Zowe Worship\`

The database is checksum-tracked with automatic backups, and the app
refuses to open a database written by a newer build rather than corrupting
it. A single-instance guard focuses the running studio instead of starting
a second copy.`,
  },
  {
    slug: "bible-translations",
    title: "Bible translations",
    summary: "Install the texts you are licensed to use — the app ships none.",
    body: `## Why nothing ships with the app

Bible translations are copyrighted works and redistribution requires the
publisher's permission. Zowe Worship deliberately bundles **no** Bible text,
so you install the copies you hold licenses for through the command-line
importer.

## Importing a translation

\`\`\`sh
go run ./cmd/bible-import \\
  -source /path/to/NIV_bible.json \\
  -id niv -name "New International Version" -abbr NIV \\
  -license "Copyrighted" \\
  -attribution "Holy Bible, New International Version, NIV. Copyright 1973, 1978, 1984, 2011 by Biblica, Inc."
\`\`\`

The importer:

- verifies the dataset is complete (all 66 books) and refuses partial text
- prints the copyright holder as a notice for restricted translations
- records the license and attribution line that Settings will display

Public-domain translations (KJV, for example) are pre-registered in
\`internal/bible/licenses.go\`.

## Using it in the service

Once installed, enter a reference like \`Jn 3:16\` to jump straight to a
verse, search by word, phrase or prefix, or type a range such as
\`John 3:16-18\`. One keypress airs the top search result. Reference lookups
answer in single-digit milliseconds, and the targets are enforced by the
\`cmd/bible-bench\` benchmark (p95 under 50 ms for references, under 150 ms
for full-text search).`,
  },
  {
    slug: "shortcuts",
    title: "Shortcuts",
    summary: "The keystrokes that run a live service.",
    body: `## The core loop

| Key | Action |
|---|---|
| \`Ctrl+L\` | Send the previewed item live to the audience display |
| \`Ctrl+F\` | Focus the Bible search box |
| \`F8\` | Toggle listening — on-device speech detection |
| \`F9\` | Pause / resume auto-projection |
| \`F12\` | Emergency disable detection (live output preserved) |
| \`←\` / \`→\` | Previous / next schedule item |

These are the defaults. Every action can be rebound in **Settings →
Shortcuts**, and an open studio picks up the change without a restart.

## Design principles

- **Preview before air.** Nothing reaches the audience display without a
  deliberate step, so a fat-fingered click never projects the wrong slide.
- **History is reversible.** Every send is recorded; restore anything that
  was already projected without hunting for the previous item.
- **Detection never auto-projects.** The offline detector queues scripture
  references for one-click approval with an explicit confidence statement.
  Auto-projection is gated behind operator-configured safety checks and is
  off by default.

See the [getting started guide](/docs/getting-started) for how these fit
into a full service.`,
  },
  {
    slug: "building-from-source",
    title: "Building from source",
    summary: "Prerequisites, build commands, and the test suite.",
    body: `## Prerequisites

- Go 1.26+
- Node.js 20.19+ or 22.12+
- The Wails CLI:
  \`go install github.com/wailsapp/wails/v3/cmd/wails3@v3.0.0\`
- Platform extras: NSIS (Windows installer), \`libgtk-4-dev
  libwebkitgtk-6.0-dev pkg-config\` (Linux)

## Commands

\`\`\`sh
wails3 task build     # production binary (frontend is embedded)
wails3 task package   # installer for the host OS (NSIS / deb+rpm+AppImage / .app)
wails3 task dev       # development mode with hot reload
\`\`\`

On Windows, \`scripts/rebuild.sh\` runs the full loop — build, clean side
effects, relaunch, verify the window came up — in one command.

## Tests and benchmarks

\`\`\`sh
go test ./...                     # Go tests
cd frontend && npm run typecheck  # TypeScript

go run ./cmd/bible-bench          # reference/search latency targets (p95)
go run ./cmd/asr-bench -set benchmarks/sample-set  # detection benchmark
\`\`\`

The bible benchmark exits non-zero if any workload misses its target:
reference lookups p95 < 50 ms, full-text search p95 < 150 ms.

## Releases

Tagging a commit (\`git tag v0.1.0 && git push origin v0.1.0\`) starts the
release workflow: each desktop OS is packaged on its native GitHub runner
and the artifacts are attached to the GitHub release. The offline speech
engine is bundled into every package.`,
  },
  {
    slug: "faq",
    title: "FAQ & troubleshooting",
    summary: "Offline guarantees, the bundled engine, and common questions.",
    body: `## Is it really fully offline?

Yes. The desktop app makes no network calls in normal operation: scripture
detection runs on-device through the bundled speech engine, your database
and media live on disk, and no audio, transcript or text ever leaves the
machine.

## What is the speech engine?

An offline speech-recognition engine bundled into **every** package — the
Windows installer, the Linux deb/rpm/AppImage and the macOS .app. There is
no first-run download: detection works out of the box. If the engine is
missing (for example a from-source build), the app falls back to offering
the download rather than failing silently.

## Does it come with a Bible?

No. Translations are copyrighted, so the app ships with none. Install the
texts you are licensed to use with \`cmd/bible-import\` — see the
[Bible translations guide](/docs/bible-translations).

## SmartScreen / Gatekeeper warns me

Packages are unsigned in v0.1.0. On Windows choose "More info" → "Run
anyway"; on macOS right-click the app and choose "Open". Code signing is
planned.

## Where is my data?

Under the OS per-user convention — \`%LOCALAPPDATA%\\Zowesoft\\Zowe Worship\`
on Windows. Backups are automatic, and restoring a backup rolls back into
the running app.`,
  },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string;
};

export const posts: Post[] = [
  {
    slug: "zowe-worship-v0-1-0",
    title: "Zowe Worship v0.1.0",
    date: "2026-11-10",
    excerpt:
      "Our first tagged release: five packages built on native GitHub runners, the offline speech engine bundled everywhere, and what we're doing next.",
    body: `Today we're tagging **v0.1.0**, the first public release of Zowe Worship — scripture-first worship presentation for a single operator and one audience display.

## What ships

Five packages, each built on its native GitHub runner and attached to the [release](${site.releaseTag === "" ? site.releasesUrl : site.releaseUrl}):

- **Windows** — NSIS installer
- **macOS** — universal \`.app\` bundle, ad-hoc signed
- **Linux** — \`.deb\`, \`.rpm\` and an \`.AppImage\`

Every package carries the full feature set: service order and live presentation with a separate audience window, the Bible library with sub-50 ms reference lookups, songs, media with a full transport, the theme editor with on-air freezing, and the offline AI scripture detection.

## The offline engine, everywhere

The release pipeline bundles the on-device speech engine into all five packages, so detection works on first run with no download:

- the macOS \`.app\` carries \`Contents/MacOS/engines\`
- deb/rpm install it to \`/usr/local/lib/zowe-worship/engines\`
- the AppImage embeds \`usr/bin/engines\`
- the Windows installer already shipped it

The v0.1.0 asset sizes tell the story — the macOS zip went from 6.2 MB to 114.2 MB, the AppImage from 84.5 MB to 192 MB.

## Known limitations

- **Packages are unsigned.** SmartScreen and Gatekeeper will ask for confirmation. Signing (Authenticode and Apple Developer ID + notarization) is the first thing on the post-release list.
- **No bundled Bible text.** Translations are copyrighted; install your own with \`cmd/bible-import\`.
- **Smoke tests on real hardware.** CI proves the packages build; a pass on real Mac and Linux machines is still pending.

## What's next

Audience-display reconnect and mixed-DPI recovery hardening, and semantic scripture search. Follow along on [GitHub](${site.repo}).`,
  },
];

export type Screenshot = {
  slug: string;
  title: string;
  description: string;
  width: number;
  height: number;
};

export const screenshots: Screenshot[] = [
  {
    slug: "studio",
    title: "Studio window",
    description: "The operator's view: service order, preview, and the live item side by side.",
    width: 1920,
    height: 974,
  },
  {
    slug: "audience-display",
    title: "Audience display",
    description: "The separate output window — exactly what is on air, nothing else.",
    width: 1920,
    height: 1080,
  },
  {
    slug: "detection",
    title: "Detection card",
    description: "On-device detection queuing a scripture reference with explicit confidence.",
    width: 429,
    height: 554,
  },
  {
    slug: "theme-editor",
    title: "Theme editor",
    description: "Typography, colours and layout with live preview before anything goes on air.",
    width: 1388,
    height: 934,
  },
  {
    slug: "media-player",
    title: "Media transport",
    description: "Play, pause, seek and volume for audio and video, with a background picture.",
    width: 1086,
    height: 498,
  },
];
