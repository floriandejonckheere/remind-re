import React, { Component } from 'react'
import './App.css'

import Sidebar from '../sidebar/Sidebar'
import Header from '../header/Header'
import Reminders from '../reminders/Reminders'
import Calendar from '../calendar/Calendar'

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
            <Reminders />
          </div>
        </div>
      </div>
    );
  }
}

export default App
