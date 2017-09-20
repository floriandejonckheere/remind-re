import React, { Component } from 'react'

import './Sidebar.css'

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar uk-light uk-padding">
        <nav className="uk-nav uk-nav-default uk-iconnav">
          <div className="uk-nav-item uk-navbar-left">
            <a href="#" className="uk-button" data-uk-icon="icon: user">profile</a>
          </div>
          <div className="uk-nav-item uk-navbar-right">
            <a href="#" className="uk-button" data-uk-icon="icon: cog">settings</a>
          </div>
        </nav>
      </div>
    )
  }
}

export default Sidebar
