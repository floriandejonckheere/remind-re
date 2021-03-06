import * as Constants from 'actions/Constants'
import * as ActionTypes from 'actions/ActionTypes'

const initialState = {
  filterType: Constants.DATE_FILTER,
  filter: Constants.FILTER_ALL,
}

function setFilter(state, action) {
  return {
    ...state,
    filterType: action.filterType,
    filter: action.filter,
  }
}

function clearFilter(state, action) {
  return {
    ...state,
    ...initialState
  }
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
    case ActionTypes.CLEAR_FILTER:
      return clearFilter(state, action)
    default:
      return state
  }
}

export default FilterReducer
