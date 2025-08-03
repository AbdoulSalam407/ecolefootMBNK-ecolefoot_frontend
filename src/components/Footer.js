import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p className="footer-title">© 2025 École Foot Mbaye Ndoye - Kidira</p>
        <p>Contact : contact@ecolefootmbayendoye.sn</p>
      </div>

      <div className="footer-socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-icon">
          <FaTwitter />
        </a>
        <a href="mailto:contact@ecolefootmbayendoye.sn" className="footer-icon">
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
