import React, { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa";
export default function ScrollTop() {
    const [visible, setVisible] = useState(false);

    // Show button when scrolling down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };


    return (
        <div>
            {visible && (
                <button onClick={scrollToTop} style={styles.button}>
                    <FaArrowUp />
                </button>
            )}
        </div>
    )
}


const styles = {
    button: {
        position: "fixed",
        bottom: "30px",
        right: "30px",
        background: "#ff4d4d",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        fontSize: "20px",
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        zIndex: 1000,
    },
};
