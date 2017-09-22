import React, { Component } from 'react'
import './App.css'

import Sidebar from 'components/sidebar/Sidebar'
import Header from 'components/header/Header'
import ReminderList from 'components/reminderlist/ReminderList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />

        <div className="Content uk-grid uk-flex-center uk-grid-collapse">
          <div className="uk-width-1-6@l">
            <Sidebar />
          </div>
          <div className="uk-width-1-3@l">
            <ReminderList />
          </div>
        </div>
      </div>
    );
  }
}

export default App
