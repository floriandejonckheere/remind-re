import React, { Component } from 'react'

import './App.css'

import Sidebar from 'components/sidebar/Sidebar'
import Navbar from 'components/navbar/Navbar'
import ListContainer from 'components/list/ListContainer'

import AlertModalContainer from 'components/modal/AlertModalContainer'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      textFilter: '',
      dateFilter: 'all reminders',
    }

    this.handleFilterTextInput = this.handleFilterTextInput.bind(this)
    this.handleFilterDateInput = this.handleFilterDateInput.bind(this)
  }

  handleFilterTextInput(textFilter) {
    this.setState({
      textFilter: textFilter
    })
  }

  handleFilterDateInput(dateFilter) {
    this.setState({
      textFilter: '',
      dateFilter: dateFilter
    })
  }

  render() {
    return (
      <div>
        <Navbar
          textFilter={this.state.textFilter}
          onFilterTextInput={this.handleFilterTextInput}
        />

        <div className="re-app-content uk-grid uk-flex-center uk-grid-collapse">
          <div className="uk-width-1-6@l uk-width-1-4@m">
            <Sidebar />
          </div>
          <div className="uk-width-1-3@l uk-width-1-2@m">
            <ListContainer />
          </div>
        </div>

        <AlertModalContainer />
      </div>
    );
  }
}

export default App
