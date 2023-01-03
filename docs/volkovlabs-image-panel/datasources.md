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

The data source should return encoded file content and may return format definition `data:video/mp4;base64,XXX` for media files:

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

```sql
CREATE TABLE images (name text, img bytea, UNIQUE(name));
CREATE TABLE videos (name text, video bytea, UNIQUE(name));
CREATE TABLE audios (name text, audio bytea, UNIQUE(name));
```

Load PDF, PNG, MP4, MP3, etc. files into a database using Node.js script:

```javascript
const fs = require('fs');
const { Client } = require('pg');

/**
 * Postgres
 */
const host = process.env.POSTGRES_HOST;
const user = process.env.POSTGRES_USER;
const password = process.env.POSTGRES_PASSWORD;

async function loadFile() {
  /**
   * Connect to Postgres
   */
  const client = new Client({ host, user, password });
  await client.connect();

  /**
   * Load PDF to Postgres
   */
  const pdfData = fs.readFileSync('./postgresql-14-US.pdf');
  await client.query('INSERT INTO images VALUES($1, $2)', ['postgresql-14-US', pdfData]);

  /**
   * Load Image to Postgres
   */
  const imgData = fs.readFileSync('./image-panel.png');
  await client.query('INSERT INTO images VALUES($1, $2)', ['image-panel', imgData]);

  /**
   * Load Video to Postgres
   */
  const videoData = fs.readFileSync('./9.mp4');
  await client.query('INSERT INTO videos VALUES($1, $2)', ['flow', videoData]);

  /**
   * Load Audio to Postgres
   */
  const audioData = fs.readFileSync('./call.mp3');
  await client.query('INSERT INTO audios VALUES($1, $2)', ['call', audioData]);

  /**
   * Check number of records
   */
  const res = await client.query(
    'select count(1) from images union select count(1) from videos union select count(1) from audios'
  );
  console.log('SELECT Result', res.rows);

  /**
   * End Session
   */
  await client.end();
}

loadFile();
```
