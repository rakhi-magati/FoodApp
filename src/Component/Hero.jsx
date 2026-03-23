import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "./Hero.css";
import { foodItems } from "../Data/Fooddata";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const sliderImages = foodItems
        .slice(0, 5)
        .map(item => item.image)
        .filter(Boolean);
    // Auto slide
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === sliderImages.length - 1 ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(timer);
    }, [sliderImages.length]);

    const nextSlide = () => setCurrentSlide(currentSlide === sliderImages.length - 1 ? 0 : currentSlide + 1);
    const prevSlide = () => setCurrentSlide(currentSlide === 0 ? sliderImages.length - 1 : currentSlide - 1);
    const goToSlide = (idx) => setCurrentSlide(idx);

    return (
        <section className="hero-section">

            <div className="hero-slider">
                {sliderImages.map((img, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentSlide ? "active" : ""}`}
                        style={{ backgroundImage: `url(${img})` }}
                    >
                        <div className="slide-overlay"></div>
                    </div>
                ))}

                <div className="hero-content">
                    <span className="hero-badge badge glass">🔥 Hot & Fresh</span>
                    <h1 className="hero-title">
                        Delicious Food Delivered to You
                    </h1>
                    <p className="hero-subtitle">
                        Experience the best culinary delights from top restaurants delivered straight to your doorstep in minutes.
                    </p>

                    <div className="hero-actions">
                        <Link to="/menu" className="btn btn-primary btn-lg shine-effect">
                            Order Now <FiArrowRight />
                        </Link>
                    </div>
                </div>

                {/* Controls */}
                <button className="slider-arrow prev" onClick={prevSlide} aria-label="Previous Slide">
                    <FiChevronLeft />
                </button>
                <button className="slider-arrow next" onClick={nextSlide} aria-label="Next Slide">
                    <FiChevronRight />
                </button>

                <div className="slider-dots">
                    {sliderImages.map((_, idx) => (
                        <button
                            key={idx}
                            className={`dot ${idx === currentSlide ? "active" : ""}`}
                            onClick={() => goToSlide(idx)}
                            aria-label={`Go to slide ${idx + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
