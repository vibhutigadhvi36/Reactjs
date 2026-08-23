function AllServices() {
  const services = [
    {
      title: "Pet Vaccination",
      icon: "💉",
    },
    {
      title: "Pet Grooming",
      icon: "✂️",
    },
    {
      title: "Pet Veterinary",
      icon: "🐾",
    },
    {
      title: "Pet Surgery",
      icon: "⚕",
    },
  ];

  return (
    <section className="services-section">

      <img
        src="/Images/services_shape01.png"
        className="services-shape services-shape-one"
        alt=""
      />

      <img
        src="/Images/services_shape02.png"
        className="services-shape services-shape-two"
        alt=""
      />

      <img
        src="/Images/services_shape03.png"
        className="services-shape services-shape-three"
        alt=""
      />

      <div className="services-top">

        <div className="services-title">

          <div className="services-small-title">
            DELIVERING WORLD CLASS HOME CARE
            <span>🐾</span>
          </div>

          <h2>
            Providing Our Best Pet Care &
            <br />
            Veterinary Services
          </h2>

        </div>

        <button className="all-services-btn">
          See All Services
          <span>→</span>
        </button>

      </div>

      <div className="services-container">

        {services.map((service, index) => (

          <div
            className={`service-card ${
              index === 0 ? "active-service" : ""
            }`}
            key={service.title}
          >

            <div className="service-card-inner">

              <div className="service-icon">
                <span>{service.icon}</span>
              </div>

              <h3>{service.title}</h3>

              <p>
                We will work with you to
                <br />
                develop individualised care
                <br />
                plans including
              </p>

              <button className="service-details-btn">
                See Details
                <span>→</span>
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default AllServices;