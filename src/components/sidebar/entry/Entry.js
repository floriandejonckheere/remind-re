import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Entry.css'

class Entry extends Component {
  constructor(props) {
    super(props)

    this.state = { editing: false }
    this.onClickEdit = this.onClickEdit.bind(this)
  }

  render() {
    return (
      <li className={this.props.active ? 're-sidebar-label-entry uk-active' : 're-sidebar-label-entry'}>
        {(this.props.updatable && !this.state.editing) && (
          <div>
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
        )}
        {this.state.editing ? (
          <form onSubmit={this.onClickEdit}>
            <input
              type="text"
              className="uk-input uk-form-small"
              value={this.props.children}
              onChange={this.props.onChange}
              autoFocus
            />
          </form>
        ) : (
          <a
            href="#"
            className="uk-margin"
            onClick={this.props.onClick}>
            {this.props.children}
          </a>
        )}
      </li>
    )
  }

  onClickEdit() {
    this.setState({ editing: !this.state.editing })
  }
}

Entry.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  updatable: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Entry
