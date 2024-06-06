const bucketsSelect = context.panel.elements.find(
  (element) => element.id === "buckets"
);

/**
 * Set URL
 */
const url = `http://localhost:3001/test`;

/**
 * Fetch
 */
const resp = fetch(url, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "PRIVATE-TOKEN": "$token",
  },
})
  .catch((error) => {
    console.error(error);
  })
  .then(async (resp) => {
    const body = await resp.json();

    bucketsSelect.options = body.buckets.map((value) => {
      return { label: value, value };
    });

    context.panel.onOptionsChange(options);
  });
