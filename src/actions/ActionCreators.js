import * as ActionTypes from 'actions/ActionTypes'

/**
 * Reminder actions
 *
 */
export function createReminder() {
  return {
    type: ActionTypes.CREATE_REMINDER,
  }
}

export function deleteReminder(id) {
  return {
    type: ActionTypes.DELETE_REMINDER,
    id,
  }
}

export function updateReminder(id, data) {
  return {
    type: ActionTypes.UPDATE_REMINDER,
    id,
    data,
  }
}

export function sortReminders(data) {
  return {
    type: ActionTypes.SORT_REMINDERS,
    data,
  }
}

export function assignLabel(id, labelId) {
  return {
    type: ActionTypes.ASSIGN_LABEL,
    id,
    labelId,
  }
}

export function unassignLabel(id, labelId) {
  return {
    type: ActionTypes.UNASSIGN_LABEL,
    id,
    labelId,
  }
}

/**
 * Label actions
 *
 */
export function createLabel() {
  return {
    type: ActionTypes.CREATE_LABEL,
  }
}

export function deleteLabel(id) {
  return {
    type: ActionTypes.DELETE_LABEL,
    id,
  }
}

export function updateLabel(id, data) {
  return {
    type: ActionTypes.UPDATE_LABEL,
    id,
    data,
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
 * Alert actions
 *
 */
export function setAlert(id) {
  return {
    type: ActionTypes.SET_ALERT,
    id,
  }
}

export function clearAlert(id) {
  return {
    type: ActionTypes.CLEAR_ALERT,
    id,
  }
}

/**
 * App actions
 *
 */
export function setSelection(selection) {
  return {
    type: ActionTypes.SET_SELECTION,
    selection,
  }
}

export function clearSelection(selection) {
  return {
    type: ActionTypes.SET_SELECTION,
  }
}

export function setEdit(id) {
  return {
    type: ActionTypes.SET_EDIT,
    id,
  }
}

export function clearEdit() {
  return {
    type: ActionTypes.SET_EDIT,
  }
}
