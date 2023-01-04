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

The Base64 Image/Video/Audio/PDF visualization panel supports most of the common file formats.
  
:::tip

To request the support of additional formats, feel free to open an issue in the [GitHub repository](https://github.com/VolkovLabs/volkovlabs-image-panel/issues).

:::

## Images

The file type is determined automatically based on the first Base64 symbol if a definition is not provided:
  - JPEG
  - GIF
  - PNG
  - PDF
  - HEIC

Any image formats supported by your browser should be displayed with provided definition `data:image/jpg;base64,ENCODED-CONTENT`.

## PDF

  PDF files are supported with definition `data:application/pdf;base64,ENCODED-CONTENT` or without.

## Video

Supports following formats with provided definition: 
 - MP4 `data:video/mp4;base64,ENCODED-CONTENT`
 - WEBM `data:video/webm;base64,ENCODED-CONTENT`

## Audio

Supports following formats with provided definition: 

 - MP3 `data:audio/mp3;base64,ENCODED-CONTENT`
 - OGG `data:audio/ogg;base64,ENCODED-CONTENT`
