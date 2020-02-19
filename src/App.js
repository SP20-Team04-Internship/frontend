import React, { Component } from 'react'
import './App.css';
import Home from './screens/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Page from './shared/Page';
// import ColorScheme from './shared/ColorScheme';
import Main from './screens/Main';
// import Survey from './screens/Survey';

  class App extends Component {
    render() {
      return (
        <BrowserRouter>
          <Page>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/modules" exact component={Main}/>
              <Route component={null} /> { /* This is a catch-all route */ }
            </Switch>
          </Page>
        </BrowserRouter>
      )
    }
  }

export default App;