/**
 * Set body
 */
const body = {}; //this is an empty object called body

/**
 * The following code gets each element ant if it has changed then updates the values and passes them to "body" object
 */
options.elements.forEach((element) => {
  if (!options.update.updatedOnly) {
    body[element.id] = element.value;
    return;
  }

  /**
   * Skip not updated elements
   */
  if (element.value === initial[element.id]) {
    return;
  }

  body[element.id] = element.value;
});

/**
 * Set URL
 * Important to declare precision for timestamp, by default is ns and in the following code we are generating a timestamp in ms
 */
const url = `http://localhost:8086/api/v2/write?org=org_example&bucket=bucket_example&precision=ms`;

/**
 * Fetch
 */
const resp = fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "text/plain; charset=utf-8",
    Accept: "application/csv",
    Authorization: "Token INFLUX_API_TOKEN",
  },

  /**
   * This is the metric to be written in influxDB.
   * The syntax is explained in the documentation "line-protocol"*
   */
  body: `measurement_name,tag1=${body.element_id1} field1="${
    body.element_id2
  }",field2="${body.element_id3}" ${Date.now()}`,
})
  .catch((error) => {
    console.error(error);
  })
  .then((resp) => {
    console.log(resp);
  });
