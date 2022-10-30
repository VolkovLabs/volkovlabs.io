---
description: Allow Unsigned Plugins.
tags:
  - grafana
  - plugins
  - unsigned
---

# Allow Unsigned Plugins

If you are not familiar with Plugin Management in Grafana, please take a look at the [Plugin management](https://grafana.com/docs/grafana/latest/administration/plugin-management/) in the documentation.

Enter a comma-separated list of plugin identifiers to load even if they are unsigned.

- Update environment variable in Docker container

```
GF_ALLOW_LOADING_UNSIGNED_PLUGINS=XXX
```

- Update `grafana.ini` for Host installation

```
allow_loading_unsigned_plugins=XXX
```

## Manifest file

Plugins with modified signatures are never loaded. Delete `MANIFEST.txt` file if exists and don't match your Grafana's URL.
