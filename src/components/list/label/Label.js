import React, { Component } from 'react'

import './Label.css'

class Label extends Component {
  render() {
    return (
      <span className="re-label uk-label uk-margin-small-left">{this.props.data.title}</span>
    )
  }
}

export default Label
