import React, { Component } from 'react'

import './App.css'

import DateFilterList from 'components/filterlist/DateFilterList'
import LabelFilterListContainer from 'components/filterlist/LabelFilterListContainer'
import Navbar from 'components/navbar/Navbar'
import ListContainer from 'components/list/ListContainer'

import AlertModalContainer from 'components/modal/AlertModalContainer'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="re-app-content uk-grid uk-flex-center uk-grid-collapse">
          <div className="uk-width-1-6@l uk-width-1-4@m uk-padding">
            <DateFilterList />
            <LabelFilterListContainer />
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
