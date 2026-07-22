import "./Modal.css"
function Modal({cart, onStartNewOrder}) {
    const orderTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return(
        <div className="modal-overlay">
            <div className="modal">
                 <svg                                                           
          className="modal-icon"                                               
          viewBox="0 0 48 48"                                                  
          fill="none"                                                           
          xmlns="http://www.w3.org/2000/svg"                                   
        >                                                                       
          <circle cx="24" cy="24" r="22" stroke="var(--green)" strokeWidth="2" />
          <path                                                                 
            d="M15 24l6 6 12-13"                                             
            stroke="var(--green)"                                               
            strokeWidth="2.5"                                                  
            strokeLinecap="round"                                               
            strokeLinejoin="round"                                              
          />                                                               
        </svg>
                <h2 className="modal-title">Order Confirmation</h2>
                <p className="modal-subtitle">Thank you for your order!</p>

                <ul className="modal-items">
                    {cart.map((item) => (
                        <li key={item.name} className="modal-item">
                            <img src={item.image} alt={item.name} className="modal-item-image" />
                            <div className="modal-item-info">
                                <p className="modal-item-name">{item.name}</p>
                                <span  className="modal-item-quantity">{item.quantity}×</span>
                                <span className="modal-item-unit-price">@ ${item.price.toFixed(2)}</span>
                                </div>
                                <span className="modal-item-subtotal"> ${(item.price * item.quantity).toFixed(2)}</span>
                        </li>
                    ))}
                    </ul>
                    <div className="modal-total">
                        <span>Order Total</span>
                        <span className="modal-total-amount">${orderTotal.toFixed(2)}</span>
                        </div>
                        <button className="modal-start-new-order" onClick={onStartNewOrder}>
                            Start New Order
                        </button>
                    </div>
                </div>
    );
}
export default Modal;