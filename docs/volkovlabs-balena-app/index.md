---
title: Introduction
description: The Balena Application plugin for Grafana allows to display device information and manage services using Balena Supervisor API.
tags:
  - balena
  - Cloud
  - Application
  - Data Source
  - Private repository
  - IoT
---

# Balena Application

[![Grafana 9](https://img.shields.io/badge/Grafana-9.3.2-orange)](https://www.grafana.com)
[![YouTube](https://img.shields.io/badge/YouTube-Playlist-red)](https://youtube.com/playlist?list=PLPow72ygztmRdzBPeQ16cwM7ZvPbXfyHv)
![CI](https://github.com/volkovlabs/volkovlabs-balena-app/workflows/CI/badge.svg)
[![codecov](https://codecov.io/gh/VolkovLabs/volkovlabs-balena-app/branch/main/graph/badge.svg?token=2W9VR0PG5N)](https://codecov.io/gh/VolkovLabs/volkovlabs-balena-app)
[![Balena](https://github.com/volkovlabs/volkovlabs-balena-app/actions/workflows/balena.yml/badge.svg)](https://github.com/volkovlabs/volkovlabs-balena-app/actions/workflows/balena.yml)
[![CodeQL](https://github.com/VolkovLabs/volkovlabs-balena-app/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/VolkovLabs/volkovlabs-balena-app/actions/workflows/codeql-analysis.yml)

## Introduction

The Balena Application plugin for Grafana allows to display device information and manage services using Balena Supervisor API.

Working in a productive alliance, Balena, Grafana, and the Balena Application plugin simplify managing a network of non-homogenous IoT devices. If needed, a device could be made accessible directly, which means internet access is not required.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/5NfrVdOX0s8" title="Balena Application plugin for Grafana | Connect to your IoT devices directly from Grafana" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

### Requirements

- Grafana 8.5+, Grafana 9.0+ is required.

## Getting Started

The Balena Application is not included in the Grafana Catalog. It can be installed manually from our Private Repository or downloaded directly from the GitHub repository:

```bash
grafana-cli --repo https://volkovlabs.io/plugins plugins install volkovlabs-balena-app
```

## Features

- Allows to display device, release information, and service logs using Balena Supervisor API.
- Provides Services Panel to start, stop, and restart Containers.
- Allows to filter Logs using a Regex pattern.
- Requires Confirmation to restart all Services and reboot the device.
- Environment Variables sanitized from Target State.

![Application](https://raw.githubusercontent.com/volkovlabs/volkovlabs-balena-app/main/src/img/app.png)

## Balena Supervisor

The balena Supervisor is balena's agent that runs on devices. Its main role is to ensure your app is running, and keep communications with the balenaCloud API server.

The Supervisor has its own [set of APIs](https://www.balena.io/docs/reference/supervisor/supervisor-api/) providing means for services to communicate and execute some special actions that affect the host OS or the services itself.

## Feedback

We love to hear from you. There are various ways to get in touch with us:

- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-balena-app/issues/new/choose).
- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).
- Star the repository to show your support.

## License

Apache License Version 2.0, see [LICENSE](https://github.com/volkovlabs/volkovlabs-balena-app/blob/main/LICENSE).
