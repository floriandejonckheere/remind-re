import React, { Component } from 'react'
import moment from 'moment'

import './Reminder.css'

class Reminder extends Component {
  render() {
    return (
      <li className="uk-padding-small">
        <div className="Reminder uk-grid">
          <div className="uk-flex uk-flex-middle">
            <input type="checkbox" className="uk-checkbox" />
          </div>
          <div className="uk-width-expand">
            <div className="uk-text-lead">
              { this.props.data.active ?
                this.props.data.title
              : (
                <s className="uk-text-muted">{ this.props.data.title }</s>
              )}
              { this.props.data.recurring &&
                <span className="uk-margin-left uk-text-muted" title="Recurring reminder" data-uk-icon="icon: future; ratio: .8" data-uk-tooltip />
              }
            </div>
            <p className="uk-text-meta uk-margin-remove-top">
              { moment(this.props.data.due).fromNow() }
            </p>
          </div>
          <div className="uk-flex uk-flex-middle">
            <ul className="uk-iconnav">
              <li><a href="#" className="uk-button" data-uk-icon="icon: more" /></li>
              <div className="uk-nav uk-dropdown-nav uk-padding-small" data-uk-dropdown="mode: click; pos: bottom-left">
                <ul className="uk-nav uk-nav-default">
                  <li><a href="#"><span className="uk-link-icon" data-uk-icon="icon: pencil" /> Edit</a></li>
                  <li><a href="#"><span className="uk-link-icon" data-uk-icon="icon: trash" /> Delete</a></li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </li>
    )
  }
}

export default Reminder
