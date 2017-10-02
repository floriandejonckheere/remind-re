import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Label.css'

class Label extends Component {
  render() {
    console.log(this.props)
    return (
      <a
        href="#"
        className="uk-margin"
        onClick={this.props.onClick}>
        <span className="re-label uk-label uk-background-secondary uk-margin-small-left">{this.props.data.title}</span>
      </a>
    )
  }
}

Label.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Label
