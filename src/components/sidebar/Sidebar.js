import React, { Component } from 'react'

import DateFilterList from 'components/sidebar/DateFilterList'
import LabelFilterList from 'components/sidebar/LabelFilterList'

class Sidebar extends Component {
  render() {
    return (
      <div className="uk-padding">
        <ul className="uk-nav uk-nav-default">
          <DateFilterList />
          <LabelFilterList />
        </ul>
      </div>
    )
  }
}

export default Sidebar
