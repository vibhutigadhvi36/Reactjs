import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import StudentCard from "./components/StudentCard";
import UseState from "./components/UseState";
import "./App.css";

function App() {
  return (
    <div className="app">

      <Header />

      <main>

        <Welcome />

        <section className="students-section">

          <h2>Student Cards</h2>

          <div className="student-cards">

            <StudentCard
              name="Vibhuti Gadhvi"
              city="Surat"
              state="Gujarat"
              country="India"
              course="Full Stack Development"
            />

            <StudentCard
              name="Aarav Shah"
              city="Ahmedabad"
              state="Gujarat"
              country="India"
              course="Web Development"
            />

            <StudentCard
              name="Priya Patel"
              city="Vadodara"
              state="Gujarat"
              country="India"
              course="Digital Marketing"
            />

            <StudentCard
              name="Rohan Mehta"
              city="Mumbai"
              state="Maharashtra"
              country="India"
              course="Software Development"
            />

            <StudentCard
              name="Ananya Sharma"
              city="Delhi"
              state="Delhi"
              country="India"
              course="Data Science"
            />

          </div>

        </section>

        <UseState />

      </main>

      <Footer />

    </div>
  );
}

export default App;