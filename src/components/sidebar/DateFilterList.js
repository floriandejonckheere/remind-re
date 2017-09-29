import React, { Component } from 'react'

import * as Constants from 'actions/Constants'
import EntryContainer from 'components/sidebar/entry/EntryContainer'

class DateFilterList extends Component {
  render() {
    return (
      <div>
        <EntryContainer filter={Constants.FILTER_ALL}>
          all reminders
        </EntryContainer>
        <EntryContainer filter={Constants.FILTER_UPCOMING}>
          upcoming
        </EntryContainer>
        <EntryContainer filter={Constants.FILTER_NEXT_WEEK}>
          next week
        </EntryContainer>
      </div>
    )
  }
}

export default DateFilterList
