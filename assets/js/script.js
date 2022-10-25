// creating a var containing the questions within an array
var myQuestions = [
    // first question
    {
        question: "Commonly used data types do NOT include:",
        choices: [
            "1. string",
            "2. booleans",
            "3. alerts",
            "4. numbers",
        ],

        correctAnswer: 2
    },

    // second question
    {
        question: "The condition in an if/else statement is enclosed with ____________.",
        choices: [
            "1. quotes",
            "2. curly brackets",
            "3. parenthesis",
            "4. square brackets",],

        correctAnswer: 1
    },

    // third question
    {
        question: "Arrays in JavaScript can be used to store _____________.",
        choices: [
            "1. numbers and strings",
            "2. other arrays",
            "3. booleans",
            "4. all of the above",
        ],
        correctAnswer: 3
    },
    
    // fourth question 
    {
        question: "String values must be enclosed within ______________ when being assigned to variable.",
        choices: [
            "1. commas",
            "2. curly brackets",
            "3. quotes",
            "4. parenthesis",
        ],

        correctAnswer: 2

    },

    // fifth question
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: [
            "1. JavaScript",
            "2. terminal/bash",
            "3. for loops",
            "4. console.log",
        ],

        correctAnswer: 3
    },

]

var quizContainer = document.getElementById("quiz");
var startButton = document.getElementById("start");
var resultsContainer = document.querySelector("#resultsText");
var timerEl = document.querySelector(".timer-clock");
var seconds = 45;
var headDiv = document.getElementById("head");
var pDiv = document.getElementById("para");
var newHeadDiv = document.getElementById("qHead");
var newPDiv = document.getElementById("choices");
var currentQuestion = 0;
var wrapper = document.querySelector(".wrapper");
var score = 0;

// function to start the timer. the setInterval will repeatedly call a function every 1000ms and the clearInterval will stop the timer when the seconds are equal to zero.

function startTime() {
    var timer = setInterval(function () {
        timerEl.textContent = seconds;
        seconds--
        if (seconds <= 0) {
            clearInterval(timer)
        }

    }, 1000
    )
}

// added an event listener to start the timer when the start button is clicked. it then hides the starting area and displays the questions.

startButton.addEventListener("click", function () {
    console.log("anything")
    startTime();
    hideStartArea();
    displayQuestion();
})

// display is set to "none" to hide the elements

function hideStartArea() {

    headDiv.style.display = "none"
    pDiv.style.display = "none"
    startButton.style.display = "none"
}



// 

function clickedButton(clickevent) {

    if (currentQuestion < myQuestions.length) {
        var clickId = clickevent.srcElement.getAttribute('userClicked');
        var answered = myQuestions[currentQuestion].choices[clickId];
        console.log("User clicked " + clickId + " which is " + answered);
        var correctId = myQuestions[currentQuestion].correctAnswer;
        var correctAnswer = myQuestions[currentQuestion].choices[correctId];
        console.log("Correct answer is: " + correctId + " which is " + correctAnswer);
       
       
       if (clickId == correctId) {
            
            alert("Correct!!");
        
            score++

        } else {
            
            seconds=seconds-10;
            alert("Incorrect!");
        }
        
        currentQuestion++
    }


    if (currentQuestion < myQuestions.length) {
        displayQuestion();
    } else {
        displayScore();
        alert("The quiz is complete. Your score is " + score + " out of 5");
        onSave()
    }
}



function displayQuestion() {

    var question = document.createElement("h1");
    question.setAttribute('id', 'qHead');
    question.textContent = myQuestions[currentQuestion].question;
    wrapper.innerHTML = "";
    wrapper.appendChild(question);

    var choicesEl = document.createElement("div");
    choicesEl.setAttribute('id', 'choices');

    for (var i = 0; i < myQuestions[currentQuestion].choices.length; i++) {
        console.log(myQuestions[currentQuestion].choices[i])
        var buttonEl = document.createElement("button");
        buttonEl.setAttribute('class', 'choice');
        buttonEl.setAttribute('userClicked', i);
        buttonEl.onclick = clickedButton;
        buttonEl.textContent = myQuestions[currentQuestion].choices[i];
        choicesEl.appendChild(buttonEl);
    }

    wrapper.appendChild(choicesEl);
    
}

wrapper.addEventListener('click', function (event) {
    var target = event.currentTarget;
    if (target.classList.contains('choice')) {
    }
});

function displayScore() {
    
    var endQuiz = document.createElement("h1");
    endQuiz.setAttribute('id', 'qHead');
    endQuiz.textContent = "All done!";
    wrapper.innerHTML = "";
    wrapper.appendChild(endQuiz);

    wrapper.addEventListener('click', function (event) {
    var target = event.currentTarget;
    if (target.classList.contains('choice')) {
    }
})

};

function onSave() {
    var forHighScores = prompt("Please enter your initials to save your score.")
    if (forHighScores != null) {
        document.getElementById("scorelist").innerText = forHighScores + " : " + score + " out of 5"
    }

    }
