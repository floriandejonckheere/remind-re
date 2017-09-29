import React, { Component } from 'react'

import * as Constants from 'actions/Constants'
import EntryContainer from 'components/sidebar/entry/EntryContainer'

class DateFilterList extends Component {
  render() {
    return (
      <div>
        <EntryContainer filter={Constants.FILTER_ALL} filterType={Constants.DATE_FILTER}>
          all reminders
        </EntryContainer>
        <EntryContainer filter={Constants.FILTER_UPCOMING} filterType={Constants.DATE_FILTER}>
          upcoming
        </EntryContainer>
        <EntryContainer filter={Constants.FILTER_NEXT_WEEK} filterType={Constants.DATE_FILTER}>
          next week
        </EntryContainer>
      </div>
    )
  }
}

export default DateFilterList
