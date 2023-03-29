var startBtn = document.getElementById('startBtn');
var restartBtn = document.getElementById('restartBtn');
var timerText = document.getElementById('timer');
var currentText = document.getElementById('textbox');
var answerText = document.getElementById('answerbox');
var correctIncorrect = document.getElementById('correctIncorrect');
var saveScore = document.getElementById('highscoreBtn');
var usersName = document.getElementById('username');
var highScoreTable = document.getElementById('highscoreTable');
var clearScoresBtn = document.getElementById('clearScores');

var score = 0;
var counter = 0;
var timerSec = 10;
var timerStarted = false;
var highScore = [];

var questions = [
    {
        question: 'What are the Javascript Data Types?',
        answers: ['Number', 'String', 'Boolean', 'Object', 'Undefined', 'All of these'],
        correct: 'All of these'
    },
    {
        question: 'The isNaN function returns TRUE if the argument is not a number otherwise it is FALSE.',
        answers: ['True', 'False'],
        correct: 'True'
    },
    {
        question: 'The strict equality operator (===) returns true when how many operands have the same value?',
        answers: ['1', '2', '3', '4'],
        correct: '2'
    },
    {
        question: 'What are the looping structures in javascript?',
        answers: ['For', 'While', 'Do-While', 'All of these'],
        correct: 'All of these'
    },
    {
        question: 'What would be the result of this operation? ( var x = 3 + 2 + "7" )',
        answers: ['12', '57', '21', '5 "7"'],
        correct: '57'
    },
    {
        question: 'Which built-in method returns the character at the specified index?',
        answers: ['characterAt()', 'getCharAt()', 'charAt()', 'None of the above.'],
        correct: 'charAt()'
    },
    {
        question: 'Which built-in method sorts the elements of an array?',
        answers: ['changeOrder(order)', 'order()', 'sort()', 'None of the above.'],
        correct: 'sort()'
    },
    {
        question: 'Which of the following function of String object returns the calling string value converted to upper case?',
        answers: ['toLocaleUpperCase()', 'toUpperCase()', 'toString()', 'substring()'],
        correct: 'toUpperCase()'
    },
    {
        question: 'Which of the following is true about variable naming conventions in JavaScript?',
        answers: ['JavaScript variable names must begin with a letter or the underscore character.', 'JavaScript variable names are case sensitive.', 'Both A and B.', 'None of the above.'],
        correct: 'Both A and B.'
    },
    {
        question: 'Which statement cannot be used to declare a variable in JavaScript?',
        answers: ['Let', 'Var', 'Int', 'Const'],
        correct: 'Int'
    },
];

// starts the quiz&timer & will move quiz forward -> 1 when answer buttons are pressed
startBtn.addEventListener('click', startQuiz);
function startQuiz(){
    currentText.innerHTML = questions[counter].question;
    
    if(!timerStarted){
        timerStarted = true;
        timer();
    };
    answerButtons();

    if(counter === 9 || timerSec < 0 ){
        endQuiz();
    };
};

// function for answer buttons to increment when questions answered.
function answerButtons (){
    // for each question in the answers property - create a interactive button
    for(var i = 0; i < questions[counter].answers.length; i++){
        var answerBtn = document.createElement('button');
        answerBtn.textContent = questions[counter].answers[i];
        answerText.appendChild(answerBtn);
        answerBtn.setAttribute('id', 'answerOptions');
    
        // answer buttons if correct & incorrect events
        answerBtn.addEventListener('click', function(event){
            if (event.target.textContent === questions[counter].correct){
                counter ++;
                score ++;
                timerSec += 5;
                correctIncorrect.innerHTML = 'correct';
                correctIncorrect.style.color = 'green';
            } else {
                counter ++;
                score --;
                timerSec -= 5;
                correctIncorrect.innerHTML = 'incorrect';
                correctIncorrect.style.color = 'red';
            }
            timeout()
            answerText.innerHTML = '';
            startQuiz()
        })
    }
};

// end of quiz function
function endQuiz(){
    currentText.innerHTML = 'You reached the end of the quiz!'

    
    restartBtn.style.display = 'block';

    // saves score

    saveScore.addEventListener('click', function(event){
        var userName = usersName.value;
        
         var scoreBoard = {
             name: userName,
              score: score
        };

        highScore.push(scoreBoard);
    
        highScore.sort(function(a, b){
            return b.score - a.score
        })

        localStorage.setItem('highscores', JSON.stringify(highScore));
        
        displayScores();
    });

    //clear scores
    
    clearScoresBtn.addEventListener('click', function() {
        highScore = [];

        // Clear the high scores from local storage
        localStorage.removeItem('highscores');
        
        // Clear the list element
        highScoreTable.innerHTML = '';
      });

    //displays scores onto board
    
    function displayScores(){
        highScoreTable.innerHTML = '';
    
        
        var highScores = JSON.parse(localStorage.getItem('highscores'));
        if(highScores) {
            for (var i = 0; i < highScores.length; i++){
                var score = highScores[i];
                var scoreItem = document.createElement('div');
                scoreItem.textContent = score.name + ': ' + score.score;
                highScoreTable.appendChild(scoreItem);
            }
        }
    };
    
    window.onload = function() {
        displayScores();
    };
};

/* displays the users score
function userScore(){
    
}; */



// times out the correctIncorrect text
function timeout(){
    setTimeout(function(){
        correctIncorrect.style.display = 'none';
    }, 500);
    correctIncorrect.style.display = '';
};

// timer for quiz
function timer(){
    var interval = setInterval(function(){
        timerSec --;
        timerText.innerHTML = "Time: " + timerSec;

        if(timerSec === 0 || timerSec < 0) {
            clearInterval(interval);
            timerText.innerHTML = '';
            answerText.innerHTML = '';
            currentText.innerHTML = 'Times up!';
        }
    },1000);
};

restartBtn.addEventListener('click', restartQuiz)

function restartQuiz(){
    counter = 0;
    score = 0;
    timerSec = 10;
    timerStarted = false
    currentText.innerHTML = '';
    answerText.innerHTML = '';
    restartBtn.style.display = 'none';
    timerText.style.display = '';
    startQuiz();
}

console.log(restartQuiz)