import React, { Component } from 'react'

import Reminder from 'components/reminderlist/reminder/Reminder'

import './ReminderList.css'

class ReminderList extends Component {
  render() {
    let rows = []
    this.props.reminders.forEach((reminder) => {
      rows.push(
        <Reminder
          data={reminder}
          key={reminder.id}
        />
      )
    })

    return (
      <div className="ReminderList uk-padding" data-uk-height-viewport="expand: true">
        <strong>Today</strong>
        <ul className="uk-list uk-list-divider">
          { rows }
        </ul>
      </div>
    )
  }
}

export default ReminderList
