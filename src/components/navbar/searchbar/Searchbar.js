import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Searchbar.css'

class Searchbar extends Component {
  render() {
    return (
      <div className="uk-width-1-1 uk-light">
        <input
          type="search"
          className="uk-input uk-search-input re-searchbar"
          placeholder="Quick search"
          value={this.props.filter}
          onChange={this.props.onChange}
        />
      </div>
    )
  }
}

Searchbar.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default Searchbar
