const steps = [
    { type: "write", text: "Je t’écris sans trop savoir pourquoi,\n" },
    { type: "write", text: "Peut-être pour combler un silence.\n" },
    { type: "write", text: "Les mots tremblent quand je pense à toi.\n" },
    { type: "deleteLine" },
    { type: "write", text: "Les mots hésitent, puis restent.\n" },
    { type: "write", text: "Le temps passe différemment depuis toi,\n" },
    { type: "write", text: "Comme si les minutes avaient appris ton prénom.\n" },
    { type: "write", text: "Je voulais écrire quelque chose de simple,\n" },
    { type: "deleteLine" },
    { type: "write", text: "Je voulais écrire quelque chose de vrai.\n" },
    { type: "write", text: "Alors je laisse ces phrases imparfaites,\n" },
    { type: "write", text: "Parce qu’elles me ressemblent un peu.\n" }
];

const el = document.getElementById("poem");
const cursor = document.getElementById("cursor");
const gamesContainer = document.getElementById("games-container");
let stepIndex = 0;
let charIndex = 0;

function showGames() {
    cursor.style.display = "none"; // On cache le curseur
    gamesContainer.classList.remove("games-hidden");
    gamesContainer.classList.add("games-visible");
}

function deleteLastLineCharByChar(callback) {
    let text = el.textContent;
    const lastNewLine = text.lastIndexOf("\n", text.length - 2);
    const start = lastNewLine === -1 ? 0 : lastNewLine + 1;
    let line = text.slice(start);

    function erase() {
        if (line.length > 0) {
            line = line.slice(0, -1);
            el.textContent = text.slice(0, start) + line;
            setTimeout(erase, 35);
        } else {
            el.textContent = text.slice(0, start);
            callback();
        }
    }
    erase();
}

function run() {
    const step = steps[stepIndex];

    // Si plus de steps, on affiche les jeux
    if (!step) {
        setTimeout(showGames, 1000);
        return;
    }

    if (step.type === "write") {
        if (charIndex < step.text.length) {
            el.textContent += step.text.charAt(charIndex);
            charIndex++;
            setTimeout(run, 40);
        } else {
            charIndex = 0;
            stepIndex++;
            setTimeout(run, 600);
        }
    } else if (step.type === "deleteLine") {
        deleteLastLineCharByChar(() => {
            stepIndex++;
            setTimeout(run, 400);
        });
    }
}

run();

function unlockSecret() {
    const password = prompt("Veuillez entrer le mot de passe secret pour accéder au mystère :");

    // Remplace 'Amour' par le mot de passe de ton choix
    if (password === "MAGOUILLES" || password === "Magouilles" || password === "magouilles") {
        alert("Accès accordé... ❤️");
        window.location.href = "galerie.html"; // La page vers laquelle rediriger
    } else if (password !== null) {
        alert("Mot de passe incorrect. Le secret reste gardé. Fais le quizz pour le découvrir !");
    }
}