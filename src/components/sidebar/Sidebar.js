import React, { Component } from 'react'

import FilterEntry from 'components/sidebar/entry/FilterEntry'

class Sidebar extends Component {
  render() {
    let rows = []

    // this.props.labels.forEach((label) => {
    //   rows.push(
    //     <Entry
    //       title={label.title}
    //       key={label.id}
    //     />
    //   )
    // })

    return (
      <div className="uk-padding">
        <ul className="uk-nav uk-nav-default">
          <FilterEntry filter="FILTER_ALL">
            all reminders
          </FilterEntry>
          <FilterEntry filter="FILTER_UPCOMING">
            upcoming
          </FilterEntry>
          <FilterEntry filter="FILTER_NEXT_WEEK">
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
