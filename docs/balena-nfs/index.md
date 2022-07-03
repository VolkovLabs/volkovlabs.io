# Balena NFS Project

[![Grafana 9](https://img.shields.io/badge/Grafana-9-orange)](https://www.grafana.com)
[![Balena](https://github.com/volkovlabs/balena-nfs/actions/workflows/balena.yml/badge.svg)](https://github.com/volkovlabs/balena-nfs/actions/workflows/balena.yml)

## Introduction

The Balena NFS project demonstrate how to deploy NFS Server and Client in balenaCloud. Read more in the Balena blog [Using NFS Server to share external storage between containers](https://www.balena.io/blog/using-nfs-server-to-share-external-storage-between-containers-balena/).

![Diagram](https://raw.githubusercontent.com/volkovlabs/balena-nfs/main/img/balena-nfs.png)

### Requirements

- balenaOS 2.98 is required.

## balenaCloud

The Balena NFS project can be deployed directly to balenaCloud:

[![Deploy with balena](https://balena.io/deploy.svg)](https://dashboard.balena-cloud.com/deploy?repoUrl=https://github.com/volkovlabs/balena-nfs)

![Deploy](/img/balena/balena-nfs.png)

## Features

- Includes NFS Server build on top of the PostgreSQL Alpine image using OpenRC to manage NFS services.
- Supports various environment variables to specify storage label, mount point, etc.
- Includes NFS Client build on top of the NGINX Alpine image using custom Entrypoint script to mount NFS export.
- Provides Grafana Dashboard to manage running services and display configuration using Supervisor API. Default Grafana username and password is **admin/admin**.

## Environment Variables

| Environment Variable | Value                     | Description                                                     |
| -------------------- | ------------------------- | --------------------------------------------------------------- |
| STORAGE_LABEL        | storage                   | External Storage Id, if not found `tmpfs` will be used instead. |
| STORAGE_MOUNT_POINT  | /mnt/nvme                 | Local Mount Point to mount Storage or `tmpfs`.                  |
| POSTGRES_PASSWORD    | postgres                  | Password for the PostgreSQL.                                    |
| PGDATA               | /mnt/nvme/postgresql/data | PostgreSQL Path on the Storage or `tmpfs`.                      |
| NFS_MOUNT_POINT      | /mnt/nvme                 | NFS Mount Point to mount NFS export.                            |
| NFS_HOST             | localhost                 | NFS Host, should be `localhost` for the local container.        |

## Feedback

We love to hear from users, developers, and the whole community interested in this plugin. These are various ways to get in touch with us:

- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/balena-nfs/issues/new/choose).
- Star the repository to show your support.

## Contributing

- Fork the repository.
- Find an issue to work on and submit a pull request.
- Could not find an issue? Look for documentation, bugs, typos, and missing features.

## License

- Apache License Version 2.0, see [LICENSE](https://github.com/volkovlabs/balena-nfs/blob/main/LICENSE).
