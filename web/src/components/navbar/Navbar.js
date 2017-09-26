import React, { Component } from 'react'

import Searchbar from 'components/navbar/searchbar/Searchbar'

import './Navbar.css'

import logo from './logo.svg'

class Navbar extends Component {
  render() {
    return (
      <div className="re-navbar uk-background-primary uk-light">
        <div className="uk-grid uk-flex-center">
          <div className="uk-width-1-2@l">
            <nav className="uk-navbar ">
              <div className="uk-navbar-item re-navbar-item">
                <a href="/" className="uk-logo">
                  <img src={logo} alt="logo" className="re-logo"/>
                </a>
              </div>
              <div className="uk-navbar-item re-navbar-item uk-width-expand">
                <Searchbar />
              </div>
              <div className="uk-navbar-item re-navbar-item uk-navbar-right">
                <ul className="uk-iconnav">
                  <li><a href="#" className="uk-button" data-uk-icon="icon: plus" title="Add a reminder" data-uk-tooltip /></li>
                  <li><a href="#" className="uk-button" data-uk-icon="icon: cog" title="Settings" data-uk-tooltip /></li>
                  <div className="uk-nav uk-dropdown-nav uk-padding-small" data-uk-dropdown="pos: bottom-center; boundary: .uk-iconnav; boundary-align: true">
                    <ul className="uk-nav uk-navbar-dropdown-nav">
                      <li><a href="#">Help &amp; support</a></li>
                      <li><a href="#">Settings</a></li>
                      <li className="uk-nav-divider" />
                      <li><a href="#">Sign out</a></li>
                    </ul>
                  </div>
                  <li><a href="#" className="uk-button" data-uk-icon="icon: sign-out" title="Sign out" data-uk-tooltip /></li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
