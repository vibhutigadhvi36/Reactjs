function Portfolio() {
  return (
    <section className="portfolio-section" id="portfolio">

      <h2>
        My <span>Work</span>
      </h2>

      <div className="portfolio-container">

        {/* Project 1 */}

        <div className="portfolio-card">

          <h3>Pet Shop</h3> 

          <p>
            A responsive pet shop website created using React.
          </p>

          <button>
            View Project
          </button>

        </div> 


        {/* Project 2 */}

        <div className="portfolio-card">

          <h3>Weather App</h3>

          <p>
            A weather application that displays weather information.
          </p>

          <button>
            View Project
          </button>

        </div>


        {/* Project 3 */}

        <div className="portfolio-card">

          <h3>Task Manager</h3>

          <p>
            A task management application with useful features.
          </p>

          <button>
            View Project
          </button>

        </div>

      </div>

    </section>
  );
}

export default Portfolio;