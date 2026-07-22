import "./ProductCard.css";

function ProductCard({ product, onAddToCart, cart, onIncrease, onDecrease }) {
  const cartItem = cart.find((item) => item.name === product.name);

  return (
    <div className="product-card">
      <picture>
        <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
        <source media="(min-width: 601px)" srcSet={product.image.tablet} />
        <img src={product.image.mobile} alt={product.name} className="product-image" />
      </picture>

      {cartItem ? (
        <div className="quantity-stepper">                             
          <button onClick={() => onDecrease(product.name)}>−</button>
          <span>{cartItem.quantity}</span>
          <button onClick={() => onIncrease(product.name)}>+</button>
        </div>
      ) : (
        <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart-icon lucide-shopping-cart">
            <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          Add to Cart
        </button>
      )}

      <p className="product-category">{product.category}</p>
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">${product.price.toFixed(2)}</p>
    </div>
  );
}

export default ProductCard;