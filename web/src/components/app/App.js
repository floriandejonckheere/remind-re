import React, { Component } from 'react'
import './App.css'

import Sidebar from 'components/sidebar/Sidebar'
import Navbar from 'components/navbar/Navbar'
import ReminderList from 'components/reminderlist/ReminderList'

import reminders from 'data/reminders'
import labels from 'data/labels'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="re-app-content uk-grid uk-flex-center uk-grid-collapse">
          <div className="uk-width-1-6@l uk-width-1-4@m">
            <Sidebar
              labels={labels}
            />
          </div>
          <div className="uk-width-1-3@l uk-width-1-2@m">
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
