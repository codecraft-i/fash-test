import React from "react";
import "./ContactSection.css";

import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="contact-section" id="ContactSection" style={{ margin: "10px 0 35px 0" }}>
      <h2 className="title" style={{ color: "#eee" }}>{t('get_in_touch')}</h2>

      <div className="contact-container">
        {/* Map */}
        <div className="map-box" style={{ borderRadius: "25px" }}>
          <iframe
            title="Google Map"
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d5995.630699971261!2d69.223274!3d41.291123!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE3JzI4LjAiTiA2OcKwMTMnMjMuOCJF!5e0!3m2!1sen!2s!4v1746742452971!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Head Office */}
        <div className="office" style={{ borderRadius: "15px" }}>
          <h3>{t('head_office')}</h3>
          <p>Novza Metro, Korzinka</p>
          <p>
            <strong>{t('phone')}:</strong>{" "}
            <a href="tel:+998770282825">+(998) 77-028-28-25</a> <br />
            <a href="tel:+998770282826">+(998) 77-028-28-26</a> <br />
            <a href="tel:+998903567767">+(998) 90-356-77-67</a> 
          </p>
          <p>
            <strong>{t('telegram_channel')}:</strong>{" "}
            <a href="https://t.me/level_up_study">Level UP</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;