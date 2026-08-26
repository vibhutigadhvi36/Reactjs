function Contact() {
  return (
    <section className="contact-section" id="contact">

      <h2>Contact Me</h2>

      <p className="contact-text">
        Please fill out the form below to discuss any work opportunities.
      </p>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          rows="6"
          placeholder="Your Message"
        ></textarea>

        <button type="submit">
          Submit
        </button>

      </form>

      <div className="social-icons">

        <a href="https://facebook.com" target="_blank">
          <img src="communication.png" alt="" />
        </a>

        <a href="https://twitter.com" target="_blank">
          <img src="Twitter.png" alt="" />
        </a>

        <a href="https://www.youtube.com//" target="_blank">
          <img src="youtube.png" alt="" />
        </a>

        <a href="https://instagram.com" target="_blank">
          <img src="instagram.png" alt="" />
        </a>

      </div>

      <div className="email-section">

        <img src="gmail.png" alt="" />

        <span>@ vibhutigadhvi36@gmail.com</span>

      </div>

    </section>
  );
}

export default Contact;