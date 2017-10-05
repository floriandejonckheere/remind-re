import React, { Component } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import Sugar from 'sugar'

import LabelContainer from 'components/list/label/LabelContainer'

import './Entry.css'

class Entry extends Component {
  constructor(props) {
    super(props)

    this.state = {
      validSchedule: false,
    }

    this.onStartEdit = this.onStartEdit.bind(this)
    this.onFinishEdit = this.onFinishEdit.bind(this)
    this.onUpdateSchedule = this.onUpdateSchedule.bind(this)
  }

  render() {
    if (this.props.edit) {
      return (
        <li className="re-reminder-entry uk-padding-small">
          <div className="uk-grid">
            <div className="uk-width-expand">
              <form className="uk-margin-top" onSubmit={this.onFinishEdit}>
                <div className="uk-margin">
                  <input
                    type="text"
                    className="uk-input no-drag"
                    placeholder="Reminder name"
                    name="title"
                    defaultValue={this.props.data.title}
                    autoFocus
                  />
                </div>
                <div className="uk-margin">
                  <div className="uk-inline uk-width-1-1">
                    <a className="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: question" />
                    {this.state.validSchedule || (
                      <a className="uk-form-icon uk-form-icon-flip re-warning-icon uk-text-danger" title="invalid schedule" data-uk-icon="icon: warning" data-uk-tooltip />
                    )}
                    <div className="uk-text-small uk-width-auto" data-uk-dropdown="mode: click; boundary: .uk-inline">
                      <p>Write down the end time for your reminder. Examples:</p>
                      <p><em>in 30 minutes</em></p>
                      <p><em>next tuesday at 10am</em></p>
                      <p><em>two weeks from today</em></p>
                    </div>
                    <input
                      type="text"
                      className="uk-input uk-form-small no-drag"
                      placeholder="Schedule"
                      name="schedule"
                      onChange={this.onUpdateSchedule}
                    />
                  </div>
                </div>

                <div className="uk-margin">
                  <input
                    type="submit"
                    value="save"
                    className="uk-button uk-button-small uk-button-default uk-float-right no-drag"
                  />

                  {this.props.labels.map(l => (
                    <LabelContainer
                      id={l.id}
                      key={l.id}
                      active={this.props.data.labels.includes(l.id)}
                      onClick={this.props.onLabel}
                    />
                  ))}
                </div>
              </form>
            </div>
          </div>
        </li>
      )
    } else {
      return (
        <li className="re-reminder-entry uk-padding-small">
          <div className="uk-grid">
            <div className="uk-padding-remove">
              <a
                className="re-hover-icon re-drag-icon uk-float-right uk-button uk-padding-remove-right"
                data-uk-icon="icon: menu"
              />
            </div>
            <div className="uk-width-expand">
              <div className="uk-text-lead uk-text-truncate no-drag">
                {this.props.data.title ? (
                  this.props.data.title
                ) : (
                  <em className="uk-text-muted">Untitled reminder</em>
                )}
                {this.props.data.interval !== null &&
                <span className="uk-margin-left uk-text-muted" title="Recurring reminder" data-uk-icon="icon: future; ratio: .8" data-uk-tooltip />
                }
              </div>
              <div className="uk-grid uk-flex uk-flex-between">
                <div className="uk-flex uk-flex-middle">
                  <p className="uk-text-meta uk-margin-remove-top no-drag">
                    {moment(this.props.data.due).fromNow()}
                    {this.props.data.labels.map(id => (
                      <LabelContainer
                        id={id}
                        key={id}
                        active="true"
                        onClick={this.props.onFilterLabel}
                      />
                    ))}
                  </p>
                </div>
                <div className="uk-flex-right uk-hidden@m">
                  <ul className="uk-navbar-nav">
                    <li><a title="Trigger" data-uk-icon="icon: bell" data-uk-tooltip data-uk-toggle="target: #modal-full" onClick={this.props.onTrigger} /></li>
                    <li><a title="Edit" data-uk-icon="icon: pencil" data-uk-tooltip onClick={this.props.onStartEdit} /></li>
                    <li><a title="Delete" data-uk-icon="icon: close" data-uk-tooltip onClick={this.props.onDelete} /></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="uk-flex uk-flex-middle uk-visible@m">
              <a
                className="re-hover-icon uk-float-right uk-button"
                data-uk-icon="icon: more; ratio: .8"
              />
              <div className="uk-nav uk-dropdown-nav uk-padding-small" data-uk-dropdown="mode: click; pos: bottom-left">
                <ul className="uk-nav uk-nav-default">
                  <li><a onClick={this.props.onTrigger} data-uk-toggle="target: #modal-full"><span className="uk-link-icon" data-uk-icon="icon: bell" /> Trigger</a></li>
                  <li><a onClick={this.onStartEdit}><span className="uk-link-icon" data-uk-icon="icon: pencil" /> Edit</a></li>
                  <li><a onClick={this.props.onDelete}><span className="uk-link-icon" data-uk-icon="icon: trash" /> Delete</a></li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      )
    }
  }

  onStartEdit() {
    this.props.onStartEdit()
  }

  onFinishEdit(e) {
    e.preventDefault()
    this.props.onFinishEdit()
    this.props.onUpdate({ title: e.target.elements[0].value })
  }

  onUpdateSchedule(e) {
    let date = Sugar.Date.create(e.target.value)

    if (date == 'Invalid Date') {
      this.setState({ validSchedule: false })
    } else {
      this.setState({ validSchedule: true })
    }
  }
}

// TODO: abstract reminder proptypes
Entry.propTypes = {
  data: PropTypes.any.isRequired,
  labels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ),
  edit: PropTypes.bool,

  onStartEdit: PropTypes.func.isRequired,
  onFinishEdit: PropTypes.func.isRequired,
  onTrigger: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onFilterLabel: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onLabel: PropTypes.func.isRequired,
}

export default Entry
