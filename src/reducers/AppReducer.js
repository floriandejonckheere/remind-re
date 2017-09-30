import Immutable from 'seamless-immutable'

import reminders from 'data/reminders'
import * as ActionTypes from 'actions/ActionTypes'

const initialState = Immutable({
  selection: [],
})

/**
 * Set selection
 * @param state
 * @param action
 * @returns {*}
 */
function setSelection(state, action) {
  return Immutable.merge(state, {
    selection: action.selection,
  })
}

/**
 * Clear selection
 * @param state
 * @param action
 */
function clearSelection(state) {
  return Immutable.merge(state, {
    selection: [],
  })
}

/**
 * App reducer
 * @param state
 * @param action
 * @returns {{type, id}|*}
 */
function AppReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_SELECTION:
      return setSelection(state, action)
    case ActionTypes.CLEAR_SELECTION:
      return clearSelection(state)
    default:
      return state
  }
}

export default AppReducer
