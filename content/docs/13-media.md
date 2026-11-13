---
title: "Media"
summary: "Images, audio and video with a full transport, on a second display or on one."
section: "Features"
order: 4
---

# Media

The media library handles images, audio and video, with a full playback
transport for anything that moves.

## Library

Import images, audio files and video files into the library; they live on
your disk under the [data root](/docs/getting-started#where-your-data-lives)
and are available offline.

## Transport

Audio and video assets get a full transport:

| Control | Action |
|---|---|
| Play / Pause | Start and stop playback |
| Seek | Jump anywhere in the asset |
| Volume | Set playback level |
| Stop | End playback |

## Background pictures

Audio and video assets can carry a **background picture** — so a worship
audio track shows a themed still instead of a black screen, and a video can
sit over a branded backdrop. The picture is set per asset in the editor and
travels with it onto the audience display.

## One screen or two

With a second display connected, the audience window shows the live output
while you control playback from the studio. With only one screen, the
**media editor doubles as the player**, so you can rehearse a service on a
laptop and still see and hear exactly what the congregation would.

## Media playlists

A **media playlist** is an ordered list of media assets that plays as one
run: start it and Zopresent projects the first clip, then **advances
automatically** to the next each time a clip ends. The studio's transport
only hears "media ended" when the *whole run* is over, because the next clip
has already started the moment the previous one finished — no dead air
between clips.

Two properties make a run safe to operate live:

- **Snapshot at start.** The run is a snapshot of the playlist as it
  started; editing the list mid-run changes the stored copy, never the clip
  the room is watching.
- **Files are verified.** Starting a run checks every referenced file
  exists on disk first, and names the missing one if not.

Use playlists for pre-service loops, announcement reels, or any sequence you
want hands-free.

## On air

Media items enter the service order like everything else: preview them,
then **Ctrl+L** to send live. When a video ends it stops cleanly — what
comes next is whatever you send, never a surprise.
