function Cart({cart}) {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const orderTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="cart">
        <h2 className="cart-title">Your Cart ({totalItems})</h2>
        <p className="cart-empty-message">Your added items will appear here</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2 className="cart-title">Your Cart ({totalItems})</h2>
      <ul className="cart-items">
        {cart.map((item) => (
          <li key={item.name} className="cart-item">
            <div className="cart-item-info">
              <p className="cart-item-name">{item.name}</p>
              <div className="cart-item-details">
                <span className="cart-item-qty">{item.quantity}x</span>
                <span className="cart-item-unit-price">@ ${item.price.toFixed(2)}</span>
                <span className="cart-item-subtotal">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <span>Order Total</span>
        <span className="cart-total-amount">${orderTotal.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default Cart;