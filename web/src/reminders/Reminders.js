import React, { Component } from 'react'

import './Reminders.css'

class Reminders extends Component {
  render() {
    return (
      <div className="Reminders uk-padding" uk-height-viewport="expand: true">
        <strong>Today</strong>
        <ul className="uk-list">
          <li className="uk-padding-small">
            <div className="uk-text-lead">Hand in assignment 1</div>
            <p className="uk-text-meta">Tomorrow evening</p>
          </li>
          <li className="uk-padding-small">
            <div className="uk-text-lead">Hand in assignment 1</div>
            <p className="uk-text-meta">Tomorrow evening</p>
          </li>
          <li className="uk-padding-small">
            <div className="uk-text-lead">Hand in assignment 1</div>
            <p className="uk-text-meta">Tomorrow evening</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default Reminders
