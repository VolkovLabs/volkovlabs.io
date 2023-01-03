---
description: Streaming allows real-time data updates using **streaming** Data Sources and Grafana Live.
tags:
  - ECharts
  - Panel
  - Visualization
  - Tutorial
  - Streaming
  - Real-Time
  - Live
---

# Streaming

Streaming allows real-time data updates using **streaming** Data Sources and Grafana Live.

:::info

Streaming is supported by the Apache ECharts visualization panel starting from version 4.1.0.

:::

## Grafana Live

Grafana Live is a real-time messaging engine introduced in Grafana v8.0. With [Grafana Live](https://grafana.com/docs/grafana/latest/setup-grafana/set-up-grafana-live/), you can push event data to a frontend as soon as an event occurs.

![Live](/img/plugins/volkovlabs-echarts-panel/live.png)

### Function

```javascript
const series = data.series.map((s) => {
  const sData = s.fields.find((f) => f.type === 'number').values.buffer;
  const sTime = s.fields.find((f) => f.type === 'time').values.buffer;

  return {
    name: s.refId,
    type: 'line',
    name: 'Live',
    showSymbol: false,
    areaStyle: {
      opacity: 0.1,
    },
    lineStyle: {
      width: 1,
    },
    data: sData.map((d, i) => [sTime[i], d.toFixed(2)]),
  };
});

return {
  backgroundColor: 'transparent',
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    left: '0',
    bottom: '0',
    textStyle: {
      color: 'rgba(128, 128, 128, .9)',
    },
  },
  xAxis: {
    type: 'time',
  },
  yAxis: {
    type: 'value',
    min: 'dataMin',
  },
  grid: {
    left: '2%',
    right: '2%',
    top: '2%',
    bottom: 24,
    containLabel: true,
  },
  series,
};
```

## WebSocket

![Streaming](/img/plugins/volkovlabs-echarts-panel/streaming.png)

To stream real-time data, we used the [WebSocket Data Source for Grafana](https://grafana.com/grafana/plugins/golioth-websocket-datasource/).

### Server 

```javascript
const ws = require('ws');

/**
 * Server
 */
const server = new ws.WebSocketServer({ port: 8080 });

/**
 * Send Data
 */
const sendData = (socket) => {
  const json = [
    { name: 'name1', amount: Math.random() },
    { name: 'name2', amount: Math.random() },
    { name: 'name3', amount: Math.random() },
  ];

  socket.send(JSON.stringify(json));

  setTimeout(() => {
    sendData(socket);
  }, 1000);
};

/**
 * Connection
 */
server.on('connection', (socket) => {
  console.log('Connected...');

  setTimeout(() => {
    sendData(socket);
  }, 1000);
});
```

### Provisioning

```yaml
apiVersion: 1

datasources:
  - name: Websocket
    type: golioth-websocket-datasource
    uid: LWj8ert4k
    access: proxy
    orgId: 1
    version: 1
    editable: true
    jsonData:
      host: ws://WebSocker-Server:8080
```

### Function

```javascript
const values = {}
const series = data.series.map((s) => {
  names = s.fields.find((f) => f.name === 'name').values.buffer;
  amounts = s.fields.find((f) => f.name === 'amount').values.buffer;

  names.forEach((d, i) => values[d] = amounts[i]);
});

return {
  grid: {
    bottom: "3%",
    containLabel: true,
    left: "3%",
    right: "4%",
    top: "4%",
  },
  tooltip: {},
  xAxis: {
    data: Object.keys(values)
  },
  yAxis: {},
  series: [
    {
      name: 'Streaming',
      type: 'bar',
      data: Object.values(values)
    }
  ]
};
```