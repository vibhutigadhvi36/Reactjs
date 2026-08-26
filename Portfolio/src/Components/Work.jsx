function Work() {
  return (
    <section className="work-section" id="about">

      <h2>What I do</h2>

      <p className="work-intro">
        I am a skilled and passionate web developer with experience in
        creating visually appealing and user-friendly websites. I have a
        strong understanding of design and a keen eye for detail. I am
        proficient in HTML, CSS, JavaScript, React, and modern web
        development technologies.
      </p>


      <div className="work-container">

        <div className="work-card">

          <div className="work-icon">
            <img src="web-design.png" alt="" />
          </div>

          <div className="work-content">
            <h3>UI/UX design</h3>

            <p>
              I create clean, attractive and user-friendly designs
              that provide a great experience for users.
            </p>
          </div>

        </div>


        <div className="work-card">

          <div className="work-icon">
            <img src="programming.png" alt="Computer" />
          </div>

          <div className="work-content">
            <h3>Website design</h3>

            <p>
              I build responsive and modern websites that work
              smoothly across different devices.
            </p>
          </div>

        </div>

        <div className="work-card">

          <div className="work-icon">
            <img src="Programmings.png" alt="" />
          </div>

          <div className="work-content">
            <h3>App design</h3>

            <p>
              I create simple and engaging application interfaces
              with a focus on usability and performance.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Work;