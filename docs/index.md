---
description: We are constantly updating and improving our Grafana plugins.
tags:
  - Grafana
  - Plugins
  - Development
---

# What’s new

## [Dynamic Text Panel 2.2.0 (2022-01-09)](/blog/dynamictext-panel-2.2.0-20230110)

In this feature version

- Added JavaScript Code Editor to add Handlebars helpers and Event handlers.
- Finished refactoring of internal components.
- Migrate Styles to Grafana Theme v2.
- Added `{{json @root}}` and `{{split String ','}}` helpers.
- Updateed CSS to fit images to screen.
- Supported Internationalization using [custom helpers](/plugins/volkovlabs-dynamictext-panel/code).

## [Base64 Image/Video/Audio/PDF Panel 3.4.0 (2022-01-08)](/blog/image-panel-3.4.0-20230108)

In this maintenance version

- Updated to the latest Grafana toolkit 9.3.2.
- Updated README and documentation to explain how to use the panel with [data sources](/plugins/volkovlabs-image-panel/datasources) and [supported formats](/plugins/volkovlabs-image-panel/formats).
- "New Year" edition.

## [Static Data Source 2.1.0 (2022-12-29)](/blog/static-datasource-2.1.0-20221229)

In this feature version

- Finished refactoring.
- Updated to the latest Grafana toolkit 9.3.2.
- Introduced new features for `Time`, `Number`, and `String` fields.
- Refactoring may introduce **breaking changes**. Please test before upgrading in Production.

## [Apache ECharts Panel 4.0.0 (2022-12-20)](/blog/echarts-panel-4.0.0-20221220)

This major version

- Introduced **breaking changes** with loading GeoJSON maps, which are disabled by default.
- Documentation and examples were updated and moved to https://docs.volkovlabs.io and https://echarts.volkovlabs.io.

## [Calendar Panel 1.1.0 (2022-12-12)](/blog/calendar-panel-1.1.0-20221212)

In this maintenance version

- Updated to the latest Grafana toolkit 9.3.1.
- Added Annotations support.
- Refactored legacy code, and increased test coverage.

## [Dynamic Text Panel 2.1.0 (2022-11-27)](/blog/dynamictext-panel-2.1.0-20221127)

In this feature version

- Community-submitted PRs and features.
- Added Monaco Code Editor.
- Major refactoring and increased test coverage to continue improving the plugin with the requested functionality.
- Refactoring may introduce **breaking changes**. Please test before upgrading in Production.

## [Data Manipulation Panel 2.7.0 (2022-11-10)](/blog/form-panel-2.7.0-20221110)

This feature version includes

- Community-requested updates for Payload.
- Update Request parameters.
- Grafana-style success/error notifications.
- The code editor for Initial and Update requests was improved with suggestions for variables and parameters.
