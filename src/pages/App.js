import React, { Component, Fragment } from 'react';
import  {BrowserRouter as Router,
  Route, Switch, Redirect} from "react-router-dom";

import Welcome from './Welcome/Welcome';
import Products from './Products/Products';
import Login from './Login/Login'
import {login, getUser} from '../utils/auth'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: getUser(),
    }
  }

  handleAutentication(userName) {
    this.setState({userName});
    login(userName)
  }

  welcome() {
    if(this.state.userName) {
      return (<Products />);
    }else {
      return (<Welcome />);
    }  }

  selectAPage() {
    if(this.state.userName) {
      return (<Products 
        onAutenticated={(user) => this.handleAutentication(user)}
      />);
    }else {
      return (<Welcome />);
    }
    
  }

  login() {
    return (<Login
     onAutenticated={(user) => this.handleAutentication(user)}
     />);
  }

  render() {
    return (
      <Router>
        <Fragment>
            <Switch>
              <Route exact path="/" render={() => this.selectAPage()}/>
              <Route path="/productos" render={() => this.selectAPage()}/>
              <Route path="/login" render={() => (this.state.userName ?
                <Redirect to="/productos" />
                :this.login(this.state) )}/>
              <Route render={() => <h1>404 Page not found</h1>}/>
            </Switch>
        </Fragment>      
      </Router>  
    );
  }
}

export default App;
