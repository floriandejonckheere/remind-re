import { connect } from 'react-redux'

import * as Constants from 'actions/Constants'
import List from 'components/list/List'

function getFilteredList(list, filter) {
  switch (filter) {
    case Constants.FILTER_ALL:
      return list
    case Constants.FILTER_UPCOMING:
      return list
    case Constants.FILTER_NEXT_WEEK:
      return list
    default:
      // Filter by label
      return list
  }
}

function mapStateToProps(state) {
  return {
    reminders: getFilteredList(state.reminders.reminders, state.filter.filter)
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
