import React from 'react';
import '../App.css';


function Contact() {
  return (
    <section className="contactForm">
    <form>
      <h2>Contact Us</h2>
      <label>
      <div className="inputBox">
        <input type="text" name="fullName" required="required"></input>
        <span>Full Name</span>
      </div>
      </label>
      
      <label>
      <div className="inputBox">
        <input type="text" name="email" required="required"></input>
        <span>Email</span>
      </div>
      </label>

      <label>
        <div className="inputBox">
          <input type="text" name="Number" required="required"></input>
          <span>Phone Number</span>
        </div>
        </label>
        <label>
        <div className="inputBox">
          <input type="text" name="Address" required="required"></input>
          <span>Address Line 1</span>
        </div>
        </label>
        <label>
        <div className="inputBox">
          <input type="text" name="Address" required="required"></input>
          <span>Address Line 2</span>
        </div>
        </label>

      <label className="inputBox">
        <textarea required="required"></textarea>
        <span>Type your message...</span>
      </label>
      <div className="inputBox">
        <label htmlFor="name"></label>
        <input type="submit" name="enter" value="send" id="name"></input>
      </div>
    </form>

  </section>

  );
}

export default Contact;