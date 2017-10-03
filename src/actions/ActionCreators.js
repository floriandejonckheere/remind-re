import * as ActionTypes from 'actions/ActionTypes'

/**
 * Reminder actions
 *
 */
export function createReminder(props) {
  return {
    type: ActionTypes.CREATE_REMINDER,
    ...props,
  }
}

export function deleteReminder(id) {
  return {
    type: ActionTypes.DELETE_REMINDER,
    id: id,
  }
}

export function updateReminder(id, props) {
  return {
    type: ActionTypes.UPDATE_REMINDER,
    id: id,
    ...props,
  }
}

/**
 * Label actions
 *
 */
export function createLabel(props) {
  return {
    type: ActionTypes.CREATE_LABEL,
    title: props.title,
  }
}

export function deleteLabel(id) {
  return {
    type: ActionTypes.DELETE_LABEL,
    id: id,
  }
}

export function updateLabel(id, title) {
  return {
    type: ActionTypes.UPDATE_LABEL,
    id: id,
    title: title,
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

export function clearFilter() {
  return {
    type: ActionTypes.CLEAR_FILTER,
  }
}

/**
 * App actions
 *
 */
export function setSelection(selection) {
  return {
    type: ActionTypes.SET_SELECTION,
    selection: selection,
  }
}

export function clearSelection(selection) {
  return {
    type: ActionTypes.SET_SELECTION,
  }
}
