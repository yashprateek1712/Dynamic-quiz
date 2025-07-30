let ques = document.querySelector(".ques");
let optionscontainer = document.querySelector(".ans");
let timerElement = document.getElementById("timer");
let score = 0;
let resultBox = document.getElementById("result");
let finalScore = document.getElementById("final-score");
let retryBtn = document.getElementById("retry-btn");

const userscore=0;


const questions = [
  {
    question: "Which space telescope captured the first direct image of an exoplanet?",
    options: ["Kepler", "Hubble", "James Webb", "Spitzer"],
    answer: "James Webb"
  },
  {
    question: "What is the name of India’s solar observatory mission launched in 2023?",
    options: ["Aditya-L1", "Chandra-X", "Surya-V", "SolarMax"],
    answer: "Aditya-L1"
  },
  {
    question: "Which element is most abundant in the Sun?",
    options: ["Oxygen", "Hydrogen", "Carbon", "Helium"],
    answer: "Hydrogen"
  },
  {
    question: "Which country became the first to land near the Moon’s south pole?",
    options: ["USA", "China", "India", "Russia"],
    answer: "India"
  },
  {
    question: "What is the name of the largest known galaxy in the universe?",
    options: ["Andromeda", "IC 1101", "Messier 87", "GN-z11"],
    answer: "IC 1101"
  },
  {
    question: "Which NASA mission aims to test planetary defense by crashing into an asteroid?",
    options: ["DART", "Artemis", "Orion", "LUCY"],
    answer: "DART"
  },
  {
    question: "Which is the coldest known place in the universe?",
    options: ["Boomerang Nebula", "Uranus", "Pluto", "Voyager 2"],
    answer: "Boomerang Nebula"
  },
  {
    question: "Which is the first country to create a government ministry for Artificial Intelligence?",
    options: ["China", "UAE", "USA", "Japan"],
    answer: "UAE"
  },
  {
    question: "Which Indian state became the first to implement AI in classrooms in 2024?",
    options: ["Kerala", "Tamil Nadu", "Karnataka", "Delhi"],
    answer: "Kerala"
  },
  {
    question: "What is the most distant object observed by the James Webb Space Telescope so far?",
    options: ["GN-z11", "MACS0647-JD", "HD1", "WHL0137-LS"],
    answer: "WHL0137-LS"
  },
  {
    question: "Which organization released the 'Global Risks Report 2024'?",
    options: ["IMF", "UN", "World Bank", "World Economic Forum"],
    answer: "World Economic Forum"
  },
  {
    question: "What is the name of the first Indian female astronaut selected for Gaganyaan training?",
    options: ["Kalpana Ramesh", "Pratibha Sharma", "Shubhangi Swaroop", "No name revealed yet"],
    answer: "No name revealed yet"
  },
  {
    question: "Which moon is thought to have an underground ocean and could host life?",
    options: ["Phobos", "Europa", "Titan", "Enceladus"],
    answer: "Europa"
  },
  {
    question: "Which telescope replaced Hubble as the most powerful space telescope?",
    options: ["Chandra", "James Webb", "Planck", "SOHO"],
    answer: "James Webb"
  },
  {
    question: "In 2024, which country banned the export of gallium and germanium critical for semiconductors?",
    options: ["China", "USA", "Russia", "South Korea"],
    answer: "China"
  },
  {
    question: "Which exoplanet is considered most Earth-like in terms of size and habitability?",
    options: ["Kepler-22b", "Proxima b", "TOI 700 d", "TRAPPIST-1e"],
    answer: "TRAPPIST-1e"
  },
  {
    question: "Which Indian city is hosting the International Space Conference 2024?",
    options: ["Bangalore", "Hyderabad", "Ahmedabad", "Pune"],
    answer: "Hyderabad"
  },
  {
    question: "Which country’s rover failed during its attempt to land on the moon in 2023?",
    options: ["Japan", "Russia", "Israel", "USA"],
    answer: "Russia"
  },
  {
    question: "Which is the only planet that rotates clockwise on its axis?",
    options: ["Earth", "Venus", "Mars", "Jupiter"],
    answer: "Venus"
  },
  {
    question: "Which Indian private space company successfully launched a rocket in 2024?",
    options: ["Skyroot Aerospace", "Agnikul Cosmos", "Pixxel", "Bellatrix"],
    answer: "Agnikul Cosmos"
  }
];


let askedques = [];
let timeLeft = 30;
let timerInterval;
let isAnswered = false;


function startTimer() {
  clearInterval(timerInterval);
  timeLeft = 30;
  timerElement.textContent = `Time left: ${timeLeft}s`;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `Time left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerElement.textContent = "Time's up!";
      setTimeout(() => {
        loadques();
      }, 500);
    }
  }, 1000);
}

function randques() {
  if (askedques.length === questions.length) {
    ques.innerHTML = "<i> Quiz over </i>";
    
    timerElement.textContent = "";
    return null;
  }

  let idx;
  do {
    idx = Math.floor(Math.random() * questions.length);
  } while (askedques.includes(idx));

  askedques.push(idx);
  return questions[idx];
}

function loadques() {
  isAnswered = false;
  const indxQ = randques();
 if (!indxQ) {
  clearInterval(timerInterval);
  timerElement.textContent = "";

  
  finalScore.innerText = `You scored ${score} out of ${questions.length}`;
  resultBox.style.display = "block";

 
  ques.style.display = "none";
  optionscontainer.style.display = "none";

  return;
}


  startTimer(); 

  ques.innerText = indxQ.question;
  let opt1 = document.querySelector("#op1");
  let opt2 = document.querySelector("#op2");
  let opt3 = document.querySelector("#op3");
  let opt4 = document.querySelector("#op4");

  opt1.textContent = indxQ.options[0];
  opt2.textContent = indxQ.options[1];
  opt3.textContent = indxQ.options[2];
  opt4.textContent = indxQ.options[3];

  const optionDivs = document.querySelectorAll(".option");
  optionDivs.forEach(div => {
    div.onclick = () => {
      if (isAnswered) return;
      isAnswered = true;

      clearInterval(timerInterval); 

      const selectedAnswer = div.textContent.trim();
      const selectedElement = div;

      if (selectedAnswer === indxQ.answer) {
        selectedElement.style.backgroundColor = "green";
        score ++;
      } else {
        selectedElement.style.backgroundColor = "red";
           optionDivs.forEach(opt => {
    if (opt.textContent.trim() === indxQ.answer) {
      opt.style.backgroundColor = "green";
    }
  });
      }

      setTimeout(() => {
        optionDivs.forEach(opt => opt.style.backgroundColor = "");
        loadques();
      }, 600);
    };
  });
}
retryBtn.onclick = () => {
   score = 0;
  askedques = [];
  resultBox.style.display = "none";
  ques.style.display = "block";
  optionscontainer.style.display = "block";

  loadques(); 
};

window.onload = loadques;
