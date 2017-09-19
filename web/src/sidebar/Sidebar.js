import React, { Component } from 'react'

import './Sidebar.css'

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
        <div id="sidebar" uk-offcanvas="overlay: true">
          <div className="uk-offcanvas-bar">
            <a href="#" className="uk-button uk-offcanvas-close" type="button" uk-close>close</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar
