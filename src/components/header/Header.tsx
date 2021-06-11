import React from 'react';
import logo from '../../assets/images/logo.png';
import './Header.scss';
import {
  FaEnvelope,
  FaPhone,
  FaUser,
  FaFacebook,
  FaGooglePlus,
  FaTwitter,
} from 'react-icons/fa';

const Header = () => {
  return (
    <header id="header">
      <div className="header__container">
        <div className="header__top">
          <div className="header__contact">
            <a href="tel:+1234567890" className="header__tel">
              <FaPhone className="header__icon" />
              <span className="header__icon__data">+1234567890</span>
            </a>
            <a href="mailto:info@yourmail.com">
              <FaEnvelope className="header__icon" />{' '}
              <span className="header__icon__data">info@yourmail.com</span>
            </a>
          </div>
          <nav className="header__nav__top">
            <a href="/#" className="header__login">
              <FaUser className="header__icon" />{' '}
              <span className="header__icon__data">Login</span>
            </a>
            <ul className="header__social">
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="/#">
                  <FaGooglePlus />
                </a>
              </li>
              <li>
                <a href="/#">
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <nav className="header__bottom">
          <a className="header__brand" href="index.html">
            <img src={logo} alt="creative" />
          </a>
          <div className="header__collapse">
            <ul className="header__navbar__bottom">
              <li className="header__nav__item">
                <a className="header__nav__link" href="/#">
                  Home
                </a>
              </li>
              <li className="header__nav__item">
                <a className="header__nav__link" href="/#">
                  About Us
                </a>
              </li>
              <li className="header__nav__item">
                <a className="header__nav__link" href="/#">
                  Services
                </a>
              </li>
              <li className="header__nav__item">
                <a className="header__nav__link" href="/#">
                  Portfolio
                </a>
              </li>
              <li className="header__nav__item">
                <a className="header__nav__link" href="/#">
                  Shop
                </a>
              </li>
              <li className="header__nav__item">
                <a className="header__nav__link" href="/#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
