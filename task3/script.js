let index = 0;
const images = document.querySelectorAll(".carousel img");

function showImage(i) {
    images.forEach(img => img.classList.remove("active"));
    images[i].classList.add("active");
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage(index);
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
}



const quizData = [{
        question: "Which language is used for styling?",
        options: ["HTML", "CSS", "Java", "Python"],
        answer: "CSS"
    },
    {
        question: "Which is JS Framework?",
        options: ["React", "Laravel", "Django", "PHP"],
        answer: "React"
    }
];

let currentQ = 0;
let selectedAnswer = "";

function loadQuiz() {
    selectedAnswer = "";
    document.getElementById("result").innerText = "";

    const q = quizData[currentQ];
    document.getElementById("question").innerText = q.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach(opt => {
        const div = document.createElement("div");
        div.classList.add("option");
        div.innerText = opt;

        div.onclick = () => {
            document.querySelectorAll(".option")
                .forEach(o => o.classList.remove("selected"));

            div.classList.add("selected");
            selectedAnswer = opt;
        };

        optionsDiv.appendChild(div);
    });
}

function submitAnswer() {
    const result = document.getElementById("result");

    if (!selectedAnswer) {
        result.innerText = "⚠️ Please select an option!";
        return;
    }

    const correct = quizData[currentQ].answer;

    if (selectedAnswer === correct) {
        result.innerText = "✅ Correct Answer!";
    } else {
        result.innerText = "❌ Wrong! Correct: " + correct;
    }
}

function nextQuestion() {
    currentQ = (currentQ + 1) % quizData.length;
    loadQuiz();
}

loadQuiz();

async function getJoke() {
    const box = document.getElementById("jokeBox");
    box.innerText = "Loading...";

    try {
        const res = await fetch("https://official-joke-api.appspot.com/random_joke");
        const data = await res.json();

        box.innerText = data.setup + " 😂 " + data.punchline;
    } catch {
        box.innerText = "Failed to fetch joke.";
    }
}
