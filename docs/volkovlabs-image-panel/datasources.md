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

Data sources should be used to provide data to the Base64 Image/Video/Audio/PDF Panel.

## Static Data Source

The Static Data Source allows to store data inside the dashboard and can be used to display limited size Base64 encoded media files.

:::caution

Grafana restricts size of the dashboard and you may see `413 Request Entity Too Long` error if limit reached. In this case, consider using database/storage data source.

:::

## PostgreSQL

  Data source should return encoded file content and may return format definition `data:video/mp4;base64,XXX` for media files:

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

![Video file](/img/plugins/volkovlabs-image-panel/video.png)

### Load media files into database

For example, you can load PDF, PNG, MP4, MP3, etc. files into database using Node.js script:

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
