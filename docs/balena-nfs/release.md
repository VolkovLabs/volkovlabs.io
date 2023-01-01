---
description: The Balena NFS project demonstrates how to deploy the NFS Server and Client in balenaCloud.
tags:
  - balena
  - Cloud
  - NFS
  - IoT
  - Release Notes
---

# Release Notes

## [1.3.0 (2022-10-30)](https://github.com/VolkovLabs/balena-nfs/releases/tag/v1.3.0)

### Features / Enhancements

- Update to the latest Balena Application (#16)
- Update Workflow to use Node 16 (#16)
- Update video thumbnail (#16)
- Update NFS_VERSION to `nfs` to allows use version 3 on legacy NFS servers (#17)
- Add NFS_HOST_MOUNT and NFS_VERSION to balena configuration (#18)
- Tested and updated to use Nvidia Jetson AGX Orin Devkit as default (#19)
- Add Balena Application screenshot (#20)

## [1.2.0 (2022-08-28)](https://github.com/VolkovLabs/balena-nfs/releases/tag/v1.2.0)

### Features / Enhancements

- Update to the latest Balena Application plugin (#12)
- Add NFS Sync mode environment variable and set to `async` (#13)
- Add YouTube video "Using Network File System (NFS) in Balena | Share external storage between containers" (#14)
- Add Video to Balena App (#15)

## [1.1.0 (2022-07-08)](https://github.com/VolkovLabs/balena-nfs/releases/tag/v1.1.0)

### Breaking Changes

- Requires NFS version 4 by default.

### Features / Enhancements

- Fix some wording and typos in README (#5)
- Update balena.yml according to README (#6)
- Support NFS4 when available in balena (#7)
- Separate NFS Mount from local Mount Point (#9)
- Update NFS validation to use new Environment Variable (#10)
- Update README for version 1.1.0 (#11)

## [1.0.0 (2022-07-03)](https://github.com/VolkovLabs/balena-nfs/releases/tag/v1.0.0)

### Features / Enhancements

- Initial release
- Add NFS Server and Client (#1)
- Use Postgres instead of TimescaleDb (#2)
- Add Balena Project and update README (#3)