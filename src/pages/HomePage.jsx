import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

function HomePage() {
  return (
    <>
      <PageHero
        title="Electronic Devices Learning Platform"
        subtitle="Understand how televisions, smartphones and core components really work."
      />
      <main className="container">
        <section className="section">
          <h2>About Electronic Devices</h2>
          <div className="card">
            <p>
              Electronic devices use carefully designed circuits to sense,
              process and display information. Everyday examples include
              televisions, smartphones, computers and radios.
            </p>
            <p>
              This platform walks you through the internal structure and working
              principles of these devices using diagrams, explanations, and
              short quizzes so you can build strong fundamentals.
            </p>
          </div>
        </section>
        <section className="section">
          <h2>Learning Modules</h2>
          <div className="grid">
            <div className="card">
              <h3>Television Technology</h3>
              <p>Explore LCD/LED TV architecture, signal flow, and display panels.</p>
              <Link to="/television">
                <button type="button">Start Module</button>
              </Link>
            </div>
            <div className="card">
              <h3>Mobile Phone Architecture</h3>
              <p>See how processors, memory, sensors and radios work together.</p>
              <Link to="/mobile">
                <button type="button">Start Module</button>
              </Link>
            </div>
            <div className="card">
              <h3>Electronic Components</h3>
              <p>Review essential components like resistors, capacitors and transistors.</p>
              <Link to="/components">
                <button type="button">Start Module</button>
              </Link>
            </div>
          </div>
        </section>
        <section className="section">
          <h2>Get Started</h2>
          <div className="grid">
            <div className="card">
              <h3>Take the Quiz</h3>
              <p>Check your understanding of core concepts with a quick quiz.</p>
              <Link to="/quiz">
                <button type="button">Go to Quiz</button>
              </Link>
            </div>
            <div className="card">
              <h3>Earn a Certificate</h3>
              <p>Complete the quiz and view your certificate of completion.</p>
              <Link to="/certificate">
                <button type="button">View Certificate</button>
              </Link>
            </div>
            <div className="card">
              <h3>References</h3>
              <p>Explore external resources to dive deeper into electronics.</p>
              <Link to="/references">
                <button type="button">View References</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
