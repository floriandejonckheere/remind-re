import React, { Component } from 'react'

import * as Constants from 'actions/Constants'
import EntryContainer from 'components/sidebar/entry/EntryContainer'

class LabelFilterList extends Component {
  render() {
    return (
      <ul className="uk-nav uk-nav-default uk-margin-large-top">
        {this.props.labels.map(label => (
          <EntryContainer filter={`FILTER_LABEL_${label.id}`} key={label.id} filterType={Constants.LABEL_FILTER}>
            {label.title}
          </EntryContainer>
        ))}
        <li>
          <a href="#" className="uk-text-primary">
            add label
          </a>
        </li>
      </ul>
    )
  }
}

export default LabelFilterList
