import React from 'react';
import { CartProvider } from './context/CartContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <h1>Simple E-Commerce App</h1>
        <div className="container">
          <ProductList />
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
};

export default App;