# Balena NFS

[![Grafana 9](https://img.shields.io/badge/Grafana-9-orange)](https://www.grafana.com)
[![Balena](https://github.com/volkovlabs/balena-nfs/actions/workflows/balena.yml/badge.svg)](https://github.com/volkovlabs/balena-nfs/actions/workflows/balena.yml)

## Introduction

The Balena NFS project demonstrates how to deploy the NFS Server and Client in balenaCloud. Read more in the Balena blog post, "[Using NFS Server to share external storage between containers](https://www.balena.io/blog/using-nfs-server-to-share-external-storage-between-containers-balena/)".

<iframe width="100%" height="500" src="https://www.youtube.com/embed/_kyNSLeAT84" title="Using Network File System (NFS) in Balena | Share external storage between containers" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Requirements

- balenaOS 2.99.27+rev1 is required for NFS version 4.
- balenaOS 2.98 is required for NFS version 3.

## balenaCloud

The Balena NFS project can be deployed directly to balenaCloud:

[![Deploy with balena](https://balena.io/deploy.svg)](https://dashboard.balena-cloud.com/deploy?repoUrl=https://github.com/volkovlabs/balena-nfs)

![Deploy](/img/balena/balena-nfs.png)

## Features

- Includes a NFS Server build on top of the PostgreSQL Alpine image using OpenRC to manage NFS services.
- Supports various environment variables to specify storage label, mount point, etc.
- Includes a NFS Client build on top of the NGINX Alpine image using custom Entrypoint script to mount NFS export.
- Provides Grafana Dashboard to manage running services and display configuration using Supervisor API. Default Grafana username and password is **admin/admin**.
- Supports NFS version 4 and version 3. NFS version 4 is set by default.

## Environment Variables

| Environment Variable | Value                     | Description                                                      |
| -------------------- | ------------------------- | ---------------------------------------------------------------- |
| STORAGE_LABEL        | storage                   | External Storage ID, if not found `tmpfs` will be used instead.  |
| STORAGE_MOUNT_POINT  | /mnt/nvme                 | Local mount point to mount Storage or `tmpfs`.                   |
| POSTGRES_PASSWORD    | postgres                  | Password for the PostgreSQL database.                            |
| PGDATA               | /mnt/nvme/postgresql/data | PostgreSQL path on the Storage or `tmpfs` mount point.           |
| NFS_HOST             | localhost                 | NFS host, should be `localhost` for the local container.         |
| NFS_HOST_MOUNT       | /                         | NFS exported mount. Set full path `/mnt/nvme` for NFS version 3. |
| NFS_MOUNT_POINT      | /mnt/nvme                 | Mount point to mount NFS export.                                 |
| NFS_VERSION          | nfs4                      | Set `nfs` to use NFS version 3.                                  |

### NFS version 3

To support NFS version 3 please update Environment Variables:

![Diagram](https://raw.githubusercontent.com/volkovlabs/balena-nfs/main/img/env-nfsv3.png)

## Feedback

We love to hear from users, developers, and the whole community interested in this project. These are various ways to get in touch with us:

- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/balena-nfs/issues/new/choose).
- Star the repository to show your support.

## License

- Apache License Version 2.0, see [LICENSE](https://github.com/volkovlabs/balena-nfs/blob/main/LICENSE).
