import { connect } from 'react-redux'
import moment from 'moment'

import * as Constants from 'actions/Constants'
import List from 'components/list/List'

function filterByDate(list, filter) {
  switch (filter) {
    case Constants.FILTER_ALL:
      return list
    case Constants.FILTER_UPCOMING:
      return list.filter(r => (moment(r.due) > moment() && moment(r.due) < moment().add(1, 'week').endOf('day')))
    case Constants.FILTER_NEXT_WEEK:
      return list.filter(r => (moment(r.due) > moment().add(1, 'week').startOf('isoWeek') && moment(r.due) < moment().add(1, 'week').endOf('isoWeek')))
    default:
      return list
  }
}

function filterByLabel(list, label) {
  return list.filter(r => r.labels.includes(label))
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
  mapDispatchToProps,
)(List)
