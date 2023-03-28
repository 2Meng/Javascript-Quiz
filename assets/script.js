var startBtn = document.getElementById('startBtn');
var restartBtn = document.getElementById('restartBtn');
var timerText = document.getElementById('timer');
var answerBtn = document.getElementById('answerBtn')
var currentText = document.getElementById('textbox');
var answerText = document.getElementById('answerbox');

var score = 0;
var counter = 0;
var username = '';
var timer = 60;
var highscores = [];

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

startBtn.addEventListener('click', startQuiz);
function startQuiz(){
    currentText.innerHTML = questions[counter].question;
    answerText.innerHTML = '';
    
    for(var i = 0; i < questions[counter].answers.length; i++){
        var answerBtn = document.createElement('button');
        answerBtn.textContent = questions[counter].answers[i];
        answerText.appendChild(answerBtn)
        answerBtn.setAttribute('id', 'answerOptions')
    }
};

// answerBtn.addEventListener('click', answer);