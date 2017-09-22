import Immutable from 'seamless-immutable'

import * as ActionTypes from 'actions/ActionTypes'

const initialState = Immutable({
  id: 0,
  reminders: [],
  labels: []
})

/**
 * Add a reminder
 * @param state
 * @param action
 */
function addReminder(state, action) {
  return Immutable.merge(state, {
    id: state.id + 1,
    reminders: {
      [state.id]: action.data
    }
  });
}

/**
 * Remove a reminder
 * @param state
 * @param action
 */
function deleteReminder(state, action) {
  return Immutable(state).delete(action.id)
}

/**
 * Root reducer
 * @param state
 * @param action
 * @returns {{type, id}|*}
 */
function reminderApp(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_REMINDER: return addReminder(state, action)
    case ActionTypes.REMOVE_REMINDER: return removeReminder(state, action)
    default:
      return state
  }
}

export default reminderApp
