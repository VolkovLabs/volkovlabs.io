---
description: Data Manipulation panel allows to create your own Initial and Update requests using Custom Code.
tags:
  - Data Manipulation
  - Custom Forms
  - Panel
---

# Custom Requests

Data Manipulation panel allows to create your own Initial and Update requests using Custom Code.

## Initial Request

Select Initial Request as `-` and set Custom Code:

```javascript
const bucketsSelect = elements.find((element) => element.id === "buckets");

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

    onOptionsChange(options);
  });
```

To support `Highlight changed values` and `Require Confirmation` the Custom Code should use `setInitial({})` function to update `initial` values:

```
  setInitial({value: 99, name: 'Test'})
```

## Update Request

Select Update Request as `-` and set Custom Code:

```javascript
/**
 * Set body
 */
const body = {};
options.elements.forEach((element) => {
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
```
