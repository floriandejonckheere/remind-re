import React, { Component } from 'react'

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
            <a href="#" className="uk-button uk-icon" uk-icon="icon: sign-in">sign in</a>
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
