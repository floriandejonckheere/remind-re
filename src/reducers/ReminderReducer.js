import reminders from 'data/reminders'
import * as ActionTypes from 'actions/ActionTypes'

const initialState = {
  reminderId: 3,
  reminders: reminders
}

/**
 * Add a reminder
 * @param state
 * @param action
 */
function createReminder(state, action) {
  let id = state.reminderId + 1
  return {
    ...state,
    reminderId: id,
    reminders: [
      ...state.reminders,
      {
        id: id,
        ...action.data,
      },
    ]
  }
}

/**
 * Remove a reminder
 * @param state
 * @param action
 */
function deleteReminder(state, action) {
  return {
    ...state,
    reminders: state.reminders.filter(r => r.id !== action.id),
  }
}

/**
 * Update a reminder
 * @param state
 * @param action
 */
function updateReminder(state, action) {
  return {
    ...state,
    reminders: state.reminders.map(r => {
      if (r.id !== action.id)
        return r

      return {
        ...r,
        ...action.data,
      }
    }),
  }
}

/**
 * Remove a label
 * @param state
 * @param action
 */
function deleteLabel(state, action) {
  // Remove label from reminders
  return {
    ...state,
    reminders: state.reminders.map(r => {
      return {
        ...r,
        labels: r.labels.filter(l => l !== action.id),
      }
    }),
  }
}

/**
 * Assign a label
 * @param state
 * @param action
 */
function assignLabel(state, action) {
  return {
    ...state,
    reminders: state.reminders.map(r => {
      if (r.id !== action.id)
        return r

      return {
        ...r,
        labels: [
          ...r.labels,
          action.labelId
        ]
      }
    }),
  }
}

/**
 * Unassign a label
 * @param state
 * @param action
 */
function unassignLabel(state, action) {
  return {
    ...state,
    reminders: state.reminders.map(r => {
      if (r.id !== action.id)
        return r

      return {
        ...r,
        labels: r.labels.filter(l => l !== action.labelId),
      }
    }),
  }
}

/**
 * Reminder reducer
 * @param state
 * @param action
 * @returns {{type, id}|*}
 */
function ReminderReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CREATE_REMINDER:
      return createReminder(state, action)
    case ActionTypes.DELETE_REMINDER:
      return deleteReminder(state, action)
    case ActionTypes.UPDATE_REMINDER:
      return updateReminder(state, action)
    case ActionTypes.DELETE_LABEL:
      return deleteLabel(state, action)
    case ActionTypes.ASSIGN_LABEL:
      return assignLabel(state, action)
    case ActionTypes.UNASSIGN_LABEL:
      return unassignLabel(state, action)
    default:
      return state
  }
}

export default ReminderReducer
