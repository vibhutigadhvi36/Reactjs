function Slider() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hello">Hello,</p>

        <h1>
          I'm <span>Vibhuti</span>
        </h1>

        <h2>Full Stack Developer</h2>

        <p className="description">
          I am a passionate web developer who enjoys creating beautiful,
          responsive and user-friendly websites.
        </p>

        <button className="hire-btn">
          <img src="briefcase.png" alt="" /> &nbsp; Hire me
        </button> 

      </div>

      <div className="hero-image">
        <img
          src="Me.png"
          alt="Vibhuti"
        />
      </div>

    </section>
  );
}

export default Slider;