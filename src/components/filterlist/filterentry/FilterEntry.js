import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './FilterEntry.css'

class FilterEntry extends Component {
  constructor(props) {
    super(props)

    this.state = { editing: false }
    this.onClickEdit = this.onClickEdit.bind(this)
  }

  render() {
    return (
      <li className={`re-filter-entry ${this.props.active ? 'uk-active' : ''}`}>
        {(this.props.updatable && !this.state.editing) && (
          <div>
            <a
              className="re-more-icon uk-float-right uk-button"
              data-uk-icon="icon: more; ratio: .8" />
            <div className="uk-nav uk-dropdown-nav uk-padding-small" data-uk-dropdown="mode: click; pos: bottom-left">
              <ul className="uk-nav uk-nav-default">
                <li><a onClick={this.onClickEdit}><span className="uk-link-icon" data-uk-icon="icon: pencil" /> Edit</a></li>
                <li><a onClick={this.props.onClickDelete}><span className="uk-link-icon" data-uk-icon="icon: trash" /> Delete</a></li>
              </ul>
            </div>
          </div>
        )}
        {this.state.editing ? (
          <form onSubmit={this.onClickEdit}>
            <input
              type="text"
              className="uk-input uk-form-small"
              placeholder="Label name"
              value={this.props.children}
              onChange={this.props.onChange}
              autoFocus
            />
          </form>
        ) : (
          <a
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

FilterEntry.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
  updatable: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default FilterEntry
