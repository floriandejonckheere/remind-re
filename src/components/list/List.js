import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DragSortableList from 'react-drag-sortable'

import EntryContainer from 'components/list/entry/EntryContainer'

import './List.css'

class List extends Component {
  render() {
    let draggableReminders = this.props.reminders.map(r => {
      return {
        content: <EntryContainer data={r} key={r} />,
      }
    })

    return (
      <div className="re-reminder-list uk-padding uk-height-1-1" data-uk-height-viewport="expand: true">
        <div className="uk-float-right">
          <a

            className="uk-icon uk-button"
            title="Add a reminder"
            data-uk-icon="icon: plus"
            data-uk-tooltip
            onClick={this.props.onClickAdd}
          />
        </div>
        <strong>
          {this.props.title}
          {this.props.clearable && (
            <a

              onClick={this.props.onClickClear}
              title="Clear filter"
              className="uk-margin-small-left uk-icon-link"
              data-uk-icon="icon: close"
              data-uk-tooltip
            />
          )}
        </strong>
        <ul className="uk-list uk-list-divider">
          <DragSortableList items={draggableReminders}
            onSort={console.log}
            dropBackTransitionDuration={0.3}
            type="vertical"
          />
          {this.props.reminders.length === 0 && (
            <li data-uk-alert>No reminders matched your query</li>
          )}
        </ul>

        <footer className="re-footer uk-text-center uk-padding uk-padding-remove-horizontal uk-text-small">
          <a href="https://florian.dejonckhee.re/" className="uk-link-reset">&copy; 2017 Florian Dejonckheere</a>
        </footer>
      </div>
    )
  }
}

List.propTypes = {
  title: PropTypes.string.isRequired,
  reminders: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      due: PropTypes.number.isRequired,
      interval: PropTypes.number,
      labels: PropTypes.arrayOf(PropTypes.number),
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
  clearable: PropTypes.bool,

  onClickAdd: PropTypes.func.isRequired,
  onClickClear: PropTypes.func.isRequired,
}

export default List
