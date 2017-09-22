import React, { Component } from 'react'

import Reminder from 'components/reminder/Reminder'

import './ReminderList.css'

class ReminderList extends Component {
  render() {
    return (
      <div className="ReminderList uk-padding" data-uk-height-viewport="expand: true">
        <strong>Today</strong>
        <ul className="uk-list uk-list-divider">
          <li className="uk-padding-small">
            <Reminder
              title="Hand in assigment 1"
              subtitle="Tomorrow evening"
              date=""
              active="true"
            />
          </li>
          <li className="uk-padding-small">
            <Reminder
              title="Take out trash"
              subtitle="Wednesday at 8:00"
              recurring="true"
            />
          </li>
        </ul>
      </div>
    )
  }
}

export default ReminderList
