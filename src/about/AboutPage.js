import React from "react";
import { motion } from "framer-motion";
import {
  FaMedal,
  FaUsers,
  FaClock,
  FaTools,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./about.css";
import { CustomerService02Icon, CustomerSupportIcon, Location01Icon, MailOpen01Icon, Medal05Icon, Timer02Icon, UserGroup03Icon } from "../addons/icons";

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="hero-section">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Tiidel Inc
        </motion.h1>
        <p className="subtitle">Empowering Innovation and Excellence in Technology</p>
      </section>

      <section className="company-intro">
        <div className="intro-content">
          <h2>Who We Are</h2>
          <p>
            Tiidel is a leading technology company based in Cameroon, committed
            to delivering innovative solutions that empower businesses and
            individuals. With a strong focus on software development, we aim to
            bridge the gap between ideas and impactful digital products.
          </p><br />
          <p>
            Our team is dedicated to creating transformative solutions in areas
            such as software development, web design, mobile applications, and
            digital transformation services.
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
            <p>Satisfied Clients</p>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <Medal05Icon />
            <h3>Exceptional Quality</h3>
            <p>We deliver cutting-edge solutions tailored to your unique needs.</p>
          </div>
          <div className="benefit-card">
            <UserGroup03Icon />
            <h3>Expert Team</h3>
            <p>Our team of experienced professionals ensures top-notch results.</p>
          </div>
          <div className="benefit-card">
            <Timer02Icon />
            <h3>Timely Delivery</h3>
            <p>We value your time and ensure projects are completed on schedule.</p>
          </div>
          <div className="benefit-card">
            <CustomerService02Icon />
            <h3>Comprehensive Services</h3>
            <p>We provide end-to-end solutions for all your tech needs.</p>
          </div>
        </div>
      </section>

      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            To empower African businesses and individuals through innovative technology solutions 
            that drive growth and success.
          </p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            To become a leading force in technology innovation, recognized across Africa and beyond 
            for our impact and excellence.
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
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <section className="contact-info">
        <h2>Get in Touch</h2>
        <div className="contact-grid">
          <div className="contact-item">
            <CustomerSupportIcon />
            <h3>Phone</h3>
            <p>+237 620 59 01 87</p>
          </div>
          <div className="contact-item">
            <MailOpen01Icon />
            <h3>Email</h3>
            <p>contact@tiidel.com</p>
          </div>
          <div className="contact-item">
            <Location01Icon />
            <h3>Address</h3>
            <p>
              City Chemist Round-About
              <br />
              Bamenda, Cameroon
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
