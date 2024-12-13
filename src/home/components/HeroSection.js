import React, { useState, useEffect } from 'react';
import Hero1 from './hero_01.jpg'

const slides = [
  {
    title: 'MTN Group Q3 2024',
    subtitle: 'Trading Update',
    image: Hero1,
  },
  {
    title: 'Digital Solutions',
    subtitle: 'Transforming Tomorrow',
    image: Hero1,
  },
  {
    title: 'Innovation First',
    subtitle: 'Leading Change',
    image: 'https://via.placeholder.com/800x600.png?text=Innovation+First',
  },
  {
    title: 'Connected Future',
    subtitle: 'Building Together',
    image: 'https://via.placeholder.com/800x600.png?text=Connected+Future',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setIsAnimating(true);
    setPrevSlide(currentSlide);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="carousel-nav">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`nav-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => {
                setPrevSlide(currentSlide);
                setCurrentSlide(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <div className="text-content">
          <h1 className={isAnimating ? 'fade-up' : ''}>{slides[currentSlide].title}</h1>
          <p className={isAnimating ? 'fade-up' : ''}>{slides[currentSlide].subtitle}</p>
          <button className={`cta-button ${isAnimating ? 'fade-up' : ''}`}>READ MORE</button>
        </div>

        <div className="image-content">
          <img
            src={slides[prevSlide].image}
            alt="Previous hero image"
            className={`hero-image ${isAnimating ? 'fade-out' : ''}`}
          />
          <img
            src={slides[currentSlide].image}
            alt="Current hero image"
            className={`hero-image ${isAnimating ? 'fade-slide-in' : ''}`}
          />
          <div className="decorative-curve" />
        </div>
      </div>

    </div>
  );
}

