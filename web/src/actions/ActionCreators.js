import * as ActionTypes from 'actions/ActionTypes'

export function addReminder(props) {
  return {
    type: ActionTypes.ADD_REMINDER,
    data: {
      title: props.title,
      active: true,
      standalone: false,
      due: props.due,
      recurring: Boolean(props.interval),
      interval: props.interval,
      labels: props.labels,
      alerts: props.alerts
    }
  }
}

export function removeReminder(id) {
  return {
    type: ActionTypes.REMOVE_REMINDER,
    id: id
  }
}
