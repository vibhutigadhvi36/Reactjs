function Header() {
  return (
    <header className="navbar">

      <div className="logo">
        V<span>.</span>
      </div>

      <nav>
        <a href="#home" className="active">
          Home
        </a>

        <a href="#about">
          About
        </a>

        <a href="#portfolio">
          Work  
        </a>

        <a href="#clients">
          Contact Me 
        </a>
      </nav>

      <a href="#contact" className="contact-btn">
        <img src="message.png" alt="" /> &nbsp; Contact Me
      </a>

    </header>
  );
}

export default Header;