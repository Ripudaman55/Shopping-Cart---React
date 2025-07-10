
import "./App.css";
import { useState } from "react";
import React from "react";

const NoOfItems = 0;

function App() {
  const [cartItems, setCartItems] = useState(NoOfItems);
  const addToCart = () => {
    setCartItems(cartItems + 1);
  };
  const removeFromCart = () => {
    if (cartItems > 0) {
      setCartItems(cartItems - 1);
    }
  };
  // setCartItems(NoOfItems);

  return (
    <div className="App">
      <header className="Main-header">
        <div className="App-header">
          <p className="title">Shopping Cart </p>
          <div className="cart-logo">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
              className="App-logo"
              alt="logo"
            />
            <span className="cart-items">{cartItems}</span>
          </div>
          </div>



          {/* <div className="App-content">
            <div className="cart-items">
              <button className="add-to-cart" onClick={addToCart}>
                Add to Cart
              </button>
              <button className="remove-from-cart" onClick={removeFromCart}>
                Remove from Cart
              </button>
            </div>
        </div> */}
      </header>
    </div>
  );
}

export default App;
