import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppLogin from './AppLogin';
import FormA from './FormA';
import FormB from './FormB';
import FormC from './FormC';
import { Header } from './component/Header.js'
import './css/App.css'

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const childProps = {
    };
    return (
      <div>
        <Header />

        <Switch>
          <Route path="/login" component={AppLogin} props={childProps} />
          <Route path="/formA" component={FormA} props={childProps} />
          <Route path="/formB" component={FormB} props={childProps} />
          <Route path="/formC" component={FormC} props={childProps} />
        </Switch>
      </div >
    );
  }
}

export default App;
