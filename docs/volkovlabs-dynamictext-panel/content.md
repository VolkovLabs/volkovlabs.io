---
description: Create a visualization template for your data.
tags:
  - Dynamic text
  - Panel
  - Content
---

# Content

It is the code editor where you can place the parsing commands or, in other words, create a visualization template for your data.
To reference the data elements in your template, use double braces.

For instance, to display a value from the `photo` field:

```handlebars
{{photo}}
```

Depending on the `All rows/Every row` toggle, the template is applied to either every row or to the entire query results.

## Default content

The default content is displayed if the connected data source returns nothing. Use it to give users instructions on what to do or who to contact when the query returns an empty result.

Even though there are no data from the data source, you can still use the available [helpers](helpers).

## Sanitizing

Sanitizing is enabled by default, which makes some elements like `<button>` unavailable in the **content** panel parameter.

To disable sanitizing, use the Grafana configuration option [`disable_sanitize_html`](https://grafana.com/docs/grafana/latest/setup-grafana/configure-grafana/#disable_sanitize_html). For Docker container and Docker Compose, use as:

```bash
- GF_PANELS_DISABLE_SANITIZE_HTML=true
```

## The processing order

The panel renders Handlebars → Markdown → Sanitized HTML and displays the final result.

## Every row vs All rows

You have a choice of how the retrieved data source data is passed into the Dynamic Text Panel. 
 - `every row` means that the **content** template is applied to every retrieved row.
 - `all rows`, the query results are passed entirely as the `data` field to the template.
 
In order to work with the query results as a whole, you can use [builtin-helpers](https://handlebarsjs.com/guide/builtin-helpers.html#each) to iterate over the records.

For instance, if your data source returns the following 4 columns of data:

```md
| app  | description                  | cluster | tier     |
| ---- | ---------------------------- | ------- | -------- |
| auth | Handles user authentication. | prod    | frontend |
```

you can iterate using the following handlebars commands:

```md
{{#each (variable "hostname")}}

- {{app}}

{{/each}}
```
