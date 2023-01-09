---
description: Useful snippets that you can use in your templates.
tags:
  - Dynamic text
  - Panel
---

# Recipes

Useful snippets that you can use in your templates.

## Markdown list from variable

```handlebars
{{#each (variable "hostname")}}

- {{this}}

{{/each}}
```

## Conditional content

```handlebars
{{#if (eq app "auth")}}
  This is the auth app.
{{else}}
  This is not an auth app.
{{/if}}
```

## Dynamic templates using dashboard variables

Use the `lookup` helper function to create dynamic templates based on dashboard variables.

The following template creates a key-value pair from every selected value in the `myvar` dashboard variable.

```handlebars
book:
{{#each (variable "props")}}
  {{this}}: {{lookup @root this}}
{{/each}}
```

## Render a single template

For the following query result:

| title | author        | year |
| ----- | ------------- | ---- |
| Dune  | Frank Herbert | 1965 |
| 1984  | George Orwell | 1949 |

Given that the **All Rows** switch is turned on, the following template renders a table from the query result:

```handlebars
| Title | Author | Year |
| ----- | ------ | ---- |

{{#each data}}
| {{title}} | {{author}} | {{year}} |
{{/each}}
```

## Display initial context.

Display the Initial context with which the template was executed.

```handlebars
{{json @root}}
```

Take a look at the [Documentation](https://handlebarsjs.com/api-reference/data-variables.html#root) for Handlebar variables.