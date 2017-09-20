import React, { Component } from 'react'
import Icons from 'react-uikit-icons'

import './Header.scss'

class Header extends Component {
  render() {
    return (
      <div className="Header uk-background-primary uk-padding uk-light">
        <nav className="Header uk-navbar uk-navbar-container uk-navbar-transparent">
          <div className="uk-navbar-left">
            <a href="/" className="uk-navbar-item uk-logo">remindre</a>
          </div>

          <div className="uk-navbar-right">
            <ul className="uk-iconnav">
              <li><a href="#" className="uk-button" data-uk-icon="icon: grid">grid</a></li>
              <li><a href="#" className="uk-button" data-uk-icon="icon: list">list</a></li>
              <li><a href="#" className="uk-button" data-uk-icon="icon: sign out">sign out</a></li>
            </ul>
          </div>
        </nav>

        <div className="uk-margin-top">
          <input type="text" className="uk-input" placeholder="Add new reminder..." />
        </div>
      </div>
    )
  }
}

export default Header
