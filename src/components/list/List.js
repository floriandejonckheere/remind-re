import React, { Component } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

import Entry from 'components/list/entry/Entry'

import './List.css'

class List extends Component {
  render() {
    let rows = []
    this.props.reminders.forEach((reminder) => {
      // TODO: filter recurring events
      let date = moment(reminder.due)

      let dateFilters = {
        'today': [moment().startOf('day'), moment().endOf('day')],
        'tomorrow': [moment().add(1, 'day').startOf('day'), moment().add(1, 'day').endOf('day')],
        'this week': [moment().startOf('isoWeek'), moment().endOf('isoWeek')]
      }

      if (this.props.dateFilter !== 'all reminders' &&
          (date < dateFilters[this.props.dateFilter][0] ||
          date > dateFilters[this.props.dateFilter][1]))
        return

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
