---
description: To use Apache ECharts with data from data sources get each field in a array.
tags:
  - ECharts
  - Panel
  - Visualization
  - Data Source
---

# Data Sources

To use Apache ECharts with data from data sources get each field in a array:

```javascript
data.series.map((s) => {
  if (s.refId === 'logo') {
    images = s.fields.find((f) => f.name === 'body').values.buffer;
  } else if (s.refId === 'connections') {
    sources = s.fields.find((f) => f.name === 'source').values.buffer;
    targets = s.fields.find((f) => f.name === 'target').values.buffer;
  } else if (s.refId === 'nodes') {
    titles = s.fields.find((f) => f.name === 'title').values.buffer;
    descriptions = s.fields.find((f) => f.name === 'description').values.buffer;
  }
});
```

<iframe width="100%" height="500" src="https://www.youtube.com/embed/sczRq2lI3e4" title="Grafana variables | Dashboard, Global and Environment variables | Environment Data Source" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Array of Arrays

Merge fields together:

- get values for each field
- combine in an array of arrays
- use as `series[0]` to access first query

```javascript
const series = data.series.map((s) => {
  const rates = s.fields.find((f) => f.name === 'Rate').values.buffer;
  const calls = s.fields.find((f) => f.name === 'Calls').values.buffer;
  const names = s.fields.find((f) => f.name === 'Name').values.buffer;

  return rates.map((d, i) => [d, calls[i], names[i]]);
});
```