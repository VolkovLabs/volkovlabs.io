---
description: Our custom Grafana build with the Balena Application plugin can be deployed directly to balenaCloud.
tags:
  - balena
  - balenaCloud
  - Cloud
  - IoT
---

# balenaCloud

Our custom Grafana build with the Balena Application plugin can be deployed directly to balenaCloud:

[![Deploy with balena](https://balena.io/deploy.svg)](https://dashboard.balena-cloud.com/deploy?repoUrl=https://github.com/volkovlabs/volkovlabs-balena-app)

We recommend to add it to your `docker-compose.yml` together with NGINX reverse proxy (example configuration in the repository):

```yaml
version: "2.1"

services:
  grafana:
    image: ghcr.io/volkovlabs/balena-app:latest
    network_mode: host
    restart: always
    labels:
      io.balena.features.supervisor-api: "1"
    volumes:
      - grafana-data:/var/lib/grafana

  nginx:
    build:
      context: ./nginx
      dockerfile: Dockerfile
    network_mode: host
    restart: always
    depends_on:
      - grafana

volumes:
  grafana-data:
```

Default Grafana username and password is **admin/admin**.

You can learn more about balena Labels in the [Documentation](https://www.balena.io/docs/reference/supervisor/docker-compose/#labels).

## IoT Framework

This video highlights just one example of many possible solutions when you can combine balena for IoT networking and Grafana with open-source one-click away features on top.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/zf98C3lux54" title="IoT Framework based on balena and Grafana | Open source Grafana plugins" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
