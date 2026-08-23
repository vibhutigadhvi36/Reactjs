function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-contact">

          <div className="footer-logo">
            <img src="/Images/logo.png" alt="PetPal" />
          </div>

          <p>
            555 A, East Manster Street, Ready
            <br />
            Halley Neon, Uk 4512
          </p>

          <p className="footer-phone">+000 123 45678 44</p>

          <p>Supportinfo@gmail.com</p>

          <p className="follow-title">Follow Us On:</p>

          <div className="social-icons">
  <a href="#" aria-label="Facebook">
    <i className="fa-brands fa-facebook-f"></i>
  </a>

  <a href="#" aria-label="Twitter">
    <i className="fa-brands fa-twitter"></i>
  </a>

  <a href="#" aria-label="WhatsApp">
    <i className="fa-brands fa-whatsapp"></i>
  </a>

  <a href="#" aria-label="Instagram">
    <i className="fa-brands fa-instagram"></i>
  </a>

  <a href="#" aria-label="YouTube">
    <i className="fa-brands fa-youtube"></i>
  </a>
</div>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>
          <span className="footer-line"></span>

          <a href="#">Animal Rescue</a>
          <a href="#">Humane Education</a>
          <a href="#">Animal Hospital</a>
          <a href="#">Street Animal Feeding</a>
          <a href="#">Homepage 01</a>
          <a href="#">Pricing Table</a>

        </div>

        <div className="footer-hours">

          <h3>Opening Hours</h3>
          <span className="footer-line"></span>

          <div className="hours-row">
            <span>Monday</span>
            <span>8.00 - 21.00</span>
          </div>

          <div className="hours-row">
            <span>Tuesday</span>
            <span>8.00 - 21.00</span>
          </div>

          <div className="hours-row">
            <span>Thursday</span>
            <span>8.00 - 21.00</span>
          </div>

          <div className="hours-row">
            <span>Friday</span>
            <span>8.00 - 21.00</span>
          </div>

          <div className="hours-row">
            <span>Saturday</span>
            <span>8.00 - 21.00</span>
          </div>

          <div className="hours-row">
            <span>Sunday</span>
            <span>8.00 - 21.00</span>
          </div>

        </div>

        <div className="newsletter">

          <h3>
            Subscribe to our
            <br />
            newsletter
          </h3>

          <div className="newsletter-wave"></div>

          <input
            type="email"
            placeholder="Type E-mail"
          />

          <button>
            Subscribe Now
          </button>

        </div>

      </div>

      <div className="footer-bottom">

        <div className="footer-bottom-links">
          <a href="#">Support</a>
          <span>/</span>
          <a href="#">Terms & Conditions</a>
          <span>/</span>
          <a href="#">Privacy Policy</a>
          <span>/</span>
          <a href="#">Career</a>
        </div>

        <p>
          Copyright © 2024. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;