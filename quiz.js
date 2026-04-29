let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;

const questions = [
  {
    topic: "Brainrot",
    question: "Who is the brown stick ittalian brainrot",
    image: "./Sahur2.png",
    possibleAnswers: ["Tung tung sahur", "Bat guy", "Loggy the log"],
    correctAnswer: "Tung tung sahur",
  },
  {
    topic: "Brainrot",
    question: "What number is accompanied by a two hands alternating up and down movement",
    image: "",
    possibleAnswers: ["21", "67", "69"],
    correctAnswer: "67",
  },
  {
    topic: "Lolcows",
    question: "Who is the lolcow?",
    image: "",
    possibleAnswers: ["Charli D'Amelio", "Charlie Kirk", "Tophiachu", "George Washington"],
    correctAnswer: "Tophiachu",
  },
  {
    topic: "Lolcows",
    question: "Who is NOT a lolcow?",
    image: "",
    possibleAnswers: ["NovaOnline", "Tophiachu", "Kim Kardashion"],
    correctAnswer: "Kim Kardashion",
  },
  {
    topic: "Slang",
    image: "",
    question: "What is it called when beauty is the only way to thrive in life?",
    possibleAnswers: ["Looksmaxing", "beauty acceptance", "prettyboosting"],
    correctAnswer: "Looksmaxing",
  },
  {
    topic: "Finish the phrase",
    image: "",
    question: "She eat she the _____",
    possibleAnswers: ["Birthday", "Queen", "Boss"],
    correctAnswer: "Birthday",
  },
  {
    topic: "?",
    image: "",
    question: "Who is the aurthor of the noval :I Accidently Choked On A Crumbl Cookie And Died And Reincarnated As A SoundCloud Rappers Struggling Baby Mama?",
    possibleAnswers: ["Quan Millz", "George Orwell", "Maria Grace"],
    correctAnswer: "Quan Millz",
  }
];

const quizProgress = document.getElementById("quizProgress");
const questionContainer = document.getElementById("questionContainer");
const answerContainer = document.getElementById("answerContainer");
const imageContainer = document.getElementById("imageContainer");

function handleQuestion(index) {
  quizProgress.innerHTML = "";
  questions.forEach((question) => {
    quizProgress.innerHTML += "<span></span>";
  });
  let spans = document.querySelectorAll("span");
  for (let i = 0; i <= index; i++) {
    spans[i].classList.add("seen");
  }

  // topic/question
  questionContainer.innerHTML = `<p>${questions[index].topic}</p>
  <p>${questions[index].question}</p>
  `;
  

  imageContainer.innerHTML = `<img src="${questions[index].image}" />`;

  // answers
  answerContainer.innerHTML = "";
  questions[index].possibleAnswers.forEach((answer) => {
    answerContainer.innerHTML += `<button>${answer}</button>`;
  });

  let answers = document.querySelectorAll("button");
  answers.forEach((answer) => {
    answer.addEventListener("click", (e) => {
      // 1. Update the counts
      if (e.target.textContent === questions[index].correctAnswer) {
        correctCount++;
        console.log("correct!");
      } else {
        wrongCount++;
        console.log("wrong");
      }

      // 2. Check if it's the last question
      if (currentQuestionIndex === questions.length - 1) {
        // 3. Perform the redirect based on score
        if (correctCount > wrongCount) {
          window.location.href = "resultNG.html"; 
        } else {
          window.location.href = "ResultOG.html"; 
        }
      } else {
        currentQuestionIndex++;
        handleQuestion(currentQuestionIndex);
      }
    });
  });
}

handleQuestion(currentQuestionIndex);