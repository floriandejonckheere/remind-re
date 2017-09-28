import Immutable from 'seamless-immutable'

import * as ActionTypes from 'actions/ActionTypes'

const initialState = Immutable({
  filter: ActionTypes.FILTER_ALL,
})

function setFilter(state, action) {
  return Immutable.merge(state, {
    filter: action.filter,
  });
}

/**
 * Set a filter
 * @param state
 * @param action
 */
function FilterReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SET_FILTER:
      return setFilter(state, action)
    default:
      return state
  }
}

export default FilterReducer
