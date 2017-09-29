import * as ActionTypes from 'actions/ActionTypes'

/**
 * Reminder actions
 *
 */
export function createReminder(props) {
  return {
    type: ActionTypes.CREATE_REMINDER,
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

export function deleteReminder(id) {
  return {
    type: ActionTypes.DELETE_REMINDER,
    id: id,
  }
}

/**
 * Label actions
 *
 */
export function createLabel(props) {
  return {
    type: ActionTypes.CREATE_LABEL,
    data: {
      title: props.title,
    }
  }
}

export function deleteLabel(id) {
  return {
    type: ActionTypes.DELETE_LABEL,
    id: id,
  }
}

/**
 * Filter actions
 *
 */
export function setFilter(filterType, filter) {
  return {
    type: ActionTypes.SET_FILTER,
    filterType,
    filter,
  }
}
