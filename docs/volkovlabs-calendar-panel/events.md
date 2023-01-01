---
description: Calendar panel allows to display events from any data source.
tags:
  - Calendar
  - Events
  - Panel
---

# Events

The Calendar visualization panel allows displaying events from any data source. You can define fields in the panel's options.

| Option        | Description                                                         |
| ------------- | ------------------------------------------------------------------- |
| Text          | Field to use as event text. Defaults to the first text field.       |
| Description   | Field to use as event description.                                  |
| Start time    | Field to use as event start time. Defaults to the first time field. |
| End time      | Field to use as event end time.                                     |
| Labels        | Fields to use as event labels.                                      |

## Duration

- If event has only Start time configured, events are considered instantaneous.
- If event has Start and End time, events are considered to have a duration.
- Any events that are missing an End time are considered ongoing.
