import Immutable from 'seamless-immutable'

import reminders from 'data/reminders'
import * as ActionTypes from 'actions/ActionTypes'

const initialState = Immutable({
  reminderId: 0,
  reminders: reminders
})

/**
 * Add a reminder
 * @param state
 * @param action
 */
function createReminder(state, action) {
  return Immutable.merge(state, {
    reminderId: state.reminderId + 1,
    reminders: {
      [state.reminderId]: action.data
    }
  });
}

/**
 * Remove a reminder
 * @param state
 * @param action
 */
function deleteReminder(state, action) {
  return Immutable.merge(state, {
    reminders: state.reminders.filter(r => r.id !== action.id)
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
    default:
      return state
  }
}

export default ReminderReducer
