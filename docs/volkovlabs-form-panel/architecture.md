---
description: The Data Manipulation panel can request (GET) and update (POST/PUT) data and configuration using REST API.
tags:
  - Data Manipulation
  - Custom Forms
  - Panel
---

# Architecture

The Data Manipulation panel can request (GET) and update (DELETE, PATCH, POST, PUT) data and configuration using REST API.

![API](https://raw.githubusercontent.com/volkovlabs/volkovlabs-form-panel/main/img/form-api.png)

<iframe width="100%" height="500" src="https://www.youtube.com/embed/SHN2S-dRIEM" title="How to Manipulate Data using Grafana dashboard | API Node.js Server and Deno Deploy Project" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

## NGINX

We recommend running Grafana behind NGINX reverse proxy for an additional security layer. The reverse proxy also allows us to expose additional API endpoints and static files in the same domain, which makes it CORS-ready.

![NGINX](https://raw.githubusercontent.com/volkovlabs/volkovlabs-form-panel/main/img/form-nginx-api.png)

Read more in [How to connect the Data Manipulation plugin for Grafana to API Server](/blog/how-to-connect-the-data-manipulation-plugin-for-grafana-to-api-server-1abe5f60c904).
