let count = 0;
const maxClicks = 50;
const box = document.getElementById('box-container');
const counterDisplay = document.getElementById('counter');
const message = document.getElementById('message');
const emojis = ['🥰', '❤️', '💖', '✨', '😍', '💘', '🌹', '💕','❤️‍🔥'];

box.addEventListener('click', (e) => {
    if (count >= maxClicks) return;

    count++;
    counterDisplay.innerText = `Cliqué : ${count} / ${maxClicks}`;

    // Effet de secousse sur l'écran au clic
    document.body.classList.add('hit-shake');
    setTimeout(() => document.body.classList.remove('hit-shake'), 100);

    // Création de plusieurs emojis pour plus d'impact
    for(let i = 0; i < 3; i++) {
        createEmoji(e.clientX, e.clientY, emojis[Math.floor(Math.random() * emojis.length)]);
    }

    let progress = count / maxClicks;
    box.style.transform = `scale(${1 - progress * 0.2}) rotate(${Math.random() * 10 - 5}deg)`;
    box.style.filter = `grayscale(${progress * 100}%) blur(${progress * 1.5}px)`;

    if (count > 30) {
        box.classList.add('vibrate'); // On remplace shake par vibrate pour l'intensité
    }

    if (count === maxClicks) {
        triggerFinalSequence();
    }
});

function createEmoji(x, y, char) {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.innerText = char;

    // Position aléatoire légère autour du clic
    const offsetX = (Math.random() - 0.5) * 100;
    const offsetY = (Math.random() - 0.5) * 100;

    emoji.style.left = `${x + offsetX}px`;
    emoji.style.top = `${y + offsetY}px`;

    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 1000);
}

function triggerFinalSequence() {
    box.style.display = 'none';
    counterDisplay.style.display = 'none';

    // Explosion massive
    for(let i = 0; i < 100; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            createEmoji(x, y, emojis[Math.floor(Math.random() * emojis.length)]);
        }, i * 15);
    }

    message.style.display = 'block';
    setTimeout(() => message.classList.add('show'), 100);
}