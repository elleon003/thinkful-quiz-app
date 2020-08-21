function generateQuizIntroTemplate(){
  // when invoked, add the html intro template into DOM
  return `
    <h2>How much do you know about the Sims?</h2>
    <p>Take this short quiz to find out!</p>
    <div class="featured-img">
      <img src="/images/my_sims_pics/01-me_computer.png"
      alt = "Sim version of me at computer">
    </div>
    <a role="button" tabindex="0" class="quiz-nav" id="js-start-quiz-button" href="#">Start The Quiz!</a>
`;
}


function generateAnswersTemplate(answers) {
  // Creates the radio buttons of answers
  let answerOptions = "";
  for (let a in answers) {
    answerOptions +=
   `<input role="button" type="radio" id="${answers[a]}" name="${answers[a]}" required>
    <label for="${answers[a]}" class="answer-label">${answers[a]}</label>
    `;
  }
  return answerOptions;
}

function generateQuizQuestionTemplate(questionNumber) {
  let answers = generateAnswersTemplate(DATA.questions[questionNumber].answers);
  return `
    <h2>Question ${questionNumber + 1}/10</h2>
      <h3>Current Score: ${DATA.currentScore}</h3>
      <p>${DATA.questions[questionNumber].question}</p>
      <div class="thumbnail-img">
        <img src="${DATA.questions[questionNumber].image.url}" alt="${DATA.questions[questionNumber].image.alt}">
      </div>
      <form action="response-template.html">
        ${answers}
        <input role="button" type="submit" value="Submit Answer">
      </form>
  `
}