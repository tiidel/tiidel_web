import React, { useState, useEffect } from "react";
import Hero1 from "./hero_01.jpg";
import Hero2 from "./hero_two.png";
import Hero3 from "./hero_three.png";
import Hero4 from "./hero_four.jpg";
import Hero5 from "./hero_five.jpg";

const slides = [
  {
    title: "Empowering Africa",
    subtitle: "Your Gateway to Global Investment Opportunities",
    image: Hero4,
  },
  {
    title: "Financial Inclusion",
    subtitle: "Bringing Local Markets to the Global Stage",
    image: Hero2,
  },
  {
    title: "Invest Smarter",
    subtitle: "AI-Powered Insights for Better Decisions",
    image: Hero3,
  },
  {
    title: "Transform Your Finances",
    subtitle: "Simplified Investing for Everyone",
    image: Hero4,
  },
  {
    title: "Growth & Innovation",
    subtitle: "Leading the Future of Investments in Africa",
    image: Hero5,
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 500);
  };

  const handleDotClick = (index) => {
    if (index !== currentSlide) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 500);
    }
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="carousel-nav">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-content">
          <h1 className={isTransitioning ? "fade-up" : ""}>
            {slides[currentSlide].title}
          </h1>
          <p className={isTransitioning ? "fade-up" : ""}>
            {slides[currentSlide].subtitle}
          </p>
          <button className={`cta-button ${isTransitioning ? "fade-up" : ""}`}>
            READ MORE
          </button>
        </div>

        <div className="image-content">
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt={`Hero image ${index + 1}`}
              className={`hero-image 
                ${index === currentSlide ? "active" : ""} 
                ${
                  isTransitioning && index === currentSlide
                    ? "transitioning"
                    : ""
                }`}
            />
          ))}
          <div className="decorative-curve" />
        </div>
      </div>
    </div>
  );
}
