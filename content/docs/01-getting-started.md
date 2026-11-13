---
title: "Install and setup"
summary: "Download Zopresent, get through first run, and know where your data lives."
section: "Getting started"
order: 1
---

# Install and setup

Zopresent is a desktop app for worship services: one operator runs scripture,
songs, media and themes from a **studio window** while the **audience display**
shows exactly what is on air. Everything runs locally — including scripture
detection. No account, no subscription, no internet needed in the sanctuary.

## Download

Grab the package for your platform from the
[releases page](https://github.com/zowesoft/zopresent/releases):

| Platform | Package | Notes |
|---|---|---|
| Windows | NSIS installer (`.exe`) | x86-64, speech engine bundled |
| macOS | `.app` bundle (zip) | Universal binary, ad-hoc signed |
| Linux (Debian/Ubuntu) | `.deb` | GTK 4 + WebKitGTK 6.0 |
| Linux (Fedora/RHEL) | `.rpm` | GTK 4 + WebKitGTK 6.0 |
| Linux (any distro) | AppImage | x86-64, engine included |

Every package carries the offline speech engine, so scripture detection works
on first run with no extra download.

## The unsigned warning

Packages are currently **unsigned** — code signing is planned for after the
development phase. Until then your OS asks for confirmation on first run:

- **Windows:** SmartScreen shows *"Windows protected your PC"*. Choose
  **More info → Run anyway**.
- **macOS:** Gatekeeper blocks the app. Right-click the app in Finder and
  choose **Open**, then confirm. (Double-clicking gives no bypass option.)
- **Linux:** packages install normally through your package manager.

## First run

1. Start Zopresent. A fixed 10-second splash cycles through King James
   Version verses while the studio loads.
2. The splash appears **only in the studio window**. The audience display
   never shows it, so it can never leak to the screen during a service.
3. When the studio opens you are ready to build a service — see
   [your first service](/docs/first-service).

## Where your data lives

Everything is per-user and follows the OS convention:

| OS | Location |
|---|---|
| Windows | `%LOCALAPPDATA%\Zowesoft\Zopresent` |
| Linux | `~/.local/share/Zowesoft/Zopresent` |
| macOS | `~/Library/Application Support/Zowesoft/Zopresent` |

Inside you will find the service database (`zopresent.db`), automatic
backups, installed Bible translations, the media library and the speech
engine. Details are in the [settings reference](/docs/settings-reference).

## Two behaviours worth knowing on day one

- **Single instance.** Starting a second copy focuses the running studio
  instead of opening a duplicate. Handy when the operator double-clicks the
  icon twice in a moment of panic.
- **Newer-build protection.** The app refuses to open a database written by
  a *newer* build rather than risk corrupting it. If you ever roll back a
  version, restore a [backup](/docs/settings-reference#backups) instead.
