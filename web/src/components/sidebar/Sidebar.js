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
          <Entry title="today" active="true" />
          <Entry title="tomorrow" />
          <Entry title="this week" />
          <div className="uk-margin-large-top" />
          { rows }
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
