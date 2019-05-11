import axios from 'axios'
import React from 'react';

function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return (<Component {...props} />);
    return (<p>Be Hold, fetching data may take some time :)</p>);
  }
}

const List = props => {
  const { products } = props;
  
  if (!products) return null;
  if (!products.length) return (<p>No data, sorry</p>)
  return (
    <ul>
      {
        products.map(product => {
          return (
            <li key={product.id}>{product.name}</li>
          )
         })
       }
    </ul>
  )
}

const fetchProducts = async () => {
  try {
    return await axios.get('http://localhost:3000/products');
  } catch(error) {
    console.error(error);
  }
}

const getProducts = async () => {
  const products = await fetchProducts()
  if (products.data) {
    return products.data;
  }
}

export {getProducts, WithLoading, List}