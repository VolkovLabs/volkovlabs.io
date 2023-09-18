(async () => {
  let url =
    "https://raw.githubusercontent.com/plotly/datasets/master/3d-scatter.csv";

  let fetchData = await fetch(url);
  let csvData = await fetchData.text();
  let rows = csvToJson(csvData);

  var trace1 = {
    x: unpack(rows, "x1"),
    y: unpack(rows, "y1"),
    z: unpack(rows, "z1"),
    mode: "markers",
    marker: {
      size: 12,
      line: {
        color: "rgba(217, 217, 217, 0.14)",
        width: 0.5,
      },
      opacity: 0.8,
    },
    type: "scatter3d",
  };

  var trace2 = {
    x: unpack(rows, "x2"),
    y: unpack(rows, "y2"),
    z: unpack(rows, "z2"),
    mode: "markers",
    marker: {
      color: "rgb(127, 127, 127)",
      size: 12,
      symbol: "circle",
      line: {
        color: "rgb(204, 204, 204)",
        width: 1,
      },
      opacity: 0.8,
    },
    type: "scatter3d",
  };

  var data = [trace1, trace2];

  var layout = {
    margin: {
      l: 0,
      r: 0,
      b: 0,
      t: 0,
    },
  };
  Plotly.newPlot("addisAbeba", data, layout);
})();

const unpack = (rows, key) => {
  return rows.map(function (row) {
    return row[key];
  });
};

const csvToJson = (data, delimiter = ",") => {
  const titles = data.slice(0, data.indexOf("\r\n")).split(delimiter);
  return data
    .slice(data.indexOf("\n") + 1)
    .split("\r\n")
    .map((v) => {
      const values = v.split(delimiter);
      return titles.reduce(
        (obj, title, index) => ((obj[title] = values[index]), obj),
        {}
      );
    });
};
