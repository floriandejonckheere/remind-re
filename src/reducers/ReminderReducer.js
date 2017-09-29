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
function addReminder(state, action) {
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
function removeReminder(state, action) {
  return Immutable(state).delete(action.id)
}

/**
 * Reminder reducer
 * @param state
 * @param action
 * @returns {{type, id}|*}
 */
function ReminderReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_REMINDER:
      return addReminder(state, action)
    case ActionTypes.REMOVE_REMINDER:
      return removeReminder(state, action)
    default:
      return state
  }
}

export default ReminderReducer
