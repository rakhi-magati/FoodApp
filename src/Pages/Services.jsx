import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Services() {
  const navigate = useNavigate();
  return (
    <div className="page-enter container section">

      {/* HERO BANNER */}
      <div style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "20px",
        padding: "80px 20px",
        color: "#fff",
        textAlign: "center",
        marginBottom: "60px"
      }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "15px" }}>
          Delicious Food, Delivered Fast 🚀
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
          Experience the best food delivery service with speed, quality, and taste.
        </p>
      </div>

      {/* TITLE */}
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ fontSize: "3rem" }}>
          Our <span style={{ color: "var(--primary)" }}>Services</span>
        </h2>
        <p style={{
          color: "var(--text-muted)",
          fontSize: "1.2rem",
          maxWidth: "600px",
          margin: "10px auto"
        }}>
          We go above and beyond to give you the best food experience 🍽️
        </p>
      </div>

      {/* SERVICES CARDS */}
      <div className="grid grid-cols-4" style={{ marginTop: "40px", gap: "20px" }}>
        {[
          { icon: "🚚", title: "Fast Delivery", desc: "Hot & fresh food delivered quickly." },
          { icon: "🍽️", title: "Fresh Food", desc: "Prepared with high-quality ingredients." },
          { icon: "☎️", title: "24/7 Support", desc: "We are always available for you." },
          { icon: "💻", title: "Easy Ordering", desc: "Order your favorite food in seconds." }
        ].map((item, i) => (
          <div key={i} className="glass shine-effect" style={{
            padding: "30px",
            textAlign: "center",
            borderRadius: "20px"
          }}>
            <div style={{ fontSize: "3rem" }}>{item.icon}</div>
            <h3 style={{ margin: "10px 0" }}>{item.title}</h3>
            <p style={{ color: "var(--text-muted)" }}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* EXTRA ATTRACTION SECTION */}
      <div style={{
        display: "flex",
        gap: "40px",
        marginTop: "80px",
        alignItems: "center",
        flexWrap: "wrap"
      }}>

        {/* IMAGE */}
        <img
          src="https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=800"
          alt="delivery"
          style={{
            width: "100%",
            maxWidth: "400px",
            borderRadius: "20px"
          }}
        />

        {/* CONTENT */}
        <div style={{ flex: 1 }}>
          <h2 style={{ marginBottom: "15px" }}>
            Why We Are <span style={{ color: "var(--primary)" }}>Best?</span>
          </h2>

          <p style={{ lineHeight: "1.7", marginBottom: "10px" }}>
            We combine speed, quality, and customer satisfaction to give you
            an amazing food experience every time.
          </p>

          <ul style={{ lineHeight: "2", color: "var(--text-muted)" }}>
            <li>✔️ Trusted by 10,000+ customers</li>
            <li>✔️ Super fast delivery system</li>
            <li>✔️ 100% hygienic kitchens</li>
            <li>✔️ Affordable pricing</li>
          </ul>
        </div>
      </div>

      {/* STATS SECTION */}
      <div style={{
        marginTop: "80px",
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        flexWrap: "wrap",
        textAlign: "center"
      }}>
        {[
          { num: "10K+", label: "Happy Customers" },
          { num: "500+", label: "Dishes Served" },
          { num: "4.8⭐", label: "Average Rating" },
          { num: "24/7", label: "Support" }
        ].map((item, i) => (
          <div key={i} className="glass" style={{
            padding: "25px",
            borderRadius: "15px",
            minWidth: "150px"
          }}>
            <h2 style={{ color: "var(--primary)" }}>{item.num}</h2>
            <p style={{ color: "var(--text-muted)" }}>{item.label}</p>
          </div>
        ))}
      </div>

      {/* CTA SECTION */}
      <div style={{
        marginTop: "80px",
        textAlign: "center",
        padding: "40px",
        background: "rgba(255,165,2,0.1)",
        borderRadius: "20px"
      }}>
        <h2 style={{ marginBottom: "10px" }}>
          Ready to Order? 🍔
        </h2>
        <p style={{ color: "var(--text-muted)", marginBottom: "20px" }}>
          Explore our menu and enjoy your favorite meals now.
        </p>

        <button
          onClick={() => navigate("/")}
          style={{
            padding: "12px 25px",
            borderRadius: "10px",
            border: "none",
            background: "var(--primary)",
            color: "#fff",
            cursor: "pointer",
            fontSize: "1rem"
          }}
        >
          Order Now
        </button>
      </div>

    </div>
  )
}