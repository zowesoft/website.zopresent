---
title: "Building from source"
summary: "Prerequisites, build commands, tests, benchmarks, and how releases are cut."
section: "Advanced"
order: 3
---

# Building from source

Zopresent is built with [Wails v3](https://wails.io) — a Go backend and a
web-technology frontend — and is source-available: the code is public for
inspection, learning and building your own copy under the terms of the
[LICENSE](https://github.com/zowesoft/zopresent/blob/main/LICENSE) (no
redistribution, no reverse engineering).

## Prerequisites

- Go 1.26+
- Node.js 20.19+ or 22.12+
- The Wails CLI:
  ```sh
  go install github.com/wailsapp/wails/v3/cmd/wails3@v3.0.0
  ```
- Platform extras:
  - **Windows:** NSIS (for the installer)
  - **Linux:** `libgtk-4-dev libwebkitgtk-6.0-dev pkg-config`

## Commands

```sh
wails3 task build     # production binary (frontend is embedded)
wails3 task package   # installer for the host OS (NSIS / deb+rpm+AppImage / .app)
wails3 task dev       # development mode with hot reload
```

On Windows, `scripts/rebuild.sh` runs the full loop — build, clean side
effects, relaunch, verify the window came up — in one command.

## Tests and benchmarks

```sh
go test ./...                     # Go tests
cd frontend && npm run typecheck  # TypeScript

go run ./cmd/bible-bench          # reference/search latency targets (p95)
go run ./cmd/asr-bench -set benchmarks/sample-set  # detection benchmark
```

The Bible benchmark exits non-zero if any workload misses its target:
reference lookups p95 < 50 ms, full-text search p95 < 150 ms. The detection
benchmark scores the detector against a labelled sample set.

## Releases

Tagging a commit (`git tag v0.1.1 && git push origin v0.1.1`) starts the
release workflow: each desktop OS is packaged on its **native GitHub
runner** and the artifacts are attached to the GitHub release. The offline
speech engine is bundled into every package.

Packages are currently unsigned; code signing (Authenticode, Apple
Developer ID + notarization) is planned for after the development phase.
