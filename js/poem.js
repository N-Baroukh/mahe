const steps = [
    { type: "write", text: "Je t’écris ceci pour te dire à quel point je t'aime ❤️\n" },
    { type: "write", text: "Cela fait maintenant 1 mois qu'on est dans un rêve.\n" },
    { type: "write", text: "Et c'est incroyable.\n" },
    { type: "deleteLine" },
    { type: "write", text: "Non, MAGIQUE ✨\n" },
    { type: "write", text: "Tu es vraiment quelqu'un d'exceptionnel.\n" },
    { type: "write", text: "Si j'avais su qu'un jour je rencontrerais une personne comme toi\n" },
    { type: "write", text: "Je n'en croirais pas un mot ;).\n" },
    { type: "write", text: "Tu comptes beaucoup pour moi\n" },
    { type: "deleteLine" },
    { type: "write", text: "Tu es tout pour moi ❤️\n" },
    { type: "write", text: "Je t'aime plus que tout au monde, Mahe ❤️✨\n" },
    { type: "write", text: "Tu peux être fier de la magnifique personne que tu es \n" },
    { type: "write", text: "Car oui, tu es juste incroyable ✨✨✨.\n" },
    { type: "write", text: "Sache qu'en tout cas je serai toujours là pour toi\n" },
    { type: "write", text: "Jamais au grand jamais je ne te laisserai tomber\n" },
    { type: "write", text: "Et je ferai tout pour te rendre \n" },
    { type: "write", text: "heureuse \n" },
    { type: "deleteLine" },
    { type: "write", text: "La plus heureuse des femmes sur terre\n" },
    { type: "write", text: "Cela fait depuis quelques semaines que je te préparais ça.\n" },
    { type: "write", text: "Et j'espère que ça te plaira.\n" },
    { type: "write", text: "Je t'aime ❤️✨\n" },
    { type: "write", text: "Désolé pour les fautes d'orthographe ;).\n" },
    { type: "deleteLine" },
    { type: "write", text: "Ton homme qui t'aime plus que tout ❤️\n" },
    { type: "write", text: "Je t'ai concocté 3 mini-jeux, bonne chance mon cœur ❤️" }
];

const el = document.getElementById("poem");
const cursor = document.getElementById("cursor");
const gamesContainer = document.getElementById("games-container");
let stepIndex = 0;
let charIndex = 0;

function showGames() {
    cursor.style.display = "none";
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

    if (password === "MAGOUILLES" || password === "Magouilles" || password === "magouilles") {
        alert("Accès accordé... ❤️");
        window.location.href = "galerie.html";
    } else if (password !== null) {
        alert("Mot de passe incorrect. Le secret reste gardé. Fais le quizz pour le découvrir !");
    }
}