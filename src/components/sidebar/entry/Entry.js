import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Entry extends Component {
  render() {
    return (
      <li className={this.props.active ? 'uk-active' : ''}>
        <a
          href="#"
          className="uk-margin"
          onClick={e => {e.preventDefault(); this.props.onClick()}}>
          {this.props.children}
        </a>
      </li>
    )
  }
}

Entry.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Entry
