import "./Cart.css";
function Cart({cart, onRemove, onConfirmOrder}) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const orderTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cart.length === 0) {
        return(
            <div className="cart">
                <h2 className="cart-title">Your Cart({totalItems})</h2>
                <p className="cart-empty-message">Your added items will appear here</p>
            </div>
        );
    }
    return(
        <div className="cart">
            <h2 className="cart-title">Your Cart({totalItems})</h2>
            <ul className="cart-items">
                {cart.map((item) => 
                <li key={item.name} className="cart-item">
                    <div className="cart-item-info">
                        <p className="cart-item-name">{item.name}</p>
                        <div className="cart-item-details">
                            <span className="cart-item-quantity">{item.quantity}×</span>
                            <span className="cart-item-unit-price">@ ${item.price.toFixed(2)}</span>
                            <span className="cart-item-subtotal"> ${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                    </div>
                <button className="cart-item-remove" onClick={() => onRemove(item.name)} aria-label={`Remove ${item.name} from cart`}>
                    ×
                </button>
                </li>
            )} 
            </ul>
            <div className="cart-total">
                <span>Order Total</span>
                <span className="cart-total-amount">${orderTotal.toFixed(2)}</span>
                </div>
                <div className="carbon-neutral-note">                                   
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-leaf-icon lucide-leaf">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>                                                             
        <p>                                                                    
          This is a <strong>carbon-neutral</strong> delivery                  
        </p>                                                                   
      </div> 

      <button className="confirm-order-btn" onClick={onConfirmOrder}>
                    Confirm Order
      </button>
    </div>
    )
}
export default Cart;