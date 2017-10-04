import React, { Component } from 'react'

import * as Constants from 'actions/Constants'
import FilterEntryContainer from 'components/filterlist/filterentry/FilterEntryContainer'

class DateFilterList extends Component {
  render() {
    return (
      <ul className="uk-nav uk-nav-default">
        <FilterEntryContainer
          filter={Constants.FILTER_ALL}
          filterType={Constants.DATE_FILTER}
          title="all reminders"
        />
        <FilterEntryContainer
          filter={Constants.FILTER_UPCOMING}
          filterType={Constants.DATE_FILTER}
          title="upcoming"
        />
        <FilterEntryContainer
          filter={Constants.FILTER_NEXT_WEEK}
          filterType={Constants.DATE_FILTER}
          title="next week"
        />
      </ul>
    )
  }
}

export default DateFilterList
