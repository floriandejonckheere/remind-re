import React, { Component } from 'react'

import './Reminders.css'

class Reminders extends Component {
  render() {
    return (
      <div className="Reminders uk-padding-large">
        <ul className="uk-list">
          <li className="uk-padding-small">
            <h1 className="uk-text-lead">Hand in assignment 1</h1>
            <p className="uk-text-meta">Tomorrow evening</p>
          </li>
          <li className="uk-padding-small">
            <h1 className="uk-text-lead">Hand in assignment 1</h1>
            <p className="uk-text-meta">Tomorrow evening</p>
          </li>
          <li className="uk-padding-small">
            <h1 className="uk-text-lead">Hand in assignment 1</h1>
            <p className="uk-text-meta">Tomorrow evening</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default Reminders
