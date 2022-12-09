import React, { useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import "../styles/contact.css";

function Contact() {
  const {setCurrentPage} = useOutletContext()

  useEffect(() => {
    setCurrentPage("contact")
  }, [])

  return (
    <div className="contact">
      <div className="contact-card">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>For business inquiries and custom designs.</p>
        </div>
        <hr />
        <div className="contact-icons">
          <i className="ri-whatsapp-fill"></i>
          <i className="ri-facebook-box-fill"></i>
          <i className="ri-instagram-fill"></i>
          <i className="ri-twitter-fill"></i>
        </div>
      </div>
    </div>
  );
}

export default Contact;
