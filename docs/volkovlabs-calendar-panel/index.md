---
description: The Calendar panel plugin for Grafana to display calendar events from data sources.
tags:
  - Calendar
  - Events
  - Panel
---

# Calendar Panel

![Grafana 9](https://img.shields.io/badge/Grafana-9.3.1-orange)
![CI](https://github.com/volkovlabs/volkovlabs-calendar-panel/workflows/CI/badge.svg)
![codecov](https://codecov.io/gh/VolkovLabs/volkovlabs-calendar-panel/branch/main/graph/badge.svg)
![CodeQL](https://github.com/VolkovLabs/volkovlabs-calendar-panel/actions/workflows/codeql-analysis.yml/badge.svg)

## Introduction

The Calendar visualization panel is a Grafana plugin created to display calendar events from data sources.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/iPJ122x0oos" title="Calendar plugin for Grafana tutorial | Step by step | JSON API plugin example" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

### Requirements

- Grafana 8.5+, Grafana 9.0+ is required.

## Getting Started

The calendar panel can be installed from the [Grafana Catalog](https://grafana.com/grafana/plugins/marcusolsson-calendar-panel/) or utilizing the Grafana command line tool. For the latter, use the following command:

```bash
grafana-cli plugins install marcusolsson-calendar-panel
```

## Features

- Displays events in a Weekly or Daily layout depending on the selected `Time Range`.
- Allows changing `Time Range` by clicking days in the calendar.
- Query calendar events from any data source.
- Allows displaying `Annotations` across all dashboards for the selected `Time Range`.
- Supports auto-scrolling to the end of the `Time Range`.
- Allows opening data link instead of a sidebar when clicking an event.

![Calendar](https://github.com/VolkovLabs/volkovlabs-calendar-panel/raw/main/src/img/screenshot.png)

## Feedback

We love to hear from you. There are various ways to get in touch with us:

- Ask a question, request a new feature, and file a bug with [GitHub issues](https://github.com/volkovlabs/volkovlabs-calendar-panel/issues/new/choose).
- Sponsor our open-source plugins for Grafana with [GitHub Sponsor](https://github.com/sponsors/VolkovLabs).
- Star the repository to show your support.

## License

Apache License Version 2.0, see [LICENSE](https://github.com/volkovlabs/volkovlabs-calendar-panel/blob/main/LICENSE).
