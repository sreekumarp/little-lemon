import Logo from "../../assets/LogoLL.png";
import { PiPaperPlaneRightBold } from "react-icons/pi";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { footerLinks } from "../../Data";
import ScrollLink from "../link/ScrollLink";
import { Link } from "react-scroll";
import { animateScroll } from "react-scroll";

import "./footer.css";

const Footer = () => {
  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  return (
    <footer className="footer section">
      <div className="footer-container container grid">
        <div>
          <Link to="/" onClick={scrollTop} className="footer-logo">
            <img src={Logo} alt="" className="footer-logo-img" />
          </Link>

          <p className="footer-description">
            At Little Lemon, we bring fresh Mediterranean flavors to your table
            every day. Quality ingredients and warm hospitality are at the heart
            of everything we do.
          </p>

          <p className="footer-newsletter">Subscribe To Our Newsletter</p>

          <form action="" className="footer-form">
            <FaEnvelope className="footer-form-icon" />

            <input
              type="email"
              placeholder="Enter Your Email"
              className="footer-input"
            />

            <button className="footer-button button">
              Subscribe <PiPaperPlaneRightBold className="button-icon" />
            </button>
          </form>
        </div>

        <div className="footer-group grid">
          <div>
            <h3 className="footer-title">Quick Links</h3>

            <ul className="footer-links grid">
              {footerLinks.map((footerLink, index) => {
                return (
                  <li className="footer-item" key={index}>
                    <ScrollLink
                      to={footerLink}
                      name={footerLink}
                      className="footer-link"
                    />
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Opening Hours</h3>

            <ul className="footer-opening grid">
              <li className="opening-item">
                <span>Weekdays</span>
                <span>10:00 AM - 9:00 PM</span>
              </li>

              <li className="opening-item">
                <span>Sat</span>
                <span>9:00 AM - 11:30 PM</span>
              </li>
              <li className="opening-item">
                <span>Sun</span>
                <span>9:00 AM - 11:30 PM</span>
              </li>

              <li className="opening-item">
                <span>Mon</span>
                <span className="closed">Closed</span>
              </li>

              <li className="opening-item">
                <span>Tue</span>
                <span className="closed">Closed</span>
              </li>

              
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Get In Touch</h3>

            <div className="footer-contact grid">
              <div className="footer-item">
                <span className="footer-icon">
                  <FaMapMarkerAlt />
                </span>

                <div>
                  <h3 className="footer-subtitle">Our Location</h3>
                  <p className="footer-info">
                    123 Lemon Street, Chicago, IL, USA
                  </p>
                </div>
              </div>

              <div className="footer-item">
                <span className="footer-icon">
                  <FaPhoneAlt />
                </span>

                <div>
                  <h3 className="footer-subtitle">Call Us</h3>
                  <p className="footer-info">+1 (312) 555-0198</p>
                </div>
              </div>

              <div className="footer-item">
                <span className="footer-icon">
                  <FaEnvelope />
                </span>

                <div>
                  <h3 className="footer-subtitle">Email Us</h3>
                  <p className="footer-info">hello@littlelemon.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <span className="footer-copy">
          &#169; Copyright 2025 <span className="closed">Little Lemon</span> All
          Rights Reserved.
        </span>

        <div className="footer-socials">
          <a href="/" target="_blank" className="footer-social-link">
            <FaFacebookF />
          </a>

          <a href="/" target="_blank" className="footer-social-link">
            <FaXTwitter />
          </a>

          <a href="/" target="_blank" className="footer-social-link">
            <FaLinkedinIn />
          </a>

          <a href="/" target="_blank" className="footer-social-link">
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
