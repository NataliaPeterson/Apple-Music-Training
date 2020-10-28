/*jshint esversion: 6 */
//Overview2 page. This section enables displaying of information depending on the icon clicked.
for (var i=0; i<document.querySelectorAll(".coords").length; i++) {
document.querySelectorAll(".coords")[i].addEventListener("click", function () {
hidePreviouslyClickedButtonInfo();
hideArrow();
var coordsId = this.classList.item(0);
if (document.querySelector("#" + coordsId).style.display === "block") {
document.querySelector("#" + coordsId).style.display="none";
}
else {
  document.querySelector("#" + coordsId).style.display="block";
}
});
}

function hidePreviouslyClickedButtonInfo () {
  for (var i=0; i<document.querySelectorAll(".button-info").length; i++){
  if (document.querySelectorAll(".button-info")[i].style.display === "block"){
    document.querySelectorAll(".button-info")[i].style.display = "none";
  }
}
}

function hideArrow(){
document.querySelector(".arrow-right").style.display = 'none';
}

// This section resizes clickable areas along with page resizing.
// $('map').imageMapResize();


//This section changes background color of a visited section on the Menu page.
//  document.getElementById("menuFromOverview").addEventListener("click", function (){
//  document.getElementsByTagName("h3")[0].style.color="grey";
// });

//Discover page. This section makes Discover List bullet points appear.
document.addEventListener("DOMContentLoaded", textAnimation());

function textAnimation() {
  for (var i=0; i<document.querySelectorAll(".discover-list li").length; i++) {
    textLineAppear(i);
}
}

function textLineAppear(i){
setTimeout(function() {
document.querySelectorAll(".discover-list li")[i].style.visibility="visible";
}, 1500 * i);
}

//This section enable Slideshow on Listen page.

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Quiz

function buildQuiz(){
  const myQuestions = [
    {
      question: "1. Under which tab you can find music that's downloaded to your device to listen to it offline?",
      answers: {
        a: 'Downloaded',
        b: 'Collections',
        c: 'Library'
      },
      correctAnswer: 'c'
    },
    {
      question: "2. Which of the following is not a feature of Apple Music?",
      answers: {
        a: 'Movies',
        b: 'Breaking news',
        c: 'Music videos'
      },
      correctAnswer: 'a'
    },
    {
      question: "3. What is the price of an individual Apple Music subscription?",
      answers: {
        a: '$4.99/mo.',
        b: '$9.99/mo.',
        c: '$14.99/mo.'
      },
      correctAnswer: 'b'
    }
  ];
  const quizContainer = document.getElementById('quiz');
  const output = [];
  myQuestions.forEach(
  (currentQuestion, questionNumber) => {
      const answers = [];
      for(var letter in currentQuestion.answers){
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );
   quizContainer.innerHTML = output.join('');
}

function showResults(){
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  const myQuestions = [
    {
      question: "1. Under which tab you can find music that's downloaded to your device to listen to it offline?",
      answers: {
        a: 'Downloaded',
        b: 'Collections',
        c: 'Library'
      },
      correctAnswer: 'c'
    },
    {
      question: "2. Which of the following is not a feature of Apple Music?",
      answers: {
        a: 'Movies',
        b: 'Breaking news',
        c: 'Music videos'
      },
      correctAnswer: 'a'
    },
    {
      question: "3. What is the price of an individual Apple Music subscription?",
      answers: {
        a: '$4.99/mo.',
        b: '$9.99/mo.',
        c: '$14.99/mo.'
      },
      correctAnswer: 'b'
    }
  ];
  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer === currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
};
