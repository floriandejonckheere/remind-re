import * as ActionTypes from 'actions/ActionTypes'

const initialState = {
  selection: [],
  alert: null,
}

/**
 * Set selection
 * @param state
 * @param action
 */
function setSelection(state, action) {
  return {
    ...state,
    selection: action.selection,
  }
}

/**
 * Clear selection
 * @param state
 */
function clearSelection(state) {
  return {
    ...state,
    selection: [],
  }
}

/**
 * Set alert
 * @param state
 * @param action
 */
function setAlert(state, action) {
  return {
    ...state,
    alert: action.id,
  }
}

/**
 * Clear alert
 * @param state
 */
function clearAlert(state) {
  return {
    ...state,
    alert: null,
  }
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
    case ActionTypes.SET_ALERT:
      return setAlert(state, action)
    case ActionTypes.CLEAR_ALERT:
      return clearAlert(state)
    default:
      return state
  }
}

export default AppReducer
