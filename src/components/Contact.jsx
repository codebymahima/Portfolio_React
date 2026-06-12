import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [status, setStatus] = React.useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/mqeoywqj", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      form.reset();
    } else {
      const errorData = await response.json();
      console.log(errorData);
      setStatus("Something went wrong. Check console.");
    }
  } catch (error) {
    console.log(error);
    setStatus("Network error. Please try again.");
  }
};
  return (
    <div className="contactSection">

      <h3 id='contactHead'>Contact Me</h3>

      <div className="contactContainer">


        <form className="contactForm" action="https://formspree.io/f/mqeoywqj" method="POST" onSubmit={handleSubmit} onKeyDown={(e) => {
    if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
      e.preventDefault();
    }
  }}>
          <label htmlFor="name">Your Name</label>
          <input type="text" name='name' placeholder='Mahima Lalwani' />
          <label htmlFor="email">Your Email</label>
          <input type="text" name='email' placeholder='codebymahima@gmail.com' />
          <label htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Hi, nice getting in touch with you!"
          ></textarea>
          <button type="submit" className="sendBtn">
            Send Message
          </button>
          {status && <p className="formStatus">{status}</p>}

        </form>
        <div className="mapContainer">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4115.21347967301!2d77.17708917721491!3d28.545959129829434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1dec15d2acfb%3A0x44144b13d050b48e!2sDAMODAR%20HOSTEL%20BLOCK-A%2C%20JAWAHARLAL%20NEHRU%20UNIVERSITY-2%2C%20Old%20SPS%20Rd%2C%20Delhi%2C%20New%20Delhi%2C%20Delhi%20110067!5e1!3m2!1sen!2sin!4v1781188329980!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map Location"></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact