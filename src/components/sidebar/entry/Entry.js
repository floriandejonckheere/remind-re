import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Entry.css'

class Entry extends Component {
  render() {
    return (
      <li className={this.props.active ? 're-sidebar-label-entry uk-active' : 're-sidebar-label-entry'}>
        {this.props.updatable && (
          <div>
            <a
              href="#"
              className="re-delete-icon uk-float-right uk-button"
              data-uk-icon="icon: more; ratio: .8" />
            <div className="uk-nav uk-dropdown-nav uk-padding-small" data-uk-dropdown="mode: click; pos: bottom-left">
              <ul className="uk-nav uk-nav-default">
                <li><a href="#"><span className="uk-link-icon" data-uk-icon="icon: pencil" /> Edit</a></li>
                <li><a href="#" onClick={this.props.onClickDelete}><span className="uk-link-icon" data-uk-icon="icon: trash" /> Delete</a></li>
              </ul>
            </div>
          </div>
        )}
        <a
          href="#"
          className="uk-margin"
          onClick={this.props.onClick}>
          {this.props.children}
        </a>
      </li>
    )
  }
}

Entry.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  updatable: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
}

export default Entry
