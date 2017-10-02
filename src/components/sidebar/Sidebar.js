import React, { Component } from 'react'

import DateFilterList from 'components/sidebar/DateFilterList'
import LabelFilterList from 'components/sidebar/LabelFilterList'

class Sidebar extends Component {
  render() {
    return (
      <div className="uk-padding">
        <DateFilterList />
        <LabelFilterList
          labels={this.props.labels}
          onClickAdd={this.props.onClickAdd}
        />
      </div>
    )
  }
}

export default Sidebar
