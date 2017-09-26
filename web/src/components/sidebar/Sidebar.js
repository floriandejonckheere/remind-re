import React, { Component } from 'react'

import Entry from 'components/sidebar/entry/Entry'

class Sidebar extends Component {
  render() {
    let rows = []

    this.props.labels.forEach((label) => {
      rows.push(
        <Entry
          title={label.title}
          key={label.id}
        />
      )
    })

    return (
      <div className="uk-padding">
        <ul className="uk-nav uk-nav-default">
          <Entry title="all reminders"
             dateFilter={this.props.dateFilter}
             onFilterDateInput={this.props.onFilterDateInput}
          />
          <Entry title="today"
            dateFilter={this.props.dateFilter}
            onFilterDateInput={this.props.onFilterDateInput}
          />
          <Entry title="tomorrow"
            dateFilter={this.props.dateFilter}
            onFilterDateInput={this.props.onFilterDateInput}
          />
          <Entry title="this week"
            dateFilter={this.props.dateFilter}
            onFilterDateInput={this.props.onFilterDateInput}
          />
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
