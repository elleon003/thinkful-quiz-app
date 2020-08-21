function generateQuizIntroTemplate(){
  // when invoked, add the html intro template into DOM
  return `
    <h2>How much do you know about the Sims?</h2>
    <p>Take this short quiz to find out!</p>
    <div class="featured-img">
      <img src="/images/my_sims_pics/01-me_computer.png"
      alt = "Sim version of me at computer">
    </div>
    <a class="quiz-nav" id="js-start-quiz-button" href="#">Start The Quiz!</a>
`;
}