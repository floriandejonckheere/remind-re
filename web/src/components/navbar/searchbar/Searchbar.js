import React, { Component } from 'react'

import './Searchbar.css'

class Searchbar extends Component {
  constructor(props) {
    super(props)

    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this)
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value)
  }

  render() {
    return (
      <div className="re-searchbar uk-width-expand">
        <input
          type="search"
          className="uk-input uk-search-input"
          placeholder="Quick search"
          value={this.props.filter}
          onChange={this.handleFilterTextInputChange}
        />
      </div>
    )
  }
}

export default Searchbar
