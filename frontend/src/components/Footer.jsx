import React from 'react'
import '../css/Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Learn more about our company and team.</p>
          </div>
          <div className="footer-section">
            <h3>Customer Service</h3>
            <ul>
              <li><a href="#shipping">Shipping Policy</a></li>
              <li><a href="#returns">Return Policy</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: support@onlinestore.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" target="_blank" rel="noopener noreferrer"><img src="/img/facebook.png" alt="Facebook" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><img src="/img/whatsapp.png" alt="whatsapp" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><img src="/img/instagram.png" alt="Instagram" /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Online Store. All rights reserved.</p>
        </div>
      </footer>
  )
}
