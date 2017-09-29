import Immutable from 'seamless-immutable'

import * as Constants from 'actions/Constants'
import * as ActionTypes from 'actions/ActionTypes'

const initialState = Immutable({
  filterType: Constants.DATE_FILTER,
  filter: Constants.FILTER_ALL,
})

function setFilter(state, action) {
  return Immutable.merge(state, {
    filterType: action.filterType,
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
