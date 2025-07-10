import "./App.css";
import { useEffect, useState } from "react";
import React from "react";
// import products from './data/products';



function App() {
  const [cartItems, setCartItems] = useState([]);
  const [ListOfProducts, setProduct] = useState([]);
  const [lastcart, setlastCart] = useState(cartItems)
  function addProduct(product){
    // Array list = cartItems;
    lastcart.push(product)
    setlastCart(lastcart)
    setCartItems(lastcart)
    console.log('count', lastcart)
    console.log('count', cartItems)
  }
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProduct(data);
      });
  }, []);
  // .then(data => setProduct(data));
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
            <span className="cart-items">{cartItems.length}</span>
          </div>
        </div>

        {/* <div className="list"> */}
        <div className="listing">
          {ListOfProducts?.map((product) => (
            <div className="items1">
              <img className="product-image" src={product.image} alt="item" />
              <h4>{product.title}</h4> <h4>{product.category}</h4>
              <h5>${product.price}</h5>
              <h6>
                {product.description.split(" ").length > 30
                  ? product.description.split(" ").slice(0, 30).join(" ") +
                    "..."
                  : product.description}
              </h6>
              <button onClick={addProduct(product)}>Add to cart </button>
            </div>
          ))}

          {/* </div> */}
        </div>
      </header>
    </div>
  );
}

export default App;
