---
description: We are constantly updating and improving our Grafana plugins.
tags:
  - Grafana
  - Plugins
  - Development
---

# What’s new

:::info

Our Grafana plugins are open source and we update them constantly. [Become our sponsor on GitHub](https://github.com/sponsors/VolkovLabs).

:::


## [Static Data Source 2.1.0 (2022-12-29)](/blog/static-datasource-2.1.0-20221229)

### Breaking changes

Refactoring may introduce breaking changes. Please test before upgrading in Production.

### Features / Enhancements

- Update CI to upload signed artifacts (#23)
- Add the "Static data source for Grafana | Mimic any data source | Tutorial and examples" video in README (#23)
- Update to Grafana 9.3.2 (#24)
- Refactoring and improving Test Coverage for the data source (#25)
- Update Field and Values Editors to labels and fields structure (#27)
- Remove Frame Reducer to simplify code (#28)
- Refactoring frame, field utilities (#29)
- Add Date Time Picker, Number, and Text Area Inputs (#30)

## [Apache ECharts Panel 4.0.0 (2022-12-20)](/blog/echarts-panel-4.0.0-20221220)

### Breaking changes

- World and USA GeoJSON maps are not loaded by default. Please select `JSON` in the Maps option.

### Features / Enhancements

- Update ECharts Examples on https://echarts.volkovlabs.io (#103)
- Add Calendar Examples on https://echarts.volkovlabs.io (#105)
- Update README and move Documentation to docs.volkovlabs.io (#)

### Bug fixes

- Fix javascript code in documentation (#102)

## [Calendar Panel 1.1.0 (2022-12-12)](https://github.com/VolkovLabs/volkovlabs-calendar-panel/releases/tag/v1.1.0)

### Breaking changes

Refactoring may introduce breaking changes. Please test before upgrading in Production.

### Features / Enhancements

- Update Panel options in README (#53)
- Add Youtube tutorial for Calendar with JSON API data source (#54)
- Update CI to Node 16 and Synchronize with Release workflow (#56)
- Update to Grafana 9.2.2 (#57)
- Code Refactoring (#58)
- Update to Grafana 9.3.1 (#59)
- Update CI to upload signed artifacts (#60)
- Refactor panel options and increase test coverage (#61)
- Add annotation support (#8)
- Refactoring and Removing legacy code (#62)
- Refactor Panel Options and add Annotations options (#63)

## [Dynamic Text Panel 2.1.0 (2022-11-27)](https://github.com/VolkovLabs/volkovlabs-dynamictext-panel/releases/tag/v2.1.0)

### Breaking changes

Refactoring may introduce breaking changes. Please test before upgrading in Production.

### Features / Enhancements

- Fix broken link in README (#111)
- Update CI to upload signed artifacts (#113)
- Add feature of parsing time formatting syntax (#86)
- Fix data rendering when using transformations (#98)
- Update Panel Options to Monaco Code Editor (#114)
- Increase Test Coverage (#114)
- Refactor and update images (#116)
- Refactor Alert Message and Text Options (#117)
- Add Support for Disable Sanitize HTML configuration (#118)

## [Data Manipulation Panel 2.7.0 (2022-11-10)](https://github.com/VolkovLabs/volkovlabs-form-panel/releases/tag/v2.7.0)

### Features / Enhancements

- Update to Grafana 9.2.2 (#113)
- Update CI to upload signed artifacts (#116)
- Allow to send all or updated only values in Payload (#116)
- Add Initial values parameter to Update Request parameters (#117)
- Add Status notification after submit form (#98)
- Add Monaco Code Editor suggestions for available parameters (#88)
