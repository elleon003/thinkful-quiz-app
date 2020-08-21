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

/* <section class="js-quiz-intro"></section>
    <section class="js-question"></section>
    <section class="js-response"></section>
    <section class="js-quiz-results"></section> */

function clearHTML(section) {
  return section.html(" ");
}

function renderQuiz() {
  if (DATA.quizStopped){
    clearHTML($('.js-quiz-results'));
    $('.js-quiz-intro').html(generateQuizIntroTemplate());

    // render current Question 
  } else if (DATA.currentQuestionNumber < DATA.questions.length) {
    clearHTML($('.js-quiz-intro'));
    $('.js-question').html(generateQuizQuestionTemplate(DATA.currentQuestionNumber));

    // render results template
  } else {
    clearHTML($('.js-response'));
    $('.js-quiz-results').html(generateQuizResultsTemplate());
  }
  
  console.log(`renderQuiz ran`);
}

function handleStartQuizButton() {
  // start quiz
  $('.js-quiz-intro').on ('click', '#js-start-quiz-button', function(event){
    DATA.quizStopped = false;
    console.log(`handleStartQuizButton clicked`);
    renderQuiz();
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