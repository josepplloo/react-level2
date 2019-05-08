import React, { Component, Fragment } from 'react';
import  {BrowserRouter as Router,
  Route, Switch} from "react-router-dom";

import Welcome from './Welcome/Welcome';

class App extends Component {

  welcome() {
    return (<Welcome />);
  }

  render() {
    return (
      <Router>
        <Fragment>
            <Switch>
              <Route exact path="/" render={() => this.welcome()}/>
            </Switch>
        </Fragment>      
      </Router>  
    );
  }
}

export default App;
