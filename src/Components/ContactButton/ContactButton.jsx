import { useState } from "react";
import { FaPhone, FaTimes } from "react-icons/fa";
import "./ContactButton.css";

const ContactButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="contact-container1122">
      <div className="contact-wrapper1122">
        {open && (
          <div className="contact-list1122">
            <a href="https://t.me/level_up_study" target="_blank" rel="noopener noreferrer">Telegram</a>
            <a href="https://www.instagram.com/levelup_uzb?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="tel:+998770282825">+(998) 77-028-28-25</a>
            <a href="tel:+998770282826">+(998) 77-028-28-26</a>
            <a href="tel:+998903567767">+(998) 90-356-77-67</a> 
          </div>
        )}
        <button className="contact-toggle1122" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaPhone />}
        </button>
      </div>
    </div>
  );
};

export default ContactButton;