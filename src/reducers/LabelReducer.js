import labels from 'data/labels'
import * as ActionTypes from 'actions/ActionTypes'

const initialState = {
  labelId: 1,
  labels: labels
}

/**
 * Add a label
 * @param state
 * @param action
 */
function createLabel(state, action) {
  let id = state.labelId + 1

  return {
    ...state,
    labelId: id,
    labels: [
      ...state.labels,
      {
        id: id,
        ...action.data,
      }
    ],
  }
}

/**
 * Remove a label
 * @param state
 * @param action
 */
function deleteLabel(state, action) {
  return {
    ...state,
    labels: state.labels.filter(l => l.id !== action.id),
  }
}

/**
 * Update a label
 * @param state
 * @param action
 */
function updateLabel(state, action) {
  return {
    ...state,
    labels: state.labels.map(l => {
      if (l.id !== action.id)
        return l

      return {
        ...l,
        ...action.data,
      }
    }),
  }
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
    case ActionTypes.UPDATE_LABEL:
      return updateLabel(state, action)
    default:
      return state
  }
}

export default LabelReducer
