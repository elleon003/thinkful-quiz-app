function generateQuizIntroTemplate(){
  // when invoked, add the html intro template into DOM
  return `
    <h2>How much do you know about the Sims?</h2>
    <p>Take this short quiz to find out!</p>
    <div class="featured-img">
      <img src="images/my_sims_pics/01-me_computer.png"
      alt="Sim version of me at computer">
    </div>
    <button tabindex="0" id="js-start-quiz-button">Start The Quiz!</button>
`;
}


function generateAnswersTemplate(answers) {
  // Creates the radio buttons of answers
  let answerOptions = "";
  for (let a in answers) {
    answerOptions +=
   `<input role="button" class="js-answers" type="radio" value="${answers[a]}" id="${answers[a]}" name="answers" required>
    <label for="${answers[a]}" class="answer-label">${answers[a]}</label>
    `;
  }
  return answerOptions;
}

function generateQuizQuestionTemplate(questionNumber) {
  let answers = generateAnswersTemplate(DATA.questions[questionNumber].answers);
  return `
    <div class="question-score-display">
      <h2>Question ${questionNumber + 1}/10</h2>
      <h3>Current Score: ${DATA.currentScore}</h3>
    </div>
    <div class="thumbnail-img">
      <img src="${DATA.questions[questionNumber].image.url}" alt="${DATA.questions[questionNumber].image.alt}">
    </div>
    <div class="js-questions-results-display questions-results-display">
      <p class="quiz-question"><span class="question-indicator"> Q: </span>${DATA.questions[questionNumber].question}</p>
      <form class="js-question-form">
        ${answers}
        <input role="button" type="submit" value="Submit Answer">
      </form>
    </div>
  `   
}

function generateAnswerTemplate(correctAnswer, answeredCorrectly) {
  let QuizQuestionHeader = renderQuiz();
  if (answeredCorrectly){
    return QuizQuestionHeader +=
    $('.js-questions-results-display').html(
      `
      <p><strong>${correctAnswer}</strong> is correct!!</p>
      <button tabindex="0" class="js-next-question-button">Moving On!</button>
     `
    );
  } else {
    return QuizQuestionHeader += $('.js-questions-results-display').html(
      `
      <p>Nope! The correct answer is <strong>${correctAnswer}</strong></p>
      <button tabindex="0" class="js-next-question-button">Moving On!</button>
      `
    );
  }
}

function generateQuizFinalResultsTemplate(currentScore) {
  let status;
  if (currentScore >= 7){
    status = DATA.results.great;
  } else if (currentScore >= 4) {
    status = DATA.results.good;
  } else {
    status = DATA.results.bad;
  }
  return `
    <h2>Final score: ${currentScore}/10</h2>
    <div class="featured-img">
      <img src="${status["image"]["url"]}" alt="${status["image"]["alt"]}">
    </div>
    <p>${status["phrase"]}</p>
    <button tabindex="0" id="js-restart-quiz-button">Restart The Quiz!</button>
  `
}
