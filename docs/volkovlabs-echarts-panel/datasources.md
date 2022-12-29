---
description: To use Apache ECharts with data from data sources get each field in an array.
tags:
  - ECharts
  - Panel
  - Visualization
  - Data Source
---

# Data Sources

Below is a code snippet demonstrating how you can retrieve data from your data source to use in the Apache ECharts visualization panel. 
- You can use `.map()` and `.find()` JavaScript functions,
- `refId` is the name of the query retrieving data from the data source. By default, the names are `A`, `B` and so forth. The code below works with three queries - `logo`,`connections`, and `nodes`.
- `name` is the data frame column name. The code below references `body`,`source`,`target`,`title`,and `description` columns.

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

<iframe width="100%" height="500" src="https://www.youtube.com/embed/K5YNMSIm9AM" title="How to use Data Source in Apache ECharts in 90 seconds | Grafana Data attribute" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Array of Arrays

Convert one-dimensional arrays into many-dimensional arrays if needed:

- get values for each field
- combine in an array of arrays
- use as `series[0]` to access first query, `series[1]` to access second query, etc.

```javascript
const series = data.series.map((s) => {
  const rates = s.fields.find((f) => f.name === 'Rate').values.buffer;
  const calls = s.fields.find((f) => f.name === 'Calls').values.buffer;
  const names = s.fields.find((f) => f.name === 'Name').values.buffer;

  return rates.map((d, i) => [d, calls[i], names[i]]);
})[0];
```