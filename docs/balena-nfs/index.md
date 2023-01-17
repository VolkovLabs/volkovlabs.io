---
title: Introduction
description: The Balena NFS project demonstrates how to deploy the NFS Server and Client in balenaCloud.
tags:
  - balena
  - Cloud
  - NFS
  - IoT
---

# Balena NFS

![Grafana 9](https://img.shields.io/badge/Grafana-9.2.2-orange)
![Balena](https://github.com/volkovlabs/balena-nfs/actions/workflows/balena.yml/badge.svg)

## Introduction

The Balena NFS project demonstrates how to deploy the NFS Server and Client in balenaCloud.

Read more in the Balena blog post, "[Using NFS Server to share external storage between containers](https://www.balena.io/blog/using-nfs-server-to-share-external-storage-between-containers-balena/)".

<iframe width="100%" height="500" src="https://www.youtube.com/embed/_kyNSLeAT84" title="Using Network File System (NFS) in Balena | Share external storage between containers" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

### Requirements

- **balenaOS 2.105.19** is required for Nvidia Jetson AGX Orin Devkit with NFS version 4.
- **balenaOS 2.99.27+rev1** is required for NFS version 4.
- **balenaOS 2.98** is required for NFS version 3.

## Features

- Includes a NFS Server build on top of the PostgreSQL Alpine image using OpenRC to manage NFS services.
- Supports various environment variables to specify storage label, mount point, etc.
- Includes a NFS Client build on top of the NGINX Alpine image using custom Entrypoint script to mount NFS export.
- Provides Grafana Dashboard to manage running services and display configuration using Supervisor API. Default Grafana username and password is **admin/admin**.
- Supports NFS version 4 and version 3.
- Allows to set NFS in `sync` or `async` modes.

![Diagram](https://raw.githubusercontent.com/volkovlabs/balena-nfs/main/img/balena-nfs.png)

## Tested

- Nvidia Jetson AGX Orin Devkit (`jetson-agx-orin-devkit`)
- Raspberry Pi4-64 (`raspberrypi4-64`)
- Jetson Xavier (`jetson-xavier`)
- x86-64 (`genericx86-64-ext`)

## Feedback

We love to hear from you. There are various ways to get in touch with us:

- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/balena-nfs/issues/new/choose).
- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).
- Star the repository to show your support.

## License

Apache License Version 2.0, see [LICENSE](https://github.com/volkovlabs/balena-nfs/blob/main/LICENSE).
