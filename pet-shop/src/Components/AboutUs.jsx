function AboutUs() {
  return (
    <section className="about-section">

      <div className="about-left">

        <img
          src="/Images/about-img1.png"
          className="about-dog"
          alt="Pet care dog"
        />

        <div className="working-video">

          <div className="video-text">
            Watch Our
            <br />
            Working Video
          </div>

          <div className="play-button">
            ▶
          </div>

        </div>


        <div className="about-cat">
          ♡
        </div>

      </div>

      <div className="about-content">

        <div className="about-subtitle">
          KNOW MORE US
          
        </div>

        <h2>
          Our Passion Is Providing
          <br />
          Superior Pet Care
        </h2>

        <div className="experience-row">

          <div className="experience-box">

            <strong>15</strong>

            <span>Yr</span>

            <small>
              Experience
            </small>

          </div>


          <div className="experience-line"></div>


          <p>
            Come see how I'm styling these final days of
            summer with bright palettes and pops of color
            that will dazzle your wardrobe year round!
          </p>

        </div>

        <p className="about-description">
          We will work with you to develop individualised
          care plans, including management of chronic
          diseases. We are committed to being the region's
          premier healthcare network providing patient
          centered care that inspires.
        </p>

        <div className="about-bottom">

          <img
            src="/Images/author-sign.png"
            className="author-sign"
            alt="Dr. Richard signature"
          />


          <div className="bottom-divider"></div>

          <div className="author-images">

            <img
              src="/Images/about-author-01.png"
              alt="Doctor"
            />

            <img
              src="/Images/about-author-02.png"
              alt="Doctor"
            />

            <img
              src="/Images/about-author-03.png"
              alt="Doctor"
            />

            <img
              src="/Images/about-author-04.png"
              alt="Doctor"
            />

          </div>

          <div className="review-info">

            <div className="stars">
              ★★★★★
            </div>

            <span>
              4.7 (1,567 Reviews)
            </span>

          </div>

        </div>

      </div>

    </section>
    
  );
}

export default AboutUs;