
function Header() {
  return (
    <>
    
      <div className="top-bar">
        <div className="top-left">
          <span>
            <img src="/Images/location.png" alt="location" />
            59 Jake Street Brooklyn, New York
          </span>

          <span className="separator">/</span>

          <span>
            <img src="/Images/email.png" alt="email" />
            Petspostinfo@gmail.com
          </span>
        </div>

        <div className="top-right">
          <span>
            <img src="/Images/clock.svg" alt="clock" />
            Opening Hour: 09.00 am - 11.00 pm
          </span>

          <span className="separator">/</span>

          <div className="social-icons">
            <img src="/Images/facebook.svg" alt="facebook" />
            <img src="/Images/twitter.svg" alt="twitter" />
            <img src="/Images/whatsapp.svg" alt="whatsapp" />
            <img src="/Images/instagram.svg" alt="instagram" />
            <img src="/Images/youtube.svg" alt="youtube" />
          </div>
        </div>
      </div>

      <header className="header">
        <div className="logo">
          <img src="/Images/logo.png" alt="PetPal Logo" />
        </div>

        <nav className="nav-menu">
          <a href="#" className="active">Home</a>
          <span className="dropdown">⌄</span>

          <a href="#">About</a>

          <a href="#">Shop</a>
          <span className="dropdown">⌄</span>

          <a href="#">Pages</a>
          <span className="dropdown">⌄</span>

          <a href="#">Contacts</a>
        </nav>

        <div className="header-actions">
          <span className="search-icon">⌕</span>

          <span className="slash">/</span>

          <div className="cart">
            🛍
            <span className="cart-count">0</span>
          </div>

          <span className="menu-icon">☰</span>

          <button className="appointment-btn">
             &nbsp; Appointment
          </button>
        </div>
      </header>
    </>
  );
}

export default Header;