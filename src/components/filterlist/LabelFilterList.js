import React, { Component } from 'react'

import * as Constants from 'actions/Constants'
import FilterEntryContainer from 'components/filterlist/filterentry/FilterEntryContainer'

class LabelFilterList extends Component {
  render() {
    return (
      <ul className="uk-nav uk-nav-default uk-margin-large-top">
        {this.props.labels.map(label => (
          <FilterEntryContainer
            filter={label.id}
            key={label.id}
            filterType={Constants.LABEL_FILTER}
            updatable>
              {label.title}
          </FilterEntryContainer>
        ))}
        <li>
          <a
            className="uk-text-primary"
            onClick={this.props.onClickAdd}>
              add label
          </a>
        </li>
      </ul>
    )
  }
}

export default LabelFilterList