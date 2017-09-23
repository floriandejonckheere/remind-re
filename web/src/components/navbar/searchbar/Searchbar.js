import React, { Component } from 'react'

import './Searchbar.css'

class Searchbar extends Component {
  render() {
    return (
      <div className="Searchbar uk-width-expand">
        <input type="text" className="uk-input" placeholder="Quick search" />
      </div>
    )
  }
}

export default Searchbar
