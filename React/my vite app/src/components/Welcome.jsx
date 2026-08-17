import reactLogo from "../assets/react.svg";

function Welcome() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <section className="welcome">
      {/* Welcome Section */}
      <h2>Welcome to My React Project</h2>

      <div className="student-info">
        <p>
          <strong>Student Name:</strong> Vibhuti Gadhvi
        </p>

        <p>
          <strong>Course:</strong> Full Stack Development
        </p>

        <p>
          <strong>Institute Name:</strong> Red & White Multimedia Education
        </p>

        <p>
          <strong>Current Date:</strong> {currentDate}
        </p>
      </div>

      <div className="image-section">
        <img
          src={reactLogo}
          alt="React Logo"
          className="react-image"
        />
      </div>
    </section>
  );
}

export default Welcome;