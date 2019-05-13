import React, { Component, Fragment } from 'react';

import {getProducts, WithLoading, List} from '../../utils/products'
import {getUser} from '../../utils/auth'

const ListWithLoading = WithLoading(List);

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      products: null,
    }
  }
  //TODO
  //use redux

  handleLogout() {
    this.props.onAutenticated('');
  }


  handleSearchInput(event) {
    let updatedList = this.state.products;
  
    updatedList = this.state.products.filter(function(product) {
      return product.name.toLowerCase()
        .search(event.target.value.toLowerCase()) !== -1;
    });

    this.setState({products: updatedList});

    if (event.target.value === ''){
      this.componentDidMount();
    }
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
      <Fragment>
        <header className="product-header">
          <h1>Hola {getUser()}!</h1>
          <button id="logout" type="button"
          onClick={() => this.handleLogout()}
          className="product-header__logout-buton">
          Logout
          </button>
        </header>
        <section className="product-container">
        <input type="text" placeholder="Search" 
        onChange={(event) => this.handleSearchInput(event)}
        value = {this.state.filterText}/>
        <ListWithLoading isLoading={this.state.loading} 
        products={this.state.products} />
        </section>
      </Fragment>
    );
  }
}