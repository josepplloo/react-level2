import React, { Component } from 'react';

import {getProducts} from '../../utils/products'

export default class Products extends Component {

  handleLogout() {
    this.props.onAutenticated('');
  }

  componentDidMount() {
    const products = getProducts();
    console.log(products);
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <button id="logout" type="button"
          onClick={() => this.handleLogout()}>
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