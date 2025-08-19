import React from 'react';
import { useCart } from '../context/CartContext';

const products = [
  { id: 1, name: 'Laptop', price: 999, image: '/images/laptop.jpg' },
  { id: 2, name: 'Phone', price: 499, image: '/images/phone.jpg' },
  { id: 3, name: 'Headphones', price: 99, image: '/images/headphones.jpg' },
];

const ProductList = () => {
  const { addToCart } = useCart();

  return (
    <div className="product-list">
      <h2>Products</h2>
      <ul className="product-grid">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
              <span className="product-name">{product.name}</span>
              <span className="product-price">${product.price}</span>
            </div>
            <button onClick={() => addToCart(product)} className="add-to-cart-btn">
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;