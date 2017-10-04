import React, { Component } from 'react'

import './App.css'

import Sidebar from 'components/sidebar/Sidebar'
import Navbar from 'components/navbar/Navbar'
import ListContainer from 'components/list/ListContainer'

import AddModal from 'components/modal/reminders/AddModal'
import DeleteModal from 'components/modal/reminders/DeleteModal'
import AlertModal from 'components/modal/AlertModal'

import reminderModalHOC from 'components/modal/reminders/ReminderModalHOC'

const AddModalHOC = reminderModalHOC(AddModal)
const DeleteModalHOC = reminderModalHOC(DeleteModal)

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

        <AddModalHOC />
        <DeleteModalHOC />
        <AlertModal />
      </div>
    );
  }
}

export default App
