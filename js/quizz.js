const finalPassword = "CHOCOLATIN"; // Ton mot de passe de 10 lettres
const questions = [
    { q: "Quelle fleur symbolise souvent l'amour ?", a: ["Rose", "Tulipe", "Marguerite", "Pissenlit"], correct: 0 },
    { q: "Quelle est la couleur préférée du romantisme ?", a: ["Bleu", "Rouge", "Vert", "Jaune"], correct: 1 },
    { q: "Combien de lettres y a-t-il dans 'Toujours' ?", a: ["7", "8", "9", "10"], correct: 1 },
    { q: "Quel astre brille la nuit ?", a: ["Le Soleil", "Mars", "La Lune", "Vénus"], correct: 2 },
    { q: "Quel mois fête-t-on la St-Valentin ?", a: ["Janvier", "Février", "Mars", "Avril"], correct: 1 },
    { q: "Quelle saveur est synonyme de douceur ?", a: ["Acide", "Salé", "Sucré", "Pimenté"], correct: 2 },
    { q: "Qui a écrit Roméo et Juliette ?", a: ["Molière", "Hugo", "Shakespeare", "Zola"], correct: 2 },
    { q: "Où se trouve la Tour Eiffel ?", a: ["Londres", "Paris", "Berlin", "Rome"], correct: 1 },
    { q: "Quel petit ange tire des flèches ?", a: ["Cupidon", "Hermès", "Zeus", "Éros"], correct: 0 },
    { q: "Dernière question : Prêt pour le secret ?", a: ["Pas encore", "Oui !", "Peut-être", "Bof"], correct: 1 }
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

    // Mise à jour visuelle
    progressBar.style.width = `${(currentQuestion / questions.length) * 100}%`;
    hintDisplay.innerText = revealedIndices.join(" ");

    // Création des boutons
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

    // Désactiver tous les boutons pour éviter le spam
    allButtons.forEach(b => b.style.pointerEvents = "none");

    if (index === data.correct) {
        btn.classList.add("correct");
        // Révéler la lettre correspondante
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
        // Vibration si erreur
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

// Initialisation
loadQuestion();