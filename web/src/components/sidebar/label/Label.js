import React, { Component } from 'react'

class Label extends Component {
  render() {
    return (
      <li><a href="#" className="uk-margin">{ this.props.data.title }</a></li>
    )
  }
}

export default Label
