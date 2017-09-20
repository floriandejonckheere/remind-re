import React, { Component } from 'react'
import './App.css'

import Sidebar from '../sidebar/Sidebar'
import Header from '../header/Header'
import Reminders from '../reminders/Reminders'
import Calendar from '../calendar/Calendar'

class App extends Component {
  render() {
    return (
      <div className="App uk-grid uk-grid-collapse">
        <div className="uk-width-1-4">
          <Sidebar />
        </div>
        <div className="uk-width-expand">
          <Header />

          <div className="uk-grid uk-grid-collapse">
            <div className="uk-width-expand">
              <Reminders />
            </div>
            <div className="uk-width-1-6@l">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App
