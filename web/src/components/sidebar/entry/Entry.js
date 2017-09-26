import React, { Component } from 'react'

class Entry extends Component {
  render() {
    return (
      <li className={ this.props.active ? 'uk-active' : '' }>
        <a href="#" className="uk-margin">
          { this.props.title }
        </a>
      </li>
    )
  }
}

export default Entry
