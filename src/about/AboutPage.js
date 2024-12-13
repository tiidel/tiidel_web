import React from 'react';
import { motion } from 'framer-motion';
import { FaMedal, FaUsers, FaClock, FaTools, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './about.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="hero-section">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About God's Honour Construction
        </motion.h1>
        <p className="subtitle">Building Excellence, Delivering Trust</p>
      </section>

      <section className="company-intro">
        <div className="intro-content">
          <h2>Our Story</h2>
          <p>
            Founded in 2018, God's Honour Construction has established itself as a 
            leading construction company in Cameroon. Our commitment to excellence, 
            integrity, and customer satisfaction has made us the preferred choice for 
            construction projects of all scales.
          </p>
          <p>
            With a team of highly skilled professionals and years of industry experience, 
            we've successfully completed numerous projects across Yaoundé and beyond, 
            always adhering to the highest standards of quality and safety.
          </p>
        </div>
        <div className="company-stats">
          <div className="stat-item">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-item">
            <h3>500+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Expert Team</p>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <FaMedal className="benefit-icon" />
            <h3>Quality Assurance</h3>
            <p>We maintain the highest standards in construction, using premium materials and advanced techniques.</p>
          </div>
          <div className="benefit-card">
            <FaUsers className="benefit-icon" />
            <h3>Expert Team</h3>
            <p>Our skilled professionals bring years of experience and expertise to every project.</p>
          </div>
          <div className="benefit-card">
            <FaClock className="benefit-icon" />
            <h3>Timely Delivery</h3>
            <p>We understand the importance of deadlines and ensure timely completion of all projects.</p>
          </div>
          <div className="benefit-card">
            <FaTools className="benefit-icon" />
            <h3>Comprehensive Services</h3>
            <p>From planning to execution, we offer end-to-end construction solutions.</p>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To deliver exceptional construction services that exceed client expectations, 
            while upholding the highest standards of quality, safety, and integrity in 
            every project we undertake.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To be the most trusted and respected construction company in Cameroon, 
            known for our excellence in building and our commitment to client satisfaction.
          </p>
        </div>
      </section>

      <section className="location-section">
        <h2>Visit Our Office</h2>
        <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.6876721274944!2d11.538947700823337!3d3.763254618219616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNDUnNDcuNyJOIDExwrAzMicyMC4yIkU!5e0!3m2!1sen!2scm!4v1629789012345!5m2!1sen!2scm"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy">
        </iframe>
        </div>
      </section>

      <section className="contact-info">
        <h2>Get in Touch</h2>
        <div className="contact-grid">
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" />
            <h3>Phone</h3>
            <p>+237 670 89 53 67</p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p>info@goho.com</p>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <h3>Address</h3>
            <p>Odza plaque L&B (Evondo fin gourdron)<br />Yaoundé, Cameroon</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;