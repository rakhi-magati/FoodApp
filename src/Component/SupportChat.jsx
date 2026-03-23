import { useState, useEffect } from "react";
import { FaComments, FaTimes } from "react-icons/fa";

const SupportChat = () => {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello 👋", sender: "bot" },
    { text: "How can I help you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  // ✅ Show only at bottom
  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 50;

      setVisible(isBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Bot reply logic
  const getBotReply = (msg) => {
    msg = msg.toLowerCase();

    if (msg.includes("hello") || msg.includes("hi")) {
      return "Hi there 😊";
    } else if (msg.includes("price")) {
      return "Prices are shown on each food item 💰";
    } else if (msg.includes("order")) {
      return "You can order directly from the menu 🛒";
    } else if (msg.includes("contact")) {
      return "You can reach us via Contact page 📞";
    } else {
      return "Sorry, I didn't understand that 🤔";
    }
  };

  // ✅ Send message
  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Bot reply after delay
    setTimeout(() => {
      const botReply = {
        text: getBotReply(input),
        sender: "bot",
      };
      setMessages((prev) => [...prev, botReply]);
    }, 800);
  };

  return (
    <>
      {/* Floating Button */}
      {visible && (
        <button onClick={() => setOpen(!open)} style={styles.chatButton}>
          {open ? <FaTimes /> : <FaComments />}
        </button>
      )}

      {/* Chat Box */}
      {open && (
        <div style={styles.chatBox}>
          <div style={styles.header}>Support 🤖</div>

          <div style={styles.body}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  ...styles.message,
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  background: msg.sender === "user" ? "#007bff" : "#eee",
                  color: msg.sender === "user" ? "#fff" : "#000",
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div style={styles.footer}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type message..."
              style={styles.input}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} style={styles.sendBtn}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  chatButton: {
    position: "fixed",
    bottom: "100px",
    right: "30px",
    width: "55px",
    height: "55px",
    borderRadius: "50%",
    border: "none",
    background: "#25D366",
    color: "#fff",
    fontSize: "22px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    zIndex: 1000,
  },
  chatBox: {
    position: "fixed",
    bottom: "170px",
    right: "30px",
    width: "300px",
    height: "400px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    zIndex: 1000,
  },
  header: {
    background: "#25D366",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
    fontWeight: "bold",
  },
  body: {
    flex: 1,
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    overflowY: "auto",
  },
  message: {
    padding: "8px 12px",
    borderRadius: "15px",
    maxWidth: "75%",
    fontSize: "14px",
  },
  footer: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #ddd",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  sendBtn: {
    marginLeft: "5px",
    padding: "8px 12px",
    border: "none",
    background: "#25D366",
    color: "#fff",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default SupportChat;