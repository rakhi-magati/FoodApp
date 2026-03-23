import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./Payment.css";

const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState("upi");
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();
  const { total, clearCart } = useCart();

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulate fake payment delay
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      navigate("/success");
    }, 2000);
  };

  return (
    <div className="container section page-enter payment-page">
      <div className="payment-card glass">
        <h2 className="payment-title">Select Payment Method</h2>
        
        <div className="amount-display">
          <span>Amount to Pay:</span>
          <h2>${(total + 2.00).toFixed(2)}</h2>
        </div>

        <div className="payment-options">
          <label className={`payment-option ${selectedMethod === 'upi' ? 'active' : ''}`}>
            <input 
              type="radio" 
              name="payment" 
              value="upi" 
              checked={selectedMethod === 'upi'}
              onChange={() => setSelectedMethod('upi')}
            />
            <div className="option-content">
              <h3>UPI / QR</h3>
              <p>Google Pay, PhonePe, Paytm</p>
            </div>
          </label>

          <label className={`payment-option ${selectedMethod === 'card' ? 'active' : ''}`}>
            <input 
              type="radio" 
              name="payment" 
              value="card" 
              checked={selectedMethod === 'card'}
              onChange={() => setSelectedMethod('card')}
            />
            <div className="option-content">
              <h3>Credit / Debit Card</h3>
              <p>Visa, MasterCard, RuPay</p>
            </div>
          </label>

          <label className={`payment-option ${selectedMethod === 'cod' ? 'active' : ''}`}>
            <input 
              type="radio" 
              name="payment" 
              value="cod" 
              checked={selectedMethod === 'cod'}
              onChange={() => setSelectedMethod('cod')}
            />
            <div className="option-content">
              <h3>Cash on Delivery</h3>
              <p>Pay at your doorstep</p>
            </div>
          </label>
        </div>

        <button 
          className="btn btn-primary pay-btn" 
          onClick={handlePayment} 
          disabled={isProcessing}
        >
          {isProcessing ? "Processing..." : `Pay $${(total + 2.00).toFixed(2)}`}
        </button>
      </div>
    </div>
  );
};

export default Payment;
