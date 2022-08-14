# Customize Grafana interface

## Introduction

Watch this video to learn how to customize the fundamental graphical elements in Grafana.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/3GRoa8TzIxY" title="How to customize Grafana interface | Change titles, icons, footer, default dashboard | Grafana 9" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

All customization is done in the [Dockerfile](https://github.com/VolkovLabs/volkovlabs-balena-app/blob/main/Dockerfile) and it can be easily replicated for host installation.

### Requirements

- Grafana 9.0.3.
- SVG (Scalable Vector Graphics) images for scaling.
- Some commands require `root` permissions.

## Default theme

Since Grafana introduced Light theme we always use it by default in our projects.

```
ENV GF_USERS_DEFAULT_THEME=light
```

## Home Dashboard

- Replace `default.json` file with a custom dashboard

```
COPY dashboards/home.json /usr/share/grafana/public/dashboards/default.json
```

- Override Environment variable to specify a new file. Works great if dashboard is a part of the Application plugin

```
ENV GF_DASHBOARDS_DEFAULT_HOME_DASHBOARD_PATH=/var/lib/grafana/plugins/volkovlabs-balena-app/dashboards/supervisor.json
```

## Disable Alerting and Explore

If your project does not require Explore and/or Alerting, they can be disabled.

```
ENV GF_EXPLORE_ENABLED=false
ENV GF_ALERTING_ENABLED=false
ENV GF_UNIFIED_ALERTING_ENABLED=false
```

## Sanitize HTML

Disable HTML sanitizing in panels.

```
ENV GF_PANELS_DISABLE_SANITIZE_HTML=true
```

## Anonymous Authentication

Allows Anonymous access.

```
ENV GF_AUTH_ANONYMOUS_ENABLED=true
ENV GF_AUTH_BASIC_ENABLED=false
```

## Bookmark Icon (Favicon)

Replace `fav32.png` and `apple-touch-icon.png` with your own version.

```
COPY img/fav32.png /usr/share/grafana/public/img/fav32.png
COPY img/fav32.png /usr/share/grafana/public/img/apple-touch-icon.png
```

## Logo

Replace `grafana_icon.svg` with your own.

```
COPY img/logo.svg /usr/share/grafana/public/img/grafana_icon.svg
```

## Login Background

There are Light and Dark background images.

```
COPY img/background.svg /usr/share/grafana/public/img/g8_login_dark.svg
COPY img/background.svg /usr/share/grafana/public/img/g8_login_light.svg
```

## Javascript

Depends on the build titles and footer can be in random file and we replace it using regex pattern.

### Application Title

```
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|o(l,"AppTitle","Grafana")|o(l,"AppTitle","Balena Application")|g' {} \;
```

### Login Title

```
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|o(l,"LoginTitle","Welcome to Grafana")|o(l,"LoginTitle","Welcome to Balena Application")|g' {} \;
```

### Login Footer

```
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|{text:"Documentation",icon:"document-info",url:"https://grafana.com/docs/grafana/latest/?utm_source=grafana_footer",target:"_blank"},{text:"Support",icon:"question-circle",url:"https://grafana.com/products/enterprise/?utm_source=grafana_footer",target:"_blank"},{text:"Community",icon:"comments-alt",url:"https://community.grafana.com/?utm_source=grafana_footer",target:"_blank"}||g' {} \;
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|{text:`${e.edition}${a}`,url:t.licenseUrl}||g' {} \;
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|{text:`v${e.version} (${e.commit})`}||g' {} \;
RUN find /usr/share/grafana/public/build/ -name *.js -exec sed -i 's|{id:"updateVersion",text:"New version available!",icon:"download-alt",url:"https://grafana.com/grafana/download?utm_source=grafana_footer",target:"_blank"}||g' {} \;
```

We constantly update our Docker builds based on the latest version of Grafana and will continue updating this tutorial.
