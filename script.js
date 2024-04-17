document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        {
            question: "Какая функция в JavaScript используется для вывода текста в консоль?",
            answers: ["print()", "log()", "console.log()"],
            correctAnswer: 2
        },
        {
            question: "Какое ключевое слово используется для объявления переменной в JavaScript?",
            answers: ["let", "var", "const"],
            correctAnswer: 0
        },
        {
            question: "Что такое HTML?",
            answers: ["Hypertext Markup Language", "High Tech Mobile Language", "Hyper Text Language"],
            correctAnswer: 0
        },
        {
            question: "Какая функция используется для отправки HTTP-запроса в JavaScript?",
            answers: ["fetch()", "sendRequest()", "request()"],
            correctAnswer: 0
        },
        {
            question: "Какая операция используется для сравнения двух значений на равенство без учета типа данных?",
            answers: ["===", "==", "="],
            correctAnswer: 0
        },
        {
            question: "Какая структура данных используется для хранения данных в виде пар ключ-значение?",
            answers: ["Array", "Object", "Set"],
            correctAnswer: 1
        },
        {
            question: "Какой символ используется в CSS для обозначения класса?",
            answers: [".", "#", "$"],
            correctAnswer: 0
        }
    ];

    let currentQuestion = 0;
    const quizContainer = document.getElementById("quiz-container");

    function showQuestion() {
        const question = questions[currentQuestion];
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");
        questionElement.innerHTML = `
            <p>${question.question}</p>
            <ul>
                <li><button class="button answer" data-answer="0">${question.answers[0]}</button></li>
                <li><button class="button answer" data-answer="1">${question.answers[1]}</button></li>
                <li><button class="button answer" data-answer="2">${question.answers[2]}</button></li>
            </ul>
        `;
        quizContainer.innerHTML = ""; 
        quizContainer.appendChild(questionElement);
    }

    function checkAnswer(selectedAnswer) {
        const question = questions[currentQuestion];
        if (selectedAnswer === question.correctAnswer.toString()) {
            alert("Верный ответ!");
        } else {
            alert("Неверный ответ!");
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            alert("Квиз завершен!");
        }
    }

   
    quizContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("answer")) {
            const selectedAnswer = event.target.getAttribute("data-answer");
            checkAnswer(selectedAnswer);
        }
    });

    showQuestion();
});
