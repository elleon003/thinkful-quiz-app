const baseURL = 'http://127.0.0.1:8080/';
const DATA = {
  questions: {
    question: 'What year did the original Sims game come out?',
    answers: [
      "1998",
      "2000",
      "2002",
      "2004"
    ],
    correctAnswer: "2000",
    image: {
      url: new URL('/images/01-Sims-1.jpg', baseURL),
      alt: "Sim version of me taking a selfie",
    } 
  },
  results: {
    great: {
      phrase: "Congrats! Clearly you've spent at least a year's worth of hours on this game!",
      image: new URL('/images/my_sims_pics/02-me_selfie_sim.png', baseURL),
    },
  },
  currentScore: 0,
  quizStarted: false,
}