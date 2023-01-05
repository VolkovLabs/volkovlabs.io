---
description: Data sources should be used to provide data to the Base64 Image/Video/Audio/PDF Panel.
tags:
  - Grafana
  - Panel
  - Image
  - Base64
  - Data Source
---

# Data Sources

The Base64 Image/Video/Audio/PDF visualization panel takes data from the connected data source.
You can use any suitable data source to retrieve the data in the Base64 format. The quickest option to start is to use the Static data source. PostgreSQL is a great option as well. 

## Static Data Source

You can use the Static data source to store any supported formats in Base64 on your Grafana dashboard.

:::info

Static Data Source is an excellent solution for not huge sizes. If you get a `413 Request Entity Too Long` error, the Grafana limit is reached. In this case, consider using a database/storage data source. PostgreSQL is a good choice.

:::

## PostgreSQL

The data source should return encoded file content and may return format definition `data:video/mp4;base64,ENCODED-CONTENT` for media files:

```
SELECT
  concat(
    'data:video/mp4;base64,',
    encode(video, 'base64')
  ) as video
from
  videos
where
  name = 'flow';
```

![Video file](/img/plugins/volkovlabs-image-panel/video-comments.png)

PostgreSQL database has built-in functions to work with the Base64 format. 

```sql
SELECT CONVERT_FROM (DECODE('SGVsbG8gV29ybGQh', 'BASE64'), 'UTF-8');
SELECT ENCODE (CONVERT_TO('Hello World!', 'UTF-8'), 'BASE64');
```

### Load media files into the database

Create tables to store images, video, and audio files:

```sql reference
https://github.com/VolkovLabs/volkovlabs-image-panel/blob/main/postgres/data.sql
```

Load PDF, PNG, MP4, MP3, etc. files into a database using Node.js script:

```javascript reference
https://github.com/VolkovLabs/volkovlabs-image-panel/blob/main/postgres/load.ts
```
