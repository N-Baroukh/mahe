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
    const frame = document.createElement('div');
    frame.className = 'photo-frame';
    const randomRotate = Math.floor(Math.random() * 11) - 5;
    frame.style.transform = `rotate(${randomRotate}deg)`;
    const pin = document.createElement('div');
    pin.className = 'pin';
    const img = document.createElement('img');
    img.src = photo.url;
    img.alt = photo.caption;
    const caption = document.createElement('p');
    caption.style.textAlign = 'center';
    caption.style.marginTop = '15px';
    caption.style.marginBottom = '0';
    caption.innerText = photo.caption;
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