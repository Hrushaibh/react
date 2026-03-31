function submitQuiz() {
  const totalQuestions = 10;
  let score = 0;

  if (document.querySelector('input[name="q1"]:checked')?.value === "a") score++;
  if (document.querySelector('input[name="q2"]:checked')?.value === "b") score++;
  if (document.querySelector('input[name="q3"]:checked')?.value === "a") score++;
  if (document.querySelector('input[name="q4"]:checked')?.value === "b") score++;
  if (document.querySelector('input[name="q5"]:checked')?.value === "a") score++;
  if (document.querySelector('input[name="q6"]:checked')?.value === "a") score++;
  if (document.querySelector('input[name="q7"]:checked')?.value === "a") score++;
  if (document.querySelector('input[name="q8"]:checked')?.value === "a") score++;
  if (document.querySelector('input[name="q9"]:checked')?.value === "a") score++;
  if (document.querySelector('input[name="q10"]:checked')?.value === "a") score++;

  const percentage = Math.round((score / totalQuestions) * 100);

  if (score === 0) {
    alert("You scored 0/10. Review the modules and try again!");
  } else if (score < 6) {
    alert(`Your Score: ${score}/${totalQuestions} (${percentage}%).\nKeep practicing and retry the quiz.`);
  } else {
    alert(`Great job! You scored ${score}/${totalQuestions} (${percentage}%).\nYou qualify for the certificate.`);
    window.location = "certificate.html";
  }
}