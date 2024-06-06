/**
 * Set body
 */
const body = {};
context.panel.options.elements.forEach((element) => {
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
 */
const url = `http://localhost:3001/${body["name"]}`;

/**
 * Fetch
 */
const resp = fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "PRIVATE-TOKEN": "$token",
  },
  body: JSON.stringify(body),
})
  .catch((error) => {
    console.error(error);
  })
  .then((resp) => {
    console.log(resp);
  });
