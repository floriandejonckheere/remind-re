import React, { Component } from 'react'

import './Sidebar.css'

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar uk-padding">
        <ul className="uk-nav uk-nav-default">
          <li className="uk-margin uk-active"><a href="#">today</a></li>
          <li className="uk-margin"><a href="#">tomorrow</a></li>
          <li className="uk-margin"><a href="#">this week</a></li>
          <li className="uk-margin uk-margin-large-top"><a href="#">settings</a></li>
        </ul>
      </div>
    )
  }
}

export default Sidebar
