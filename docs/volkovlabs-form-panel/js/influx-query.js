const query = `
from(bucket: "bucket_example") 
	|> range(start: -1mo)
	|> filter(fn: (r) => r["_measurement"] == "measurement_example")
	|> filter(fn: (r) => r["_field"] == "field_example")
	|> window(every: 24h, period:24h ,offset:4h)
	|> last()
	|> yield(name: "last")
`;

/**
 * Set URL
 */
const url = `http://localhost:8086/api/v2/query?org=org_example`;

/**
 * Fetch
 */
const resp = fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/vnd.flux",
    Accept: "application/csv",
    Authorization: "Token INFLUX_API_TOKEN",
  },
  body: query,
})
  .catch((error) => {
    console.error(error);
  })
  .then((resp) => {
    console.log(resp);
  });
