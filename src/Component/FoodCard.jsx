import { useCart } from "../context/CartContext";
import { FiShoppingCart, FiStar } from "react-icons/fi";
import { toast } from "react-hot-toast";
import "./FoodCard.css";


const FoodCard = ({ item }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`, {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };
  

  return (
    <div className="food-card glass">
      <div className="card-img-container">
        <img src={item.image} alt={item.name} className="card-img" />
        <span className="card-category badge">{item.category}</span>
      </div>
      <div className="card-content">
        <div className="card-header">
          <h3 className="card-title">{item.name}</h3>
          <div className="card-rating">
            <FiStar className="star-icon" /> {item.rating}
          </div>
        </div>
        <p className="card-desc">{item.description}</p>
        <div className="card-footer">
          <span className="card-price">${item.price}</span>
          <button
            className="btn btn-primary btn-icon"
            onClick={handleAddToCart}
            aria-label="Add to Cart"
          >
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
