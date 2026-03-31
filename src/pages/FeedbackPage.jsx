import { useState } from "react";
import PageHero from "../components/PageHero";

function FeedbackPage() {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    experience: "",
    module: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setFeedback({ name: "", email: "", experience: "", module: "" });
  };

  return (
    <>
      <PageHero
        small
        title="Feedback"
        subtitle="Help us improve this electronics learning experience."
      />
      <main className="container">
        <section className="section">
          <div className="card">
            <h2>Send Your Feedback</h2>
            <p className="helper-text">
              Tell us what you liked, what confused you, and what topics you
              would like to see next.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    required
                    value={feedback.name}
                    onChange={(e) =>
                      setFeedback((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={feedback.email}
                    onChange={(e) =>
                      setFeedback((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="experience">Your Experience</label>
                <textarea
                  id="experience"
                  rows="6"
                  required
                  value={feedback.experience}
                  onChange={(e) =>
                    setFeedback((prev) => ({ ...prev, experience: e.target.value }))
                  }
                />
              </div>
              <div className="form-group">
                <label htmlFor="module">Module you used most</label>
                <select
                  id="module"
                  value={feedback.module}
                  onChange={(e) =>
                    setFeedback((prev) => ({ ...prev, module: e.target.value }))
                  }
                >
                  <option value="">Select a module (optional)</option>
                  <option value="tv">Television Technology</option>
                  <option value="mobile">Mobile Architecture</option>
                  <option value="components">Electronic Components</option>
                  <option value="quiz">Quiz</option>
                </select>
              </div>
              <button type="submit">Submit Feedback</button>
            </form>
            {submitted ? <p className="helper-text">Thank you for your feedback.</p> : null}
          </div>
        </section>
      </main>
    </>
  );
}

export default FeedbackPage;
