let screen = document.getElementById('screen'), canvas, c, rScreen;

const menu = [
`<div>
    <button onclick = "changeS(1)">Game</button>
    <button onclick = "changeS(2)">Help</button>
    <button onclick = "changeS(3)">Settings</button>
<div>`,
`<canvas></canvas>`,
`<p>Help!</p>`,
`<p>Settings</p>`
];

function changeS(which) {
    screen.innerHTML = menu[which];
    if (which == 1) setup();
};

let breakBlock, unBreakBlock, texture;

texture = new Image();
texture.src = "./texture.png"

function setup() { //setup function
    rScreen = Math.round(screen.getBoundingClientRect().width); //round currect size of canvas
    screen.style.width = rScreen + "px";
    screen.style.height = rScreen + rScreen/26 + "px";

    canvas = document.querySelector('canvas'); //set up
    canvas.width = rScreen;
    canvas.height = rScreen + rScreen/26;
    c = canvas.getContext('2d');

    breakBlock = [];
    unBreakBlock = [];

    mapObj(); //in mapfunc.js

    animate();
};

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);

    drawMap();
    drawTenk();
}

changeS(0);