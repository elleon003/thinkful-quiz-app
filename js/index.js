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
  // check for quizStarted status
  if (DATA.quizStopped){
    $('.js-quiz-intro').html(generateQuizIntroTemplate());
  }
  // If quiz is not started, generate intro page
  // If started, generate correct question
  // If at the end, generate final page
  console.log(`renderQuiz ran`);
}

function handleStartQuizButton() {
  // start quiz
  $('.js-quiz-intro').on ('click', '#js-start-quiz-button', function(event){
    console.log(`handleStartQuizButton clicked`);
  });
  
}

function handleSubmitAnswerButton() {
  // This function is responsible for accepting user answer and presenting the result of the current question
}

function handleNextQuestionButton() {
  // This function is responsible for moving the user to the next question, or to the final result if at the end of the quiz.
}

function runQuiz() {
  // This is the main quiz function - powers all the primary quiz functions
  renderQuiz();
  handleStartQuizButton();
  handleSubmitAnswerButton();
  handleNextQuestionButton();
}

$(runQuiz);