import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';

import Logo from '@assets/Logo.png'

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left section */}
        <div className="footer-left">
          <div className="logo-container">
            <div className="logo-bg">
              <img src="/LOGO.png" alt="logo" className="logo-img" style={{ width: "100px", height: "auto", backgroundSize: "cover" }} />
            </div>
            {/* <span className="logo-text"></span> */}
          </div>
          <p className="social-title">{t('social_media')}:</p>
          <div className="social-icons">
            <a href="https://www.instagram.com/levelup_uzb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" style={{ color: "#00aaff" }}><img src="/Icons/instagram.png" alt="Instagram" /></a>
            <a href="https://t.me/level_up_study" target="_blank" style={{ color: "#00aaff" }}><img src="/Icons/telegram.png" alt="Telegram" /></a>
          </div>
        </div>

        {/* Middle section */}
        <div className="footer-middle">
          <Link to="about" smooth={true} duration={500}>{t('about_us')}</Link>
          <NavLink to="/universities">{t('universities')}</NavLink>
        </div>

        {/* Right section */}
        <div className="footer-right">
          <p className="contact-title">{t('contact_us')}</p>
          <p>Novza Metro, Korzinka</p>
          <p>+(998) 77-028-28-25</p>
          <p>+(998) 77-028-28-26</p>
          <p>+(998) 90-356-77-67</p>
        </div>
      </div>
    </footer>
  );
}
