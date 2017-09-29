import Immutable from 'seamless-immutable'

import labels from 'data/labels'
import * as ActionTypes from 'actions/ActionTypes'

const initialState = Immutable({
  labelId: 0,
  labels: labels
})

/**
 * Add a label
 * @param state
 * @param action
 */
function createLabel(state, action) {
  return Immutable.merge(state, {
    labelId: state.labelId + 1,
    labels: {
      [state.labelId]: action.data
    }
  });
}

/**
 * Remove a label
 * @param state
 * @param action
 */
function deleteLabel(state, action) {
  return Immutable(state).delete(action.id)
}

/**
 * Label reducer
 * @param state
 * @param action
 * @returns {{type, id}|*}
 */
function LabelReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.CREATE_LABEL:
      return createLabel(state, action)
    case ActionTypes.DELETE_LABEL:
      return deleteLabel(state, action)
    default:
      return state
  }
}

export default LabelReducer
