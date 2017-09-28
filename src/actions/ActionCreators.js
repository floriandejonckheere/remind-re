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
      alerts: props.alerts,
    }
  }
}

export function removeReminder(id) {
  return {
    type: ActionTypes.REMOVE_REMINDER,
    id: id,
  }
}

export function setFilter(filter) {
  return {
    type: ActionTypes.SET_FILTER,
    filter: filter,
  }
}
