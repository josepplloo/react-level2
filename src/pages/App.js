import React, { Component, Fragment } from 'react';
import  {BrowserRouter as Router,
  Route, Switch} from "react-router-dom";

import Welcome from './Welcome/Welcome';
import Products from './Products/Products';
import Login from './Login/Login'

class App extends Component {

  welcome() {
    return (<Welcome />);
  }

  products() {
    return (<Products />);
  }

  login() {
    return (<Login />);
  }

  render() {
    return (
      <Router>
        <Fragment>
            <Switch>
              <Route exact path="/" render={() => this.welcome()}/>
              <Route path="/products" render={() => this.products()}/>
              <Route path="/login" render={() => this.login(this.state)}/>
              <Route render={() => <h1>404 Page not found</h1>}/>
            </Switch>
        </Fragment>      
      </Router>  
    );
  }
}

export default App;
