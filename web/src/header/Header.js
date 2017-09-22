import React, { Component } from 'react'

import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className="Header uk-background-primary uk-light">
        <div className="uk-grid uk-flex-center">
          <div className="uk-width-1-2@l">
            <nav className="uk-navbar ">
              <div className="uk-navbar-item">
                <a href="/" className="uk-logo">LOGO</a>
              </div>
              <div className="uk-navbar-item uk-width-expand">
                <input type="text" className="uk-input" placeholder="Add new reminder..." />
              </div>
              <div className="uk-navbar-item uk-navbar-right">
                <ul className="uk-iconnav">
                  <li><a href="#" className="uk-button" data-uk-icon="icon: check" /></li>
                  <li><a href="#" className="uk-button" data-uk-icon="icon: cog" /></li>
                  <li><a href="#" className="uk-button" data-uk-icon="icon: sign-out" /></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
