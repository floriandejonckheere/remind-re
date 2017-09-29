import React, { Component } from 'react'

import EntryContainer from 'components/sidebar/entry/EntryContainer'

class LabelFilterList extends Component {
  render() {
    return (
      <div className="uk-margin-large-top">
        {this.props.labels.map(label => (
          <EntryContainer filter={`FILTER_LABEL_${label.id}`} key={label.id}>
            {label.title}
          </EntryContainer>
        ))}
        <li>
          <a href="#" className="uk-text-primary">
            add label
          </a>
        </li>
      </div>
    )
  }
}

export default LabelFilterList
