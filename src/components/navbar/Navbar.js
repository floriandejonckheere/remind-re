import React, { Component } from 'react'

import SearchbarContainer from 'components/navbar/searchbar/SearchbarContainer'

import './Navbar.css'

import logo from './logo.svg'

class Navbar extends Component {
  render() {
    return (
      <div className="re-navbar uk-background-primary uk-light">
        <div className="uk-grid uk-flex-center uk-grid-collapse">
          <div className="uk-navbar-item re-navbar-item uk-flex-center uk-flex-left@s uk-width-1-6@l uk-width-1-4@m uk-width-1-4">
            <a href="#" data-uk-toggle="target: #re-nav-offcanvas" className="uk-logo uk-hidden@s">
              <img src={logo} alt="logo" className="re-logo" />
            </a>
            <a href="/" className="uk-logo uk-visible@s">
              <img src={logo} alt="logo" className="re-logo"/>
            </a>
          </div>
          <div className="uk-navbar-item re-navbar-item uk-width-1-3@l uk-width-1-2@m uk-width-3-4 uk-visible@s">
            <SearchbarContainer />
          </div>
        </div>

        <div id="re-nav-offcanvas" data-uk-offcanvas="overlay: true">
          <div className="uk-offcanvas-bar uk-background-primary">
            <button className="uk-offcanvas-close uk-close uk-icon uk-light" type="button" data-uk-close />
            <ul className="uk-nav uk-nav-default">
              <li className="uk-nav-header">Remindre</li>
              <div className="">
                <SearchbarContainer />
              </div>
              <li className="uk-nav-divider" />
              <li className="uk-nav-header">Settings</li>
              <li><a href="#">Help &amp; support</a></li>
              <li><a href="#">Settings</a></li>
              <li className="uk-nav-divider" />
              <li><a href="#">Sign out</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar
