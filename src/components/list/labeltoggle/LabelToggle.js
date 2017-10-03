import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './LabelToggle.css'

class LabelToggle extends Component {
  render() {
    return (
      <a
        href="#"
        className="uk-margin">
        <span className="re-label uk-label uk-background-secondary uk-margin-small-left">{this.props.data.title}</span>
      </a>
    )
  }
}

LabelToggle.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default LabelToggle
