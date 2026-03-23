import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import "./OrderSuccess.css";

const OrderSuccess = () => {

  const now = new Date();

  const deliveryMinutes = Math.floor(Math.random() * 16) + 30;

  const deliveryTime = new Date(now.getTime() + deliveryMinutes * 60000);

  const formattedTime = deliveryTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="container section page-enter success-page">
      <div className="success-card glass">
        <div className="success-icon-container">
          <FiCheckCircle className="success-icon" />
        </div>

        <h2 className="success-title">Order Placed Successfully!</h2>

        <p className="success-message">
          Thank you for your order. We've received it and our chefs are already preparing your delicious food.
        </p>

        <div className="order-details">
          <p>
            <strong>Order ID:</strong> #{Math.floor(Math.random() * 90000) + 10000}
          </p>

          <p>
            <strong>Estimated Delivery:</strong> {formattedTime} 
            <span> ({deliveryMinutes} mins)</span>
          </p>
        </div>

        <Link to="/" className="btn btn-primary success-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;