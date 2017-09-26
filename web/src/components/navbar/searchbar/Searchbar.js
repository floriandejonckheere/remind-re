import React, { Component } from 'react'

import './Searchbar.css'

class Searchbar extends Component {
  render() {
    return (
      <div className="re-searchbar uk-width-expand">
        <input type="search" className="uk-input uk-search-input" placeholder="Quick search" />
      </div>
    )
  }
}

export default Searchbar
