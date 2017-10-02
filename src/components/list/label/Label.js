import React, { Component } from 'react'

import './Label.css'

class Label extends Component {
  render() {
    return (
      <span className="uk-label re-label uk-margin-small-left">{this.props.title}</span>
    )
  }
}

export default Label
