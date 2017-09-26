import React, { Component } from 'react'
import moment from 'moment'

import Entry from 'components/reminderlist/entry/Entry'

import './ReminderList.css'

class ReminderList extends Component {
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
            <a href="#" className="uk-text-primary">
              <span className="uk-button" data-uk-icon="icon: plus" />add reminder
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default ReminderList
