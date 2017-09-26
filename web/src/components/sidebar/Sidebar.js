import React, { Component } from 'react'

import Label from 'components/sidebar/label/Label'

class Sidebar extends Component {
  render() {
    let rows = []

    this.props.labels.forEach((label) => {
      rows.push(
        <Label
          data={label}
          key={label.id}
        />
      )
    })

    return (
      <div className="Sidebar uk-padding">
        <ul className="uk-nav uk-nav-default">
          <li className="uk-margin uk-active"><a href="#">today</a></li>
          <li className="uk-margin"><a href="#">tomorrow</a></li>
          <li className="uk-margin"><a href="#">this week</a></li>
          <li className="uk-margin-large-top" />
          { rows }
          <li>
            <a href="#" className="uk-text-primary">
              add label
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Sidebar
