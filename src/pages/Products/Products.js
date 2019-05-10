import React, { Component } from 'react';

export default class Products extends Component {

  handleLogout(event) {
    this.props.onAutenticated('');
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button id="logout" type="button"
          onClick={(event) => this.handleLogout(event)}>
          Logout
          </button>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}