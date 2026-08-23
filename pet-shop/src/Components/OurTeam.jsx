function OurTeam() {
  return (
    <section className="our-team-section">

      <img
        src="/Images/team_shape.svg"
        alt=""
        className="team-top-shape"
      />

      <div className="our-team-container">

        <div className="team-heading">

          <p className="team-small-title">
            WE CHANGE YOUR LIFE & WORLD 🐾
          </p>

          <h2>
            Meet Our Expertise
            <br />
            Pet Doctors
          </h2>

        </div>

        <div className="doctors-grid">

          <div className="doctor-card">

            <div className="doctor-image-wrapper">

              <img
                src="/Images/OurTeam1images.png"
                alt="Daria Andaloro"
                className="doctor-image"
              />

            </div>

            <h3>Daria Andaloro</h3>

            <p>Veterinary Technician</p>

          </div>

          <div className="doctor-card">

            <div className="doctor-image-wrapper">

              <img
                src="/Images/OurTeam2images.png"
                alt="Michael Brian"
                className="doctor-image"
              />

            </div>

            <h3>Michael Brian</h3>

            <p>Medicine Specialist</p>

          </div>

          <div className="doctor-card">

            <div className="doctor-image-wrapper">

              <img
                src="/Images/OurTeam3images.png"
                alt="Kenroly Gajon"
                className="doctor-image"
              />

            </div>

            <h3>Kenroly Gajon</h3>

            <p>Food Technician</p>

          </div>

          <div className="doctor-card">

            <div className="doctor-image-wrapper">

              <img
                src="/Images/OurTeam4images.png"
                alt="Lizay Ariana"
                className="doctor-image"
              />

            </div>

            <h3>Lizay Ariana</h3>

            <p>Veterinary Technician</p>

          </div>

        </div>

        <div className="team-bottom">

          <a href="#">
            Our Valuable Expert Doctors Team
          </a>

          <button>
            See All Doctors
            <span>→</span>
          </button>

        </div>

      </div>

    </section>
  );
}

export default OurTeam;