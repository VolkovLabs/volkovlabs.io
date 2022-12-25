---
description: The most common file formats are supported by the panel.
tags:
  - Grafana
  - Panel
  - Image
  - Base64
  - Video
  - Audio
---

# Supported formats

  The most common file formats are supported by the panel.
  
:::note

Please open an issue in the [GitHub repository](https://github.com/VolkovLabs/volkovlabs-image-panel/issues) to request support for additional formats.

:::

## Images

The file type is determined automatically based on the first Base64 symbol if definition is not provided:
  - JPEG
  - GIF
  - PNG
  - PDF
  - HEIC

Any image formats supported by your browser should be displayed with provided definition `data:image/jpg;base64,XXX`.

## PDF

  PDF files are supported with definition `data:application/pdf;base64,XXX` or without.

## Video

Supports following formats with provided definition: 
 - MP4 `data:video/mp4;base64,XXX`
 - WEBM `data:video/webm;base64,XXX`

## Audio

Supports following formats with provided definition: 

 - MP3 `data:audio/mp3;base64,XXX`
 - OGG `data:audio/ogg;base64,XXX`
