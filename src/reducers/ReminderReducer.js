import moment from 'moment'

import reminders from 'data/reminders'
import * as ActionTypes from 'actions/ActionTypes'

const initialState = {
  reminderId: 4,
  reminders: reminders
}

/**
 * Add a reminder
 * @param state
 * @param action
 */
function createReminder(state) {
  let id = state.reminderId + 1
  return {
    ...state,
    reminderId: id,
    reminders: [
      ...state.reminders,
      {
        id: id,
        title: 'New reminder',
        due: moment().unix() * 1000,
        labels: []
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
 * Sort reminders
 * @param state
 * @param action
 */
function sortReminders(state, action) {
  if (action.data.length !== state.reminders.length) {
    console.log('cannot sort partial list')
    return state
  }

  return {
    ...state,
    reminders: action.data.map(id => state.reminders.find(r => r.id === id))
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
      return createReminder(state)
    case ActionTypes.DELETE_REMINDER:
      return deleteReminder(state, action)
    case ActionTypes.UPDATE_REMINDER:
      return updateReminder(state, action)
    case ActionTypes.SORT_REMINDERS:
      return sortReminders(state, action)
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
