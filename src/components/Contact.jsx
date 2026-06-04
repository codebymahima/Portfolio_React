import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <h3>Contact Me</h3>
        <div className="contactForm">
        <label htmlFor="name">Your Name</label>
        <input type="text" name='name' placeholder='Mahima Lalwani'/>
        <label htmlFor="email">Your Email</label>
        <input type="text" name='email' placeholder='codebymahima@gmail.com'/>
        <label htmlFor="message">Your Message</label>
        <textarea name="message" id="message" rows={20} cols={55} placeholder='Hi, nice getting in touch with you!'></textarea>
        </div>
        <a href="https://www.linkedin.com/in/mahima-lalwani/">LinkedIn</a>
        <a href=" github.com/codebymahima">GitHub</a>
    </div>
  )
}

export default Contact