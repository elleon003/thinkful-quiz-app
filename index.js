/* Technical Requirements: 
Include a render() function, that conditionally regenerates the view each time the store is updated.
Include single-purpose template generation functions.
Include single-purpose event handler functions.
Call all functions from a jQuery initializing
function.
Render answer choices in a <form> .
Use semantic HTML, along with CSS and jQuery.
Follow a11y best practices.
Be fully usable by keyboard(which will be easy enough
  if you start with a form).
Use responsive design.
*/

function renderQuiz() {
  // This function is responsible for presenting the starting screen of the quiz
  console.log(`renderQuiz ran`);
}

function handleStartQuizButton() {
  // This function is responsible for generating and presenting the current question.
  console.log(`handleStartQuizButton clicked`);
}

function handleSubmitAnswerButton() {
  // This function is responsible for accepting user answer and presenting the result of the current question
  console.log(`handleSubmitAnswerButton clicked`);
}

function handleNextQuestionButton() {
  // This function is responsible for moving the user to the next question, or to the final result if at the end of the quiz.
  console.log(`handleNextQuestionButton clicked`);
}

function runQuiz() {
  // This is the main quiz function - powers all the primary quiz functions
  renderQuiz();
  handleStartQuizButton();
  handleSubmitAnswerButton();
  handleNextQuestionButton();
}

$(runQuiz);