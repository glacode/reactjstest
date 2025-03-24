import React from 'react';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <form className="contact-form">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea name="message"></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;