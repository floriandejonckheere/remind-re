import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Label.css'

class Label extends Component {
  render() {
    return (
      <a
        className="uk-margin"
        onClick={() => this.props.onClick(this.props.id)}>
        <span className={`re-label uk-label ${this.props.active ? 'uk-background-secondary' : 'uk-background-muted'} uk-margin-small-left no-drag`}>{this.props.data.title}</span>
      </a>
    )
  }
}

Label.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Label
