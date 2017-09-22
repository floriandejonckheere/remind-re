import React, { Component } from 'react'

import Reminder from 'reminder/Reminder'

import './Reminders.css'

class Reminders extends Component {
  render() {
    return (
      <div className="Reminders uk-padding" uk-height-viewport="expand: true">
        <strong>Today</strong>
        <ul className="uk-list">
          <li className="uk-padding-small">
            <Reminder
              title="Hand in assigment 1"
              subtitle="Tomorrow evening"
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

export default Reminders
