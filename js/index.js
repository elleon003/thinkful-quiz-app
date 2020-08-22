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
    $('.js-question-answer').html(generateQuizQuestionTemplate(DATA.currentQuestionNumber));

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
  // This function is responsible for accepting user answer 
  $('.js-question-answer').on('submit','.js-question-form', function(event){
    event.preventDefault();
    console.log(`handleSubmitAnswerButton clicked`);
    let answer = getUserAnswer($('.js-question-form').find('.js-answers'));
    scoreAnswer(answer, DATA.questions[DATA.currentQuestionNumber].correctAnswer);
  });
}

function getUserAnswer(answers){
  let value;
  // capture submitted answer to current question
  for (let answer in answers) {
    if (answers[answer].checked) {
      value = answers[answer].value;
      break
    }
  }
  return value;
}

function scoreAnswer(userAnswer, correctAnswer){
  let answeredCorrectly;
  // take submitted answer and compare to the question's correct answer
  if (userAnswer === correctAnswer) {
    DATA.currentScore++;
    answeredCorrectly = true;
  } else {
    answeredCorrectly = false;
  }
  return generateAnswerTemplate(correctAnswer, answeredCorrectly);
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