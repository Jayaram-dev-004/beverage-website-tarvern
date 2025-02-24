import React from 'react';
import './Contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import appStore from '../../assets/Contact/appstore.png';
import googlePlay from '../../assets/Contact/playstore.png';
import Trending from '../Trending/Trending';

const Contact = () => {
  return (
    <>
    <Trending/>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Brands</li>
            <li>Cold Beverages</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Category</h3>
          <ul>
            <li>Whiskey</li>
            <li>Rum</li>
            <li>Vodka</li>
            <li>Wine</li>
            <li>Beer</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><FaPhone /> +91 90423 64236</p>
          <p><FaEnvelope /> abc1234@gmail.com</p>
          <p><FaMapMarkerAlt /> OMR, Semmencherry, Chennai</p>
        </div>

        <div className="footer-section request-section">
          <h3 className="request-heading">Request A Call-Back</h3>
          <div className="email-input">
            <input type="email" placeholder="Enter your email" />
            <button>Submit</button>
          </div>
          <div className="social-icons">
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
          <div className="app-links">
            <img src={appStore} alt="App Store" />
            <img src={googlePlay} alt="Google Play" />
          </div>
        </div>
      </div>
      <p className="copyright">© Tarven, 2024 All rights reserved by Tarven Beverages Private Limited</p>
    </footer>
    </>
  );
};

export default Contact;