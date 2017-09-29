import * as ActionTypes from 'actions/ActionTypes'

/**
 * Reminder actions
 *
 */
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

/**
 * Label actions
 *
 */
export function addLabel(props) {
  return {
    type: ActionTypes.ADD_LABEL,
    data: {
      title: props.title,
    }
  }
}

export function removeLabel(id) {
  return {
    type: ActionTypes.REMOVE_LABEL,
    id: id,
  }
}

/**
 * Filter actions
 *
 */
export function setFilter(filter) {
  return {
    type: ActionTypes.SET_FILTER,
    filter: filter,
  }
}
