import React, { Component } from 'react'
import PropTypes from 'prop-types'

import EntryContainer from 'components/list/entry/EntryContainer'

import './List.css'

class List extends Component {
  render() {
    return (
      <div className="re-reminder-list uk-padding uk-height-1-1" data-uk-height-viewport="expand: true">
        <strong>{this.props.title}</strong>
        {this.props.clearable && (
          <a
            href="#"
            onClick={this.props.onClickClear}
            title="Clear filter"
            className="uk-margin-small-left"
            data-uk-icon="icon: close"
            data-uk-tooltip
          />
        )}
        <ul className="uk-list uk-list-divider">
          {this.props.reminders.map(reminder => (
            <EntryContainer
              data={reminder}
              key={reminder.id}
            />
          ))}
          {this.props.reminders.length === 0 && (
            <li data-uk-alert>No reminders matched your query</li>
          )}
          <li>
            <a href="#" className="uk-text-primary" data-uk-toggle="target: #modal-add-reminder">
              <span className="uk-button" data-uk-icon="icon: plus" />add reminder
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

List.propTypes = {
  reminders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
      standalone: PropTypes.bool.isRequired,
      due: PropTypes.number.isRequired,
      interval: PropTypes.number,
      labels: PropTypes.arrayOf(PropTypes.string),
      alerts: PropTypes.arrayOf(
        PropTypes.shape({
          time: PropTypes.number.isRequired,
          type: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
      ).isRequired,
    }).isRequired,
  ).isRequired,
  dateFilter: PropTypes.string,
  textFilter: PropTypes.string,
}

export default List
