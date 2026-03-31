import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHero from "../components/PageHero";

const questions = [
  { id: "q1", text: "1. Component that limits current?", options: ["Resistor", "Capacitor"], answer: "a" },
  { id: "q2", text: "2. Brain of a smartphone?", options: ["Battery", "Processor"], answer: "b" },
  { id: "q3", text: "3. LCD requires?", options: ["Backlight", "Speaker"], answer: "a" },
  { id: "q4", text: "4. RAM stores?", options: ["Permanent data", "Temporary data"], answer: "b" },
  { id: "q5", text: "5. Diode allows?", options: ["One-direction current", "Two-direction current"], answer: "a" },
  { id: "q6", text: "6. Battery type commonly used in phones?", options: ["Lithium-ion", "Lead-acid"], answer: "a" },
  { id: "q7", text: "7. A processor executes?", options: ["Instructions", "Sound"], answer: "a" },
  { id: "q8", text: "8. A transistor can work as a?", options: ["Switch", "Wire"], answer: "a" },
  { id: "q9", text: "9. IC stands for?", options: ["Integrated Circuit", "Internal Cable"], answer: "a" },
  { id: "q10", text: "10. Sensors in phones can detect?", options: ["Motion", "Color only"], answer: "a" },
];

function QuizPage() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState("");
  const navigate = useNavigate();

  const submitQuiz = () => {
    const score = questions.reduce(
      (count, q) => (answers[q.id] === q.answer ? count + 1 : count),
      0,
    );
    const percentage = Math.round((score / questions.length) * 100);
    if (score === 0) {
      setResult("You scored 0/10. Review the modules and try again!");
      return;
    }
    if (score < 6) {
      setResult(
        `Your Score: ${score}/${questions.length} (${percentage}%). Keep practicing and retry the quiz.`,
      );
      return;
    }
    if (score >= 6) {
      setResult(`Great job! You scored ${score}/${questions.length} (${percentage}%).`);
      navigate("/certificate");
      return;
    }
  };

  return (
    <>
      <PageHero
        small
        title="Electronics Quiz"
        subtitle="Test what you have learned about devices and components."
      />
      <main className="container">
        <section className="section">
          <div className="card">
            {questions.map((q) => (
              <div key={q.id} className="quiz-question">
                <p>{q.text}</p>
                <div className="quiz-options">
                  <label>
                    <input
                      type="radio"
                      name={q.id}
                      value="a"
                      checked={answers[q.id] === "a"}
                      onChange={(e) =>
                        setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))
                      }
                    />{" "}
                    {q.options[0]}
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={q.id}
                      value="b"
                      checked={answers[q.id] === "b"}
                      onChange={(e) =>
                        setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))
                      }
                    />{" "}
                    {q.options[1]}
                  </label>
                </div>
              </div>
            ))}
            <button type="button" onClick={submitQuiz}>
              Submit Quiz
            </button>
            {result ? <p className="helper-text">{result}</p> : null}
          </div>
        </section>
      </main>
    </>
  );
}

export default QuizPage;
