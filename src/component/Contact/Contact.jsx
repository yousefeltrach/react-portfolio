import React from 'react'
import gmail from '../../assets/email.png'
import whats from '../../assets/whats.png'
import './Contact.css'

const Contact = () => {
  return (
    <section id='contact'>
    <div className="title">Contact Me</div>
  <div className='body'>
    <div className="cardd">
      <a href="mailto:youssef.eltrach@gmail.com" className="app-contact-card">
        <img src={gmail} alt="email" />
        <div className="e-text">youssef.eltrach@gmail.com</div>
      </a>
    </div>  
      <div className='cardd '>
        <a href="https://wa.me/+212668578393" className="app-contact-cards">
          <img src={whats} alt="mobile"  />
          <div className="e-text">+212668578393</div>
        </a>
      </div>
  </div>

    <div className="info">
      <form action="text">
        <input type="text" placeholder="Your Name" />
      </form>
      <form action="text">
        <input type="text" placeholder="Your Email" />
      </form>
      <form action="text">
        <input type="text" placeholder="Subject" />
      </form>
      <form action="text">
        <textarea name="body" placeholder="Your Message...."></textarea>
      </form>
    </div>
    
    <div className="button">
      <button onclick="SendMail()">Send Message</button>
    </div>
  </section>
);
}

export default Contact