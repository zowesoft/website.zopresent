// Single source of truth for all site copy. Pages render from this module,
// so updating a version, size or feature here updates every page.

export const site = {
  name: "Zopresent",
  tagline: "Scripture First. Always.",
  description:
    "Zopresent is a desktop app for worship services — one operator runs scripture, songs, media and themes from a studio window while the audience display shows exactly what is on air. Fully offline, including AI scripture detection.",
  org: "Zowesoft",
  repo: "https://github.com/zowesoft/zopresent",
  releaseTag: "v0.1.1",
  releaseUrl: "https://github.com/zowesoft/zopresent/releases/tag/v0.1.1",
  releasesUrl: "https://github.com/zowesoft/zopresent/releases",
  latestUrl: "https://github.com/zowesoft/zopresent/releases/latest",
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
    file: "zopresent-amd64-installer.exe",
    size: "115.9 MB",
    detail: "x86-64 · speech engine bundled",
  },
  {
    id: "macos",
    platform: "macOS",
    package: ".app bundle (zip)",
    file: "zopresent-macos.zip",
    size: "115.4 MB",
    detail: "Universal · ad-hoc signed",
  },
  {
    id: "deb",
    platform: "Linux (Debian/Ubuntu)",
    package: ".deb",
    file: "zopresent.deb",
    size: "116.6 MB",
    detail: "GTK 4 + WebKitGTK 6.0",
  },
  {
    id: "rpm",
    platform: "Linux (Fedora/RHEL)",
    package: ".rpm",
    file: "zopresent.rpm",
    size: "133.8 MB",
    detail: "GTK 4 + WebKitGTK 6.0",
  },
  {
    id: "appimage",
    platform: "Linux (any distro)",
    package: "AppImage",
    file: "zopresent-x86_64.AppImage",
    size: "193.2 MB",
    detail: "x86-64 · engine included",
  },
].map((d) => ({
  ...d,
  href: `https://github.com/zowesoft/zopresent/releases/download/${site.releaseTag}/${d.file}`,
}));

// Docs moved to content/docs/*.md — see src/lib/docs.ts. That keeps them
// readable as plain markdown in the repo and servable raw to AI tools.

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string;
};

export const posts: Post[] = [
  {
    slug: "zopresent-v0-1-0",
    title: "Zopresent v0.1.0",
    date: "2026-11-10",
    excerpt:
      "Our first tagged release: five packages built on native GitHub runners, the offline speech engine bundled everywhere, and what we're doing next.",
    body: `*This release shipped under the name Zowe Worship; the product is now Zopresent.*

Today we're tagging **v0.1.0**, the first public release of Zopresent — scripture-first worship presentation for a single operator and one audience display.

## What ships

Five packages, each built on its native GitHub runner and attached to the [release](${site.releaseTag === "" ? site.releasesUrl : site.releaseUrl}):

- **Windows** — NSIS installer
- **macOS** — universal \`.app\` bundle, ad-hoc signed
- **Linux** — \`.deb\`, \`.rpm\` and an \`.AppImage\`

Every package carries the full feature set: service order and live presentation with a separate audience window, the Bible library with sub-50 ms reference lookups, songs, media with a full transport, the theme editor with on-air freezing, and the offline AI scripture detection.

## The offline engine, everywhere

The release pipeline bundles the on-device speech engine into all five packages, so detection works on first run with no download:

- the macOS \`.app\` carries \`Contents/MacOS/engines\`
- deb/rpm install it to \`/usr/local/lib/zopresent/engines\`
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
