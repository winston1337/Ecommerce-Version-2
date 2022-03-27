import React from 'react';
import '../App.css';


function Contact(props) {
  return (
    <section class="contactForm">
    <form>
      <h2>Contact Us</h2>
      <label>
      <div class="inputBox">
        <input type="text" name="fullName" required="required"></input>
        <span>Full Name</span>
      </div>
      </label>
      
      <label>
      <div class="inputBox">
        <input type="text" name="email" required="required"></input>
        <span>Email</span>
      </div>
      </label>

      <label>
        <div class="inputBox">
          <input type="text" name="Number" required="required"></input>
          <span>Phone Number</span>
        </div>
        </label>

      <label class="inputBox">
        <textarea required="required"></textarea>
        <span>Type your message...</span>
      </label>
      <div class="inputBox">
        <label for="name"></label>
        <input type="submit" name="enter" value="send" id="name"></input>
      </div>
    </form>

  </section>

  );
}

export default Contact;