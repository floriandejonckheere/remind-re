# Remindre

A quick set-and-forget app.

Remindre allows you to quickly add and organize tasks in order to aid your busy daily life. The service will automatically alert you by sms, email and push notifications when a task is nearing the due date.

## Setup

Install the following software first:

- NodeJS
- Yarn

Then install the dependencies:

```
$ yarn
```

Build a development bundle and run a server:

```
$ yarn start
```

Build a production bundle:

```
$ yarn build
```

## Limitations

The application does not have a backend. Data is stored in memory, a page refresh resets the state. Consequently, the reminder service does not actually work. On the reminder context menu, a 'trigger' action is provided to simulate an alert.

## What works

- Creating, editing, filtering and deleting labels
- Creating, editing, reordering and deleting reminders
- (Un-)assigning labels
- Filtering by search query
- Responsive app

## What does not work

- Alerts
- Saving reminder schedule
- Reordering partial lists (filtered results)

## What needs to be done

- HTML5 LocalStorage as Redux store 
