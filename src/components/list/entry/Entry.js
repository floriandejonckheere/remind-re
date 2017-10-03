import React, { Component } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

import LabelContainer from 'components/list/label/LabelContainer'
import LabelToggleContainer from 'components/list/labeltoggle/LabelToggleContainer'

import './Entry.css'

class Entry extends Component {
  constructor(props) {
    super(props)

    this.state = { editing: false }
    this.onClickEdit = this.onClickEdit.bind(this)
    this.onClickSubmit = this.onClickSubmit.bind(this)
  }

  render() {
    return (
      <li className="re-reminder-entry uk-padding-small">
        <div className="uk-grid">
          <div className="uk-width-expand">
            {this.state.editing ? (
              <form className="uk-margin-top" onSubmit={this.onClickSubmit}>
                <div className="uk-margin">
                  <input
                    type="text"
                    className="uk-input"
                    placeholder="Reminder name"
                    name="title"
                    defaultValue={this.props.data.title}
                    autoFocus
                  />
                </div>
                <div className="uk-margin">
                  <input
                    type="text"
                    className="uk-input uk-form-small"
                    placeholder="Schedule"
                    name="schedule"
                  />
                </div>

                <div className="uk-margin">
                  <input
                    type="submit"
                    value="save"
                    className="uk-button uk-button-small uk-button-primary uk-float-right"
                  />

                  {this.props.labels.map(l => (
                    <LabelToggleContainer
                      id={l.id}
                      key={l.id}
                      active={this.props.data.labels.includes(l.id)}
                      onClick={this.props.onChangeLabel}
                    />
                  ))}
                </div>
              </form>
            ) : (
              <div>
                <div className="uk-text-lead uk-text-truncate">
                  {this.props.data.title}
                  {this.props.data.interval !== null &&
                    <span className="uk-margin-left uk-text-muted" title="Recurring reminder" data-uk-icon="icon: future; ratio: .8" data-uk-tooltip />
                  }
                </div>
                <div className="uk-grid uk-flex uk-flex-between">
                  <div className="uk-flex uk-flex-middle">
                    <p className="uk-text-meta uk-margin-remove-top">
                      {moment(this.props.data.due).fromNow()}
                      {this.props.data.labels.map(id => (
                        <LabelContainer id={id} key={id} />
                      ))}
                    </p>
                  </div>
                  <div className="uk-flex-right uk-hidden@m">
                    <ul className="uk-navbar-nav">
                      <li><a href="#" title="Edit" data-uk-icon="icon: pencil" data-uk-tooltip onClick={this.onClickEdit} /></li>
                      <li><a href="#" title="Delete" data-uk-icon="icon: close" data-uk-tooltip onClick={this.props.onClickDelete} /></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="uk-flex uk-flex-middle uk-visible@m">
            <a
              href="#"
              className="re-more-icon uk-float-right uk-button"
              data-uk-icon="icon: more; ratio: .8" />
            <div className="uk-nav uk-dropdown-nav uk-padding-small" data-uk-dropdown="mode: click; pos: bottom-left">
              <ul className="uk-nav uk-nav-default">
                <li><a href="#" onClick={this.onClickEdit}><span className="uk-link-icon" data-uk-icon="icon: pencil" /> Edit</a></li>
                <li><a href="#" onClick={this.props.onClickDelete}><span className="uk-link-icon" data-uk-icon="icon: trash" /> Delete</a></li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    )
  }

  onClickEdit() {
    this.setState({ editing: !this.state.editing })
  }

  onClickSubmit(e) {
    // Hide form
    this.onClickEdit()

    // Update entry
    this.props.onChange(e)
  }
}

// TODO: abstract reminder proptypes
Entry.propTypes = {
  data: PropTypes.any.isRequired,
}

export default Entry
