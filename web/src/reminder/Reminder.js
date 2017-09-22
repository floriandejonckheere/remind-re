import React, { Component } from 'react'

import './Reminder.css'

class Reminder extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Reminder uk-grid">
        <div className="uk-width-expand">
          <div className="uk-text-lead">{ this.props.title }</div>
          <p className="uk-text-meta uk-margin-remove-top">{ this.props.subtitle }</p>
        </div>
        <div className="uk-flex uk-flex-middle">
          <ul className="uk-iconnav">
            <li><a href="#" className="uk-button" data-uk-icon="icon: more" /></li>
            <div className="uk-nav uk-dropdown-nav uk-padding-small" data-uk-dropdown="mode: click; pos: bottom-left">
              <ul className="uk-nav uk-nav-default">
                <li><a href="#"><span data-uk-icon="icon: pencil" /> Edit</a></li>
                <li><a href="#"><span data-uk-icon="icon: trash" /> Delete</a></li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    )
  }
}

export default Reminder
