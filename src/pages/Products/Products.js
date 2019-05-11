import React, { Component } from 'react';

import {getProducts, WithLoading, List} from '../../utils/products'

const ListWithLoading = WithLoading(List);

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      products: null,
    }
  }

  handleLogout() {
    this.props.onAutenticated('');
  }

  componentDidMount() {
    this.setState({loading:true})    
    getProducts().then(data => data)
    .then(products => {
      this.setState({ loading: false, products: products });
    });
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
        <section>
        <ListWithLoading isLoading={this.state.loading} 
        products={this.state.products} />
        </section>
      </div>
    );
  }
}