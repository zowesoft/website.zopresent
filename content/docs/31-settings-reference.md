---
title: "Settings reference"
summary: "Every settings group explained: Bible, Slides, Detection, Shortcuts and Backups."
section: "Advanced"
order: 2
---

# Settings reference

Settings is a separate window with five groups: **Bible**, **Slides**,
**Detection**, **Shortcuts** and **Backups**.

## Bible

The installed **Bible translations**, one row each with:

- name and abbreviation,
- **verse count** of the installed text,
- the **license and attribution** line recorded at import time.

Actions:

- **Make default** — choose the translation used for scripture entries and
  detection lookups. The default is badged on its row.

No translation installed yet? See the
[Bible library](/docs/bible-translations#installing-a-translation) guide —
translations are imported with the command-line importer because the app
ships with none.

## Scripture slides

How a passage with more than one verse becomes slides:

- **One verse per slide** — fills the wall with the verse being read and
  puts every verse in its own row on the service order.
- **Whole passage** — keeps the passage together on one slide.

How each slide *looks* is a [theme](/docs/themes) question, not a settings
question.

## Detection

Everything about the on-device listener:

- **Enabled / Disabled toggle** — the same switch as `F12` in the studio,
  with the same property: disabling stops new detections without touching
  the live display.
- **Speech engine** — Moonshine ships with the app and runs offline. The
  card can download an engine if one is missing; the download is the only
  network touch in this group.
- **Pick an engine on disk** — if more than one engine is installed, choose
  which to use.
- **Custom command** — point Zopresent at another engine entirely, e.g.
  `whisper.tiny=C:\path\whisper-cli.exe -m model.bin -np -f {audio}`. Save
  with **Save engine**.

Detection never projects on its own — the panel states this on the settings
card too. See [scripture detection](/docs/detection) for the full model.

## Shortcuts

Every action from the [shortcuts list](/docs/shortcuts) with its current
binding. Click a binding to capture a new key combination:

- clashes are detected — you cannot assign a combination twice,
- changes apply to the **running studio immediately**, no restart.

## Backups

The service database is checksum-tracked and backed up automatically. From
this group you can:

- **restore a backup** — the running app rolls back to the restored data;
- see the backup history.

Restoring is safe against the running app: it is built in, not a
copy-files-by-hand procedure. The app also refuses to open a database
written by a newer build, so version rollbacks should go through a backup
restore rather than opening old data directly.
