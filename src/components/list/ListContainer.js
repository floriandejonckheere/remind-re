import { connect } from 'react-redux'
import moment from 'moment'

import * as Constants from 'actions/Constants'
import { clearFilter, createReminder, sortReminders } from 'actions/ActionCreators'
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

function filterByText(list, query) {
  return list.filter(r => r.title.toLowerCase().includes(query.toLowerCase()))
}

function mapStateToProps(state) {
  switch (state.filter.filterType) {
    case Constants.DATE_FILTER:
      let title = ''

      switch (state.filter.filter) {
        case Constants.FILTER_ALL:
          title = 'All reminders'
          break
        case Constants.FILTER_UPCOMING:
          title = 'Upcoming reminders'
          break
        case Constants.FILTER_NEXT_WEEK:
          title = 'Next week'
          break
        default:
          title = state.filter.filter
      }

      return {
        reminders: filterByDate(state.reminders.reminders, state.filter.filter),
        title: title,
        clearable: (state.filter.filter !== Constants.FILTER_ALL),
      }
    case Constants.LABEL_FILTER:
      return {
        reminders: filterByLabel(state.reminders.reminders, state.filter.filter),
        title: `Label '${state.labels.labels.find(l => l.id === state.filter.filter).title}'`,
        clearable: true,
      }
    case Constants.TEXT_FILTER:
      return {
        reminders: filterByText(state.reminders.reminders, state.filter.filter),
        title: `Search query '${state.filter.filter}'`,
        clearable: true,
      }
    default:
      return {
        reminders: state.reminders.reminders,
        title: `Unknown filter: ${state.filter.filterType}: ${state.filter.filter}`,
        clearable: true,
      }
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClickClear: () => {
      dispatch(clearFilter())
    },
    onClickAdd: function() {
      dispatch(createReminder({
        title: 'New reminder',
        labels: [],
      }))
    },
    onSort: function(data) {
      dispatch(sortReminders(data.map(d => d.content.props.data.id)))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List)
