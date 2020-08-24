const baseURL = 'https://elleon003.github.io/';

const DATA = {
  questions: [
    {
      question: 'What year did the original Sims game come out?',
      answers: 
      [
        "1998",
        "2000",
        "2002",
        "2004"
      ],
      correctAnswer: "2000",
      image: {
        url: 'images/01-Sims-1.jpg',
        alt: "Screenshot from Sims 1 - sims in a living room",
      }
    },
    {
      question: "What type of money do The Sims use?",
      answers:
      [
        "Kachings",
        "Sim Bucks",
        "Simcoins",
        "Simoleons"
      ],
      correctAnswer: "Simoleons",
      image: 
      {
        url: 'images/02-Sim-Money-Bag.jpg',
        alt: "Sack of Sim money",
      }
    },
    {
      question: "What was the name of the neighborhood that was added with The Sims 2: Apartment Life?",
      answers: 
      [
        "Belladonna Cove",
        "Veronaville",
        "Riverblossom Hills",
        "Desiderata Valley"
      ],
      correctAnswer: "Belladonna Cove",
      image:
      {
        url: 'images/03-Sims-2-World.jpg',
        alt: "Aerial view of a Sims 2 World",
      }
    },
    {
      question: "What is the small diamond that hovers over a sim's head called?",
      answers: 
      [
        "Blingometer",
        "Life Diamond",
        "Plumbob",
        "It doesn't have a name",
      ],
      correctAnswer: "Plumbob",
      image: 
      {
        url: 'images/04-Sims-Diamond.jpg',
        alt: "Toddler Sim talking to her babysitter.",
      }
    },
    {
      question: "What is The Sims' word for hello?",
      answers:
      [
        "Sha",
        "Dag Dag",
        "Nooboo",
        "Sul Sul",
      ],
      correctAnswer: "Sul Sul",
      image: 
      {
        url: 'images/05-Sims-Greeting.jpg',
        alt: "Two Sims waving at each other."
      }
    },
    {
      question: "What is the name of the name of the world that was added with The Sims 3: Late Night?",
      answers: 
      [
        "Moonlight Falls",
        "Bridgeport",
        "Roaring Heights",
        "Twinbrook"
      ],
      correctAnswer: "Bridgeport",
      image:
      {
        url: 'images/06-Sims-3-World.jpg',
        alt: "Aerial view of a Sims 3 World."
      }
    },
    {
      question: "Which is the only place a sim cannot WooHoo in the Sims 4?",
      answers: 
      [
        "Pool",
        "The Backyard Observatory",
        "Waterfall",
        "Pile Of Leaves",
      ],
      correctAnswer: "Pool",
      image: 
      {
        url: 'images/07-Sims-WooHoo.jpg',
        alt: "Sims in mid 'WooHoo' in bed."
      }
    },
    {
      question: "What is the Sims language called?",
      answers: 
      [
        "Minionese",
        "Simspeak",
        "Danish",
        "Simlish",
      ],
      correctAnswer: "Simlish",
      image: 
      {
        url: 'images/08-Sims-Talking.jpg',
        alt: "Sim couple arguing over pancakes."
      }
    },
    {
      question: "What is the max number of sims that can live in a household?",
      answers: 
      [
        "6",
        "8",
        "10",
        "There is no max!"
      ],
      correctAnswer: "8",
      image: 
      {
        url: 'images/09-Sims-Family.jpg',
        alt: "A family of five Sims sitting at a dining table"
      }
    },
    {
      question: "What is the name of the world added with The Sims 4: City Living?",
      answers: 
      [
        "Downtown",
        "Del Sol Valley",
        "San Myshuno",
        "Windenburg"
      ],
      correctAnswer: "San Myshuno",
      image: 
      {
        url: 'images/10-Sims-4-World.jpg',
        alt: "Aerial view of a Sims 3 World."
      }
    }    
  ],
  results: {
      // Score of 7 - 10
      great: 
      {
        phrase: "Congrats! Clearly you've spent at least a year's worth of hours on this game!",
        image: {
          url: 'images/my_sims_pics/02-me_selfie_sim.png',
          alt: "Sim version of me taking a selfie",
        }
      },
      // Score of 4 - 6
      good: 
      {
        phrase: "OK, so you played at least once in the last decade. Good job!",
        image:
        {
          url: 'images/my_sims_pics/03-me_laughing_sim.png',
          alt: "Sim version of me laughing."
        }
      },
      // Score of 3 or less
      bad:
      {
        phrase: "Um...do you know what a Sim is?",
        image:
        {
          url: 'images/my_sims_pics/04-me_confused_sim.png',
          alt: "Sim version of me looking annoyed and confused."
        }
    }
  },
  currentScore: 0,
  quizStopped: true,
  currentQuestionNumber: 0,
}