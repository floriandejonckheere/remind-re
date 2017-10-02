import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './Searchbar.css'

class Searchbar extends Component {
  render() {
    return (
      <input
        type="search"
        className="uk-input uk-search-input re-searchbar"
        placeholder="Quick search"
        value={this.props.filter}
        onChange={this.props.onChange}
      />
    )
  }
}

Searchbar.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default Searchbar
