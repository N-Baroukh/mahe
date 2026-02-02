const finalPassword = "MAGOUILLES";
const questions = [
    { q: "Quand on s'est mis ensemble ?", a: ["21 Janvier", "20 Avril", "23 Décembre", "20 Janvier"], correct: 3 },
    { q: "Le nombre de voies antérieures dans WWM (juste pour te faire chier celle-là ;)) ?", a: ["40", "35", "37", "41"], correct: 2 },
    { q: "Ton parti politique", a: ["Du même que Moon", "Ga...(jpp écrire plus que ça)", "Droite", "Tractopelle ascendant renard (idée de Moon)"], correct: 0 },
    { q: "Quel astre brille tout le temps ?", a: ["Le Soleil", "Les étoiles", "La Lune", "Mahé (bah ouais logique)"], correct: 3 },
    { q: "Quelle date on s'est marié sur WWM ?", a: ["Jpp de tes questions de con 😭", "17 Janvier", "19 Janvier", "16 Janvier"], correct: 1 },
    { q: "Quelle est la qualité que j'admire le plus chez toi ?", a: ["Rien 💀", "Ta bonté", "Tout, t'es la meilleure au monde je t'aime ❤️", "Laisse-moi réfléchir..."], correct: 2 },
    { q: "Le nom de notre futur chien ?", a: ["Le Z", "Le H (je t'ai à l'œil 👀)", "Misty", "Wouaf wouaf (ouais je sais 0 inspi)"], correct: 2 },
    { q: "Mon animal préféré ?", a: ["Chien", "Halouf", "Orque", "Aigle"], correct: 2 },
    { q: "Nombre de persos dans One Piece ?", a: ["856", "Va te faire foutre ❤️", "936", "1012"], correct: 2 },
    { q: "Dernière question : Prête pour le secret ?", a: ["Pas encore", "Oui ❤️✨", "Peut-être", "Bof (méchante va)"], correct: 1 }
];

let currentQuestion = 0;
let revealedIndices = Array(finalPassword.length).fill("_");

const questionEl = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const progressBar = document.getElementById("progress-bar");
const hintDisplay = document.getElementById("password-hint");

function loadQuestion() {
    const data = questions[currentQuestion];
    questionEl.innerText = data.q;
    optionsContainer.innerHTML = "";

    progressBar.style.width = `${(currentQuestion / questions.length) * 100}%`;
    hintDisplay.innerText = revealedIndices.join(" ");

    data.a.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.classList.add("option-btn");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(index, btn) {
    const data = questions[currentQuestion];
    const allButtons = document.querySelectorAll(".option-btn");

    allButtons.forEach(b => b.style.pointerEvents = "none");

    if (index === data.correct) {
        btn.classList.add("correct");
        revealedIndices[currentQuestion] = finalPassword[currentQuestion];

        setTimeout(() => {
            currentQuestion++;
            if (currentQuestion < questions.length) {
                loadQuestion();
            } else {
                showFinal();
            }
        }, 800);
    } else {
        btn.classList.add("wrong");
        btn.style.animation = "shake 0.3s ease";
        setTimeout(() => {
            allButtons.forEach(b => b.style.pointerEvents = "auto");
            btn.classList.remove("wrong");
        }, 800);
    }
}

function showFinal() {
    document.getElementById("quiz-box").style.display = "none";
    document.querySelector(".hint-display").style.display = "none";
    progressBar.style.width = "100%";

    const finalScreen = document.getElementById("final-screen");
    finalScreen.style.display = "block";
    document.getElementById("revealed-password").innerText = finalPassword;
}

loadQuestion();