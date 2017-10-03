import Immutable from 'seamless-immutable'

import reminders from 'data/reminders'
import * as ActionTypes from 'actions/ActionTypes'

const initialState = {
  reminderId: 1,
  reminders: reminders
}

/**
 * Add a reminder
 * @param state
 * @param action
 */
function createReminder(state, action) {
  return {
    ...state,
    reminderId: state.reminderId + 1,
    reminders: [
      ...state.reminders,
      { ...action.data },
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
        title: action.title,
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
  return Immutable.merge(state, {
    // Remove label from reminders
    reminders: state.reminders.map(r => Immutable(r).merge({ labels: r.labels.filter(l => l !== action.id) }))
  })
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
    default:
      return state
  }
}

export default ReminderReducer
