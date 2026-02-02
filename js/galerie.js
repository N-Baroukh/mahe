const photos = [
    { url: '../img/janvier.jpg', caption: 'Un des plus beau jour' },
    { url:'../img/bs.jpg' , caption: 'Souvenir' },
    { url: '../img/gep.png', caption: 'Super moments' },
    { url: '../img/greatest.jpg', caption: 'Souvenir' },
    { url: '../img/josee.webp', caption: 'Magique' },
    { url: '../img/wwm.png', caption: 'Ensemble' },
    { url: '../img/zootopie.webp', caption: 'Souvenir' },
    { url: '../img/blue.jpeg', caption: 'Souvenir' },
    { url: '../img/sso.webp', caption: 'Souvenir' },
    { url: '../img/op.png', caption: 'Avenir' },
];

const wall = document.getElementById('gallery-wall');
const decos = ['✨', '🌸', '💖', '🌿', '☁️'];

photos.forEach((photo, index) => {
    // Création du cadre
    const frame = document.createElement('div');
    frame.className = 'photo-frame';

    // Rotation aléatoire entre -5 et 5 degrés
    const randomRotate = Math.floor(Math.random() * 11) - 5;
    frame.style.transform = `rotate(${randomRotate}deg)`;

    // Ajout de la punaise
    const pin = document.createElement('div');
    pin.className = 'pin';

    // Ajout de l'image
    const img = document.createElement('img');
    img.src = photo.url;
    img.alt = photo.caption;

    // Légende manuscrite
    const caption = document.createElement('p');
    caption.style.textAlign = 'center';
    caption.style.marginTop = '15px';
    caption.style.marginBottom = '0';
    caption.innerText = photo.caption;

    // Ajout de petites décos aléatoires autour du cadre
    if (Math.random() > 0.5) {
        const deco = document.createElement('span');
        deco.className = 'decoration';
        deco.innerText = decos[Math.floor(Math.random() * decos.length)];
        deco.style.top = Math.random() * 100 + '%';
        deco.style.left = (Math.random() > 0.5 ? '-20px' : '210px');
        frame.appendChild(deco);
    }

    frame.appendChild(pin);
    frame.appendChild(img);
    frame.appendChild(caption);
    wall.appendChild(frame);
});