import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import App from './app/App';
import Landing from './landing/Landing';

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/landing" component={Landing}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AppRouter;
