---
description: JavaScript Code allows to add a Handlebars helpers and Event handlers.
tags:
  - Dynamic text
  - Panel
  - JavaScript Code
---

# JavaScript Code

:::info

Supported since Dynamic Text panel 3.2.0.

:::

JavaScript Code allows to add a Handlebars helpers and Event handlers.
 
## Parameters

| Parameter | Description |
| -- | -- |
| `data` | Data from data sources. Depends on the selected **Every Row** and **All Rows** option consists of one or many rows data.|
| `handlebars` | Handlebars library. |

## Define Custom Handlebars helper

  A custom handlebars helper can be added to replace the field's value using a pattern.

```handlebars
{{replace Test "Pattern" "Replaced"}}
```

JavaScript Code:

```js
handlebars.registerHelper('replace',
  (context, pattern, replacement) => context.replace(pattern, replacement));
```

![Replace Helper](img/replace.png)

## Add Event Handler

  A custom event handler can be added to react to a button click.

```html
<button onclick="myFunc()">{{test}}</button>
```

JavaScript Code:

```js
myFunc = () => {
  alert('Bonjour!');
};
```