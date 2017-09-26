import React, { Component } from 'react'

class Entry extends Component {
  constructor(props) {
    super(props)

    this.handleFilterDateInputChange = this.handleFilterDateInputChange.bind(this)
  }

  handleFilterDateInputChange(e) {
    e.preventDefault()
    this.props.onFilterDateInput(this.props.title)
  }

  render() {
    return (
      <li className={ this.props.title === this.props.dateFilter ? 'uk-active' : '' }>
        <a href="#" className="uk-margin" onClick={this.handleFilterDateInputChange}>
          {this.props.title}
        </a>
      </li>
    )
  }
}

export default Entry
