/*jshint esversion: 6 */
const start = document.getElementById('start');
const quiz = document.getElementById('quiz');
const question = document.getElementById('questions');
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const choiceD = document.getElementById('D');
const progress = document.getElementById('progress');
const scoreDiv = document.getElementById('scoreContainer');
const retake = document.getElementById('retake');

const image1 = new Image(100, 100);
image1.src = 'images/emptypie.png';

const image2 = new Image(100, 100);
image2.src = 'images/halfpie.png';

const image3 = new Image(100, 100);
image3.src = 'images/quarterpie.png';

const image4 = new Image(100, 100);
image4.src = 'images/threequarterpie.png';

let questions = [{
    question: 'What is 45 minus 5?',
    choiceA: '(a)  40',
    choiceB: '(b)  120',
    choiceC: '(c)  100',
    choiceD: '(d)  110',
    correctAnswer: 'A',
  },

  {
    question: 'What is (1/2) times 30?',
    choiceA: '(a)  90',
    choiceB: '(b)  15',
    choiceC: '(c)  60',
    choiceD: '(d)  3012',
    correctAnswer: 'B',
  },

  {
    question: 'If Jill drives 4 miles to work and again to comeback home each day, how many miles has she driven in a 5 day work week?',
    choiceA: '(a)  20',
    choiceB: '(b)  160',
    choiceC: '(c)  40',
    choiceD: '(d)  8',
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
    question: 'What number place is the "2" located in 32,000',
    choiceA: '(a)  ones',
    choiceB: '(b)  tens',
    choiceC: '(c)  hundreds',
    choiceD: '(d)  thousands',
    correctAnswer: 'D',
  },
];

const lastQuestion = questions.length - 1;

//the question the user is answering
let runningQuestion = 0;

//keeps track of correct answer
let scoreCount = 0;

function refreshPage() {
  window.location.reload();
}

//renders the question in the list
function renderQuestion() {
  let q = questions[runningQuestion];
  question.innerHTML = '<p>' + q.question + '</p>';
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

start.addEventListener('click', startQuiz);

function startQuiz() {
  start.style.display = 'none';
  renderQuestion();
  renderProgress();
  quiz.style.display = 'block';
}

function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = '#0f0';
  alert('Correct!');
}

// render progress
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + '></div>';
  }
}

function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = '#f00';
  alert('WRONG! The Correct answer is ' + questions[runningQuestion].correctAnswer);
}

function scoreRender() {
  var scorePerCent = Math.round(100 * (scoreCount / questions.length));
  alert('You got ' + scoreCount + ' out of ' + questions.length + '. That is ' + scorePerCent + '%');
  scoreDiv.style.display = 'block';
  if (scorePerCent >= 80) {
    scoreDiv.innerHTML += "<p>" + scorePerCent + '% You Passed' + "</p>";
  } else {
    scoreDiv.innerHTML += "<p>" + scorePerCent + '% You Failed' + "</p>";
  }

  retake.style.display = 'block';
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
  }
}
