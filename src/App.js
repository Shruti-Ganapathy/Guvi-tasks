import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      alert('Item already added to the cart');
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <Navbar cartCount={cart.length} onCartClick={() => setIsModalOpen(true)} />
      <ProductList addToCart={addToCart} />
      {isModalOpen && (
        <CartModal
          cart={cart}
          onClose={() => setIsModalOpen(false)}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
}

export default App;