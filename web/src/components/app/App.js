import React, { Component } from 'react'
import './App.css'

import Sidebar from 'components/sidebar/Sidebar'
import Navbar from 'components/navbar/Navbar'
import ReminderList from 'components/reminderlist/ReminderList'

import reminders from 'data/reminders'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="Content uk-grid uk-flex-center uk-grid-collapse">
          <div className="uk-width-1-6@l">
            <Sidebar />
          </div>
          <div className="uk-width-1-3@l">
            <ReminderList
              reminders={reminders}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App
