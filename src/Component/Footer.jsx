import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer glass">
      <div className="container">
        <div className="footer-grid">
          
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="logo">
              <span>🍽️</span> Crave<span>Bite</span>
            </Link>
            <p className="footer-desc">
              Experience the best food delivery service with premium quality and fastest delivery in town.
            </p>

            {/* Social Icons */}
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

          {/* Links */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-links">
            <h3>Contact Us</h3>
            <ul>
              <li>contact@cravebite.com</li>
              <li>+1 234 567 890</li>
              <li>123 Food Street, Yum City</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CraveBite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;