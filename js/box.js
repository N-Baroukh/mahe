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

    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    createEmoji(e.clientX, e.clientY, randomEmoji);
    let progress = count / maxClicks;
    box.style.opacity = 1 - (progress * 0.7);
    box.style.filter = `grayscale(${progress * 100}%) blur(${progress * 2}px)`;

    if (count > 35) {
        box.classList.add('shake');
    }

    if (count === maxClicks) {
        box.style.display = 'none';
        counterDisplay.style.display = 'none';
        message.style.display = 'block';
        setTimeout(() => {
            message.classList.add('show');
        }, 10);
        finalExplosion();
    }
});

function createEmoji(x, y, char) {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');
    emoji.innerText = char;
    emoji.style.left = `${x - 25}px`;
    emoji.style.top = `${y - 25}px`;

    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 1200);
}

function finalExplosion() {
    for(let i = 0; i < 50; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
            createEmoji(x, y, randomEmoji);
        }, i * 50);
    }
}