import { connect } from 'react-redux'

import * as Constants from 'actions/Constants'
import List from 'components/list/List'

function filterByDate(list, filter) {
  // TODO
  switch (filter.filter) {
    case Constants.FILTER_ALL:
    case Constants.FILTER_UPCOMING:
    case Constants.FILTER_NEXT_WEEK:
    default:
      return list
  }
}

function filterByLabel(list, filter) {
  // TODO
  return list
}

function mapStateToProps(state) {
  if (state.filter.filterType === Constants.DATE_FILTER) {
    return {
      reminders: filterByDate(state.reminders.reminders, state.filter.filter)
    }
  } else if (state.filter.filterType === Constants.LABEL_FILTER) {
    return {
      reminders: filterByLabel(state.reminders.reminders, state.filter.filter)
    }
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: () => {
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
