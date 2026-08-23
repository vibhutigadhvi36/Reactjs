
function HeroBanner() {
  return (
    <section className="hero">

      <img
        src="/Images/banner_shape01.png"
        className="shape shape-one"
        alt=""
      />

      <img
        src="/Images/bannershape02.png"
        className="shape shape-two"
        alt=""
      />

      <img
        src="/Images/bannershape03.png"
        className="shape shape-three"
        alt=""
      />

      <img
        src="/Images/bannershape04.png"
        className="shape shape-four"
        alt=""
      />

      <div className="hero-content">

        <h1>
          Trusted Pet
          <br />
          Care & Veterinary
          <br />
          Center
          <span className="heart">♥</span>
          Point
        </h1>

        <p>
          We provide trusted veterinary care and complete
          <br />
          pet wellness services for your beloved pets.
        </p>

        <button className="read-more">
          Read More
          <span>→</span>
        </button>

      </div>

      <div className="hero-image">

        <img
          src="/Images/bannerimg1.png"
          className="main-pet-image"
          alt="Pet care"
        /> 
        

        <div className="pet-badge">
          <div className="badge-text">
            HEALTHY • PETS • LOVE • BETTER •
          </div>

          <div className="badge-icon">
          </div>
        </div>

      </div>

       <img
        src="/Images/bannerimg02.png"
        className="Hero-Banner"
        alt=""
      />
      
    </section>
  );
}

export default HeroBanner;