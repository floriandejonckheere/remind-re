import React, { Component } from 'react'

import Entry from 'components/reminderlist/entry/Entry'
import Searchbar from 'components/navbar/searchbar/Searchbar'

import './ReminderList.css'

class ReminderList extends Component {
  render() {
    let rows = []
    this.props.reminders.forEach((reminder) => {
      if (reminder.title.toLowerCase().indexOf(this.props.textFilter.toLowerCase()) === -1)
        return

      rows.push(
        <Entry
          data={reminder}
          key={reminder.id}
        />
      )
    })

    return (
      <div className="re-reminder-list uk-padding uk-height-1-1" data-uk-height-viewport="expand: true">
        <strong>Today</strong>
        <ul className="uk-list uk-list-divider">
          { rows }
          <li>
            <a href="#" className="uk-text-primary">
              <span className="uk-button" data-uk-icon="icon: plus" />add reminder
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default ReminderList
