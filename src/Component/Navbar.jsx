import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";
//  import { FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiShoppingBag ,FiX} from "react-icons/fi";

const Navbar = () => {
  const { cartCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="glass-nav">
      <div className="container nav-top">
        <Link to="/" className="logo">
          <span>🍽️</span> Crave<span>Bite</span>
        </Link>

        {/* Desktop Links */}
        <nav className="nav-links desktop-only">
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>About</NavLink>
          <NavLink to="/services" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
          <NavLink to="/menu" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Menu</NavLink>
        </nav>

        <div className="nav-actions">
          <Link to="/cart" className="cart-btn">
            <FiShoppingBag className="cart-icon" />
            {cartCount > 0 && <span className="badge cart-badge">{cartCount}</span>}
          </Link>
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu glass page-enter">
          <div className="mobile-links">
            <NavLink to="/" onClick={toggleMenu} className="nav-link">Home</NavLink>
            <NavLink to="/about" onClick={toggleMenu} className="nav-link">About</NavLink>
            <NavLink to="/services" onClick={toggleMenu} className="nav-link">Services</NavLink>
            <NavLink to="/contact" onClick={toggleMenu} className="nav-link">Contact</NavLink>
            <NavLink to="/menu" onClick={toggleMenu} className="nav-link">Menu</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
