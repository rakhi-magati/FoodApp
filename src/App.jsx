import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";
import "./index.css";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Payment from "./Pages/Payment";
import OrderSuccess from "./Pages/OrderSuccess";
import Footer from "./Component/Footer";

function App() {
  return (
    <CartProvider>
      <Router>
        {/* Animated backgrounds */}
        <div className="bg-blobs">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
        
        <Navbar />
        <Toaster position="bottom-right" reverseOrder={false} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/success" element={<OrderSuccess />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
