```javascript
// DARK AND LIGHT THEME

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.innerHTML = "☀️";
    } else {
        themeBtn.innerHTML = "🌙";
    }

});


// CHARACTER SEARCH

const search = document.getElementById("search");

search.addEventListener("input", function() {

    let value = search.value.toLowerCase();

    const characters = document.querySelectorAll(".character");

    characters.forEach(function(character) {

        let name = character.querySelector("h3").innerText.toLowerCase();

        if (name.includes(value)) {
            character.style.display = "block";
        } else {
            character.style.display = "none";
        }

    });

});


// MINECRAFT QUIZ

const questions = [

    {
        question: "Which creature can teleport?",
        answers: ["Zombie", "Enderman", "Skeleton"],
        correct: 1
    },

    {
        question: "Which resource is valuable for making powerful equipment?",
        answers: ["Wood", "Diamond", "Dirt"],
        correct: 1
    },

    {
        question: "Who developed Minecraft?",
        answers: ["Mojang Studios", "Nintendo", "Rockstar Games"],
        correct: 0
    },

    {
        question: "Which dimension contains the Ender Dragon?",
        answers: ["Overworld", "Nether", "The End"],
        correct: 2
    },

    {
        question: "Which mode provides unlimited building resources?",
        answers: ["Survival", "Creative", "Hardcore"],
        correct: 1
    }

];

let currentQuestion = 0;
let score = 0;
let answered = false;

function showQuestion() {

    answered = false;

    document.getElementById("result").innerHTML = "";

    let q = questions[currentQuestion];

    document.getElementById("question").innerHTML = q.question;

    const buttons = document.querySelectorAll(".answer");

    buttons.forEach(function(button, index) {

        button.innerHTML = q.answers[index];

        button.disabled = false;

        button.style.background = "#172817";
        button.style.color = "white";

    });

}

function checkAnswer(selected) {

    if (answered) return;

    answered = true;

    let correct = questions[currentQuestion].correct;

    const buttons = document.querySelectorAll(".answer");

    buttons.forEach(function(button, index) {

        button.disabled = true;

        if (index === correct) {
            button.style.background = "#4caf50";
            button.style.color = "white";
        }

    });

    if (selected === correct) {

        score++;

        document.getElementById("result").innerHTML =
            "🎉 Correct Answer!";

    } else {

        document.getElementById("result").innerHTML =
            "❌ Incorrect! The correct answer is " +
            questions[currentQuestion].answers[correct];

    }

}

function nextQuestion() {

    if (!answered) {
        document.getElementById("result").innerHTML =
            "Please select an answer first!";
        return;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        document.querySelector(".quiz-box").innerHTML = `

            <h2>🎮 Quiz Completed!</h2>

            <h3>Your Score: ${score}/${questions.length}</h3>

            <p>Thanks for playing Minecraft Quiz!</p>

            <br>

            <button class="btn" onclick="restartQuiz()">
                Play Again
            </button>

        `;

    }

}

function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    document.querySelector(".quiz-box").innerHTML = `

        <h3 id="question"></h3>

        <button class="answer" onclick="checkAnswer(0)"></button>

        <button class="answer" onclick="checkAnswer(1)"></button>

        <button class="answer" onclick="checkAnswer(2)"></button>

        <p id="result"></p>

        <button class="btn" onclick="nextQuestion()">
            Next Question
        </button>

    `;

    showQuestion();

}


// START QUIZ

showQuestion();


// GALLERY IMAGE MESSAGE

const galleryImages = document.querySelectorAll(".gallery img");

galleryImages.forEach(function(image) {

    image.addEventListener("click", function() {

        window.open(image.src, "_blank");

    });

});
```