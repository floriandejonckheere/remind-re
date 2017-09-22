import React, { Component } from 'react'

import './Reminder.css'

class Reminder extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Reminder">
        <div className="uk-text-lead">{ this.props.title }</div>
        <p className="uk-text-meta">{ this.props.subtitle }</p>
      </div>
    )
  }
}

export default Reminder
