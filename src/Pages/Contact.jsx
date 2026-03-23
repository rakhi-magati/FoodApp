import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      alert(`Message sent!\n\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    }, 1500);
  };

  return (
    <div className="page-enter container section contact-page">

      {/* HERO SECTION */}
      <div style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "20px",
        padding: "70px 20px",
        textAlign: "center",
        color: "#ffffff",
        backgroundColor: "rgba(0,0,0,0.5)",
        marginBottom: "60px"
      }}>
        <h1 style={{ fontSize: "3rem" }}>Contact CraveBite 🍽️</h1>
        <p style={{ marginTop: "10px" }}>
          We'd love to hear from you — anytime!
        </p>
      </div>

      <div className="grid grid-cols-2">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>
            Get In <span style={{ color: 'var(--primary)' }}>Touch</span>
          </h2>

          <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>
            Have questions, feedback, or craving something special?  
            Reach out and we’ll respond quickly!
          </p>

          {/* INFO CARDS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>

            {[
              { title: "Address", icon: "📍", value: "Hyderabad, India" },
              { title: "Phone", icon: "📞", value: "+91 98765 43210" },
              { title: "Email", icon: "✉️", value: "support@cravebite.com" }
            ].map((item, i) => (
              <div key={i} className="glass" style={{
                padding: '20px',
                borderRadius: '15px'
              }}>
                <h4 style={{ color: 'var(--primary)' }}>
                  {item.icon} {item.title}
                </h4>
                <p>{item.value}</p>
              </div>
            ))}

          </div>

          {/* WHY CONTACT US */}
          <div className="glass" style={{
            marginTop: "30px",
            padding: "20px",
            borderRadius: "15px"
          }}>
            <h4 style={{ color: 'var(--secondary)' }}>Why Contact Us?</h4>
            <ul style={{ lineHeight: "1.8", color: "var(--text-muted)" }}>
              <li>✔️ Quick response support</li>
              <li>✔️ Custom food orders</li>
              <li>✔️ Feedback & suggestions</li>
            </ul>
          </div>

          {/* SOCIAL */}
          {/* <div style={{ marginTop: "25px" }}>
            <h4>Follow Us</h4>
            <div style={{ fontSize: "1.8rem", marginTop: "10px" }}>
              📘 📸 🐦
            </div>
          </div> */}

          {/* MAP */}
          <div className="glass" style={{
            height: '200px',
            borderRadius: '15px',
            marginTop: "30px",
            overflow: "hidden"
          }}>
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Hyderabad&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
            ></iframe>
          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="contact-form-container glass" style={{
          height: 'fit-content',
          marginTop: '120px',
          borderRadius: '15px',
          padding: "30px"
        }}>

          <h3 style={{ fontSize: '2rem', marginBottom: '20px' }}>
            Send a Message
          </h3>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="glass-input"
              style={{ marginBottom: "15px" }}
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="glass-input"
              style={{ marginBottom: "15px" }}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="glass-input"
              style={{ marginBottom: "15px" }}
            />

            <button
              type="submit"
              disabled={status === "submitting"}
              style={{
                width: "100%",
                padding: "15px",
                borderRadius: "10px",
                border: "none",
                background: "var(--primary)",
                color: "#fff",
                fontSize: "1.1rem",
                cursor: "pointer"
              }}
            >
              {status === "submitting" ? "Sending..." : "Submit Message"}
            </button>

            {status === "success" && (
              <p style={{
                marginTop: "15px",
                color: "green",
                textAlign: "center"
              }}>
                🎉 Message sent successfully!
              </p>
            )}

          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;