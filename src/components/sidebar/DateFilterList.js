import React, { Component } from 'react'

import * as Constants from 'actions/Constants'
import FilterEntryContainer from 'components/sidebar/filterentry/FilterEntryContainer'

class DateFilterList extends Component {
  render() {
    return (
      <ul className="uk-nav uk-nav-default">
        <FilterEntryContainer filter={Constants.FILTER_ALL} filterType={Constants.DATE_FILTER}>
          all reminders
        </FilterEntryContainer>
        <FilterEntryContainer filter={Constants.FILTER_UPCOMING} filterType={Constants.DATE_FILTER}>
          upcoming
        </FilterEntryContainer>
        <FilterEntryContainer filter={Constants.FILTER_NEXT_WEEK} filterType={Constants.DATE_FILTER}>
          next week
        </FilterEntryContainer>
      </ul>
    )
  }
}

export default DateFilterList
