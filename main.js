/*jshint esversion: 6 */
const start = document.getElementById('start');
const quiz = document.getElementById('quiz');
const question = document.getElementById('questions');
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const choiceD = document.getElementById('D');
const progress = document.getElementById('progress');
const scores = document.getElementById('score');
const img1 = document.getElementById('id1');

const image1 = new Image(100, 200);
image1.src = 'images/emptypie.png';

//questions[3].appendChild(image1);
//document.body.appendChild(image1);
//document.choices.appendChild(image1);
const image2 = new Image(100, 200);
image2.src = 'images/halfpie.png';

//document.body.appendChild(image2);
const image3 = new Image(100, 200);
image3.src = 'images/quarterpie.png';

//document.body.appendChild(image3);
const image4 = new Image(100, 200);
image4.src = 'images/threequarterpie.png';

//document.body.appendChild(image4);

let questions = [{
    question: 'What is 45 minus 5?',
    choiceA: '(a)  40',
    choiceB: '(b)  120',
    choiceC: '(c)  100',
    choiceD: '(d)  110',
    correctAnswer: 'A',
  },

  {
    question: 'What is 50 plus 30?',
    choiceA: '(a)  70',
    choiceB: '(b)  80',
    choiceC: '(c)  65',
    choiceD: '(d)  75',
    correctAnswer: 'B',
  },

  {
    question: 'What is 10 times 10?',
    choiceA: '(a)  150',
    choiceB: '(b)  120',
    choiceC: '(c)  100',
    choiceD: '(d)  110',
    correctAnswer: 'C',
  },
  {
    question: 'Which image represents 1/4 (one-fourth)',
    choiceA: '(a)' + image1.outerHTML,
    choiceB: '(b)' + image2.outerHTML,
    choiceC: '(c)' + image3.outerHTML,
    choiceD: '(d)' + image4.outerHTML,
    correctAnswer: 'C',
  },
  {
    question: 'What is 16/2',
    choiceA: ''
    correctAnswer: '8',
  },
];

const lastQuestion = questions.length - 1;

//the question the user is answering
let runningQuestion = 0;

//keeps track of correct answer
let scoreCount = 0;

function userInput() {
  var str = document.getElementById('text1').value;
}

//renders the question in the list
function renderQuestion() {
  let q = questions[runningQuestion];
  question.innerHTML = '<p>' + q.question + '</p>';
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;

  if (runningQuestion == lastQuestion) {
      userInput();
  }
}

start.addEventListener('click', startQuiz);

function startQuiz() {
  start.style.display = 'none';
  renderQuestion();
  renderProgress();
  quiz.style.display = 'block';
}

function answerIsCorrect() {
  alert('Correct!');
}

// render progress
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + '></div>';
  }
}

function answerIsWrong() {
  alert('WRONG! The Correct answer is ' + questions[runningQuestion].correctAnswer);
}

function scoreRender() {
  scores.style.display = 'block';
  alert('You got ' + scoreCount + ' out of ' + questions.length + '.');
}

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correctAnswer) {
    scoreCount++;
    answerIsCorrect();
  } else {
    answerIsWrong();
  }

  //checks if question is the last or if there are more
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    scoreRender();
    mouseClicked = function () {
      // Restart the program whenever the user clicks the mouse
      Program.restart();
    };
  }
}
