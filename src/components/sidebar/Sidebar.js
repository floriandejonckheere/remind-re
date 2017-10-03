import React, { Component } from 'react'

import DateFilterList from 'components/sidebar/DateFilterList'
import LabelFilterListContainer from 'components/sidebar/LabelFilterListContainer'

class Sidebar extends Component {
  render() {
    return (
      <div className="uk-padding">
        <DateFilterList />
        <LabelFilterListContainer />
      </div>
    )
  }
}

export default Sidebar
