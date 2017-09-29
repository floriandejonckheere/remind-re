import React, { Component } from 'react'

import * as Constants from 'actions/Constants'
import FilterEntry from 'components/sidebar/entry/FilterEntry'

class Sidebar extends Component {
  render() {
    let rows = []

    this.props.labels.forEach((label) => {
      rows.push(
        <FilterEntry filter={`FILTER_LABEL_${label.id}`} key={label.id}>
          {label.title}
        </FilterEntry>
       )
     })

    return (
      <div className="uk-padding">
        <ul className="uk-nav uk-nav-default">
          <FilterEntry filter={Constants.FILTER_ALL}>
            all reminders
          </FilterEntry>
          <FilterEntry filter={Constants.FILTER_UPCOMING}>
            upcoming
          </FilterEntry>
          <FilterEntry filter={Constants.FILTER_NEXT_WEEK}>
            {console.log(Constants)}
            next week
          </FilterEntry>
          <div className="uk-margin-large-top" />
          {rows}
          <li>
            <a href="#" className="uk-text-primary">
              add label
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar
