import {useState, useEffect } from "react";
import productsData from "./Data/products.js";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart.jsx";
import Modal from "./components/Modal.jsx";
import "./App.css";

function App() {
const [cart, setCart] = useState (() => {
  const savedCart = localStorage.getItem("cart");
  return savedCart ? JSON.parse(savedCart) :[]
});
const [showModal, setShowModal] = useState(false);
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);
function handleAddToCart(product) {
  setCart((prevCard) => {
    const existingItem = prevCard.find((item) => item.name === product.name);
    if (existingItem) {
      return prevCard.map((item) => item.name === product.name ?
        {...item, quantity: item.quantity + 1} : item);
    } 
    return [...prevCard,
        { name: product.name,
        price:product.price,
        image: product.image.thumbnail,
        quantity: 1,
      }
    ];
  });
  }

  function handleIncrease(productName) {
    setCart((prevCart) => 
      prevCart.map((item) =>
    item.name === productName ? {...item, quantity:item.quantity+1} :item )
  );
  }

  function handleDecrease(productName) {
    setCart((prevCart) =>{
      const item = prevCart.find((item) => item.name === productName);
      if (item.quantity === 1){
        return prevCart.filter((item) => item.name !== productName);
      }
      return prevCart.map((item) =>
        item.name === productName ? {...item, quantity: item.quantity - 1} : item
      );
    });
  }

  function handleRemove(productName) {
        setCart((prevCart) => prevCart.filter((item) => item.name !== productName));
  }
  function handleConfirmOrder() {
    setShowModal(true);
  }
  function handleStartNewOrder() {
    setCart([]);
    setShowModal(false);
  }
  console.log(cart);
  return (
    <div className="app">
      <h1>Desserts</h1>
      <div className="product-grid">
        {productsData.map((product) => (
          <ProductCard key={product.name} product={product}
          cart={cart}
           onAddToCart={handleAddToCart}
           onIncrease={handleIncrease}
           onDecrease={handleDecrease}
         />
        ))}
      </div>
      <Cart cart={cart} onRemove={handleRemove} onConfirmOrder={handleConfirmOrder} />
      {showModal && (
        <Modal cart={cart} onStartNewOrder={handleStartNewOrder} />
      )}
    </div>
  );
}

export default App;
