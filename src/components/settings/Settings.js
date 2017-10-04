import React, { Component } from 'react'

class Settings extends Component {
  render() {
    return (
      <div>
        <div className="uk-light">
          <a className="uk-button" data-uk-icon="icon: cog" />
        </div>
        <div data-uk-dropdown="mode: click">
          <div className="uk-margin-top">
            <input type="checkbox" className="uk-checkbox" id="settings-notifications" /> <label htmlFor="settings-notifications">Enable web notifications</label>
          </div>
          <div className="uk-margin-top">
            <input type="checkbox" className="uk-checkbox" id="settings-storage" /> <label htmlFor="settings-storage">Enable local storage</label>
          </div>
          <div className="uk-margin-top">
            <a className="uk-button uk-button-default uk-button-small uk-width-1-1">Reset store</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Settings
