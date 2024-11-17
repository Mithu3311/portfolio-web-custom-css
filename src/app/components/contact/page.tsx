import React from 'react';
import './contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        Have any questions or feedback? We would love to hear from you. Fill out the form below or reach us at support@mithucom
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
