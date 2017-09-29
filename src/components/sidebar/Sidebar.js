import React, { Component } from 'react'

import DateFilterList from 'components/sidebar/DateFilterList'
import LabelList from 'components/sidebar/LabelList'

class Sidebar extends Component {
  render() {
    return (
      <div className="uk-padding">
        <ul className="uk-nav uk-nav-default">
          <DateFilterList />
          <LabelList />
        </ul>
      </div>
    )
  }
}

export default Sidebar
