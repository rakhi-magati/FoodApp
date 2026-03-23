import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { FiTrash2, FiMinus, FiPlus, FiShoppingBag, FiArrowRight } from "react-icons/fi";
import "./Cart.css";

const Cart = () => {
  const { cart, total, increaseQuantity, decreaseQuantity, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="empty-cart page-enter container">
        <div className="empty-cart-glass glass">
          <FiShoppingBag className="empty-icon" />
          <h2>Your Cart is Empty</h2>
          <p>Looks like you haven't added anything to your cart yet.</p>
          <Link to="/menu" className="btn btn-primary">
            Explore Menu <FiArrowRight />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page page-enter container section">
      <h2 className="page-title">Your <span>Cart</span></h2>

      <div className="cart-container grid">
        <div className="cart-items glass">
          <div className="cart-header">
            <h3>Items ({cart.length})</h3>
            <button className="btn btn-outline btn-sm clear-btn" onClick={clearCart}>
              Clear All
            </button>
          </div>

          <div className="cart-list">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details">
                  <h4>{item.name}</h4>
                  <p className="item-price">${item.price.toFixed(2)}</p>
                </div>

                <div className="cart-quantity glass">
                  <button onClick={() => decreaseQuantity(item.id)}><FiMinus /></button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}><FiPlus /></button>
                </div>

                <div className="cart-item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove item"
                >
                  <FiTrash2 />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="cart-summary glass">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Delivery Fee</span>
            <span>$5.00</span>
          </div>
          <div className="summary-row">
            <span>Tax (10%)</span>
            <span>${(total * 0.1).toFixed(2)}</span>
          </div>
          <hr className="summary-divider" />
          <div className="summary-row total-row">
            <span>Total</span>
            <span>${(total + 5 + total * 0.1).toFixed(2)}</span>
          </div>

          <button className="btn btn-primary checkout-btn" onClick={() => navigate("/checkout")}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
