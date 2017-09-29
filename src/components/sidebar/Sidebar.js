import React, { Component } from 'react'

import FilterList from 'components/sidebar/FilterList'
import LabelList from 'components/sidebar/LabelList'

class Sidebar extends Component {
  render() {
    return (
      <div className="uk-padding">
        <ul className="uk-nav uk-nav-default">
          <FilterList />
          <LabelList />
        </ul>
      </div>
    )
  }
}

export default Sidebar
