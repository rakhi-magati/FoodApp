import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const { cart, total } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if(cart.length === 0) return;
    // Simulate proceeding to payment
    navigate("/payment");
  };

  if (cart.length === 0) {
    return (
      <div className="container section page-enter" style={{ textAlign: "center" }}>
        <h2>Your cart is empty</h2>
        <button className="btn btn-primary" onClick={() => navigate("/menu")} style={{ marginTop: "20px" }}>
          Browse Menu
        </button>
      </div>
    );
  }

  return (
    <div className="container section page-enter checkout-page">
      <h2 className="checkout-title">Checkout</h2>
      
      <div className="checkout-grid">
        <div className="checkout-form glass">
          <h3>Delivery Details</h3>
          <form onSubmit={handlePlaceOrder}>
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                name="name" 
                required 
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label>Phone Number</label>
              <input 
                type="tel" 
                name="phone" 
                required 
                placeholder="+1 234 567 8900"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label>Delivery Address</label>
              <textarea 
                name="address" 
                required 
                placeholder="123 Main St, Apartment 4B"
                rows="3"
                value={formData.address}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary place-order-btn">
              Proceed to Payment
            </button>
          </form>
        </div>

        <div className="checkout-summary glass">
          <h3>Order Summary</h3>
          <div className="summary-items">
            {cart.map((item) => (
              <div key={item.id} className="summary-item">
                <span>{item.quantity}x {item.name}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="summary-totals">
            <div className="total-row">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="total-row">
              <span>Delivery Fee</span>
              <span>$2.00</span>
            </div>
            <div className="total-row grand-total">
              <span>Total</span>
              <span>${(total + 2.00).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
