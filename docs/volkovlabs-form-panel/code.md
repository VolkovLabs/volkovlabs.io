---
description: The custom code has access to the Panel options, the response from the REST API call, form elements, various Grafana services and will be executed after the Initial and Update requests.
tags:
  - Data Manipulation
  - Custom Forms
  - JSON
  - Panel
---

# Custom Code

The custom code has access to the **Panel options**, the response from the REST API call, form elements, and various Grafana services. The **Custom code** is executed after the `Initial` and `Update` requests.

## Parameters

| Parameter | Description |
| -- | -- |
| `data` | Result set of panel queries. |
| `elements` | Form Elements. |
| `initial` | Parsed values from the Initial Request. |
| `initialRequest()` | Perform the Initial Request to reload panel. |
| `locationService` | Grafana's `locationService` to work with browser location and history. |
| `notifyError(['Header', 'Error Message'])` | Display error notification. |
| `notifySuccess(['Header', 'Message'])` | Display successful notification. |
| `onOptionsChange()` | Change handler to refresh panel. |
| `options` | Panels' options. |
| `response` | Request's response. |
| `setInitial({})` | Allows to specify the initial values for Custom Initial Requests to Highlight changed values and Require Confirmation. |
| `templateService` | Grafana's `templateService` provides access to variables and allows to update Time Range. |

![Panel](https://raw.githubusercontent.com/volkovlabs/volkovlabs-form-panel/main/src/img/request.png)

To learn more about parameters you can log them in the Browser Console:

```javascript
console.log(options, data, response, elements, locationService, templateService);
```

## Refresh Dashboard after update request or show error

```javascript
if (response && response.ok) {
  notifySuccess(['Update', 'Values updated successfully.']);
  locationService.reload();
} else {
  notifyError(['Error', `An error occured updating values: ${response.status}`]);
}
```

## Update variable after update request to interact with other panels

```javascript
if (response && response.ok) {
  response.json().then((resp) => {
    locationService.partial({ 'var-name': resp['name'] }, true);
  });
}
```

## Perform Initial Request after update request or show error

```javascript
if (response && response.ok) {
  notifySuccess(['Update', 'Values updated successfully.']);
  initialRequest();
} else {
  notifyError(['Error', `An error occured updating values: ${response.status}`]);
}
```

## Clear elements' values after Submit or on Reset button click

```javascript
elements.map((element) => {
  if (element.id === 'name') {
    element.value = '';
  }
});

onOptionsChange(options);
```

`onOptionsChange` handler is required to update the panel.
