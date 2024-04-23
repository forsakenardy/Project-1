let time = new Date();
let framecounter = 0;
const neutralArray = [];
const coleccionablesArray = [];


setInterval(() => {
    const newNeutral = new neutral();
    neutralArray.push(newNeutral);
}, 1000);
setInterval(() => {
    console.log("esto sale")
    const newcoleccionable = new coleccionables();
    coleccionablesArray.push(newcoleccionable)
}, 5000);

if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(Init, 1);
}
else {
    document.addEventListener("DOMContentLoaded", Init)
}

function Init() {
    time = new Date();
    start();
    Loop();
}

function Loop() {
    framecounter = (new Date() - time) / 1000;
    time = new Date();
    neutralArray.forEach((neutral) => {
        neutral.move();

    })
    coleccionablesArray.forEach((coleccionable) => {
        coleccionable.move();
    });
    collissionCheck2();
    collissionCheck();
    update();
    requestAnimationFrame(Loop);
}

let sueloY = 70;
let speedY = 0;
let impulse = 1100;
let gravity = 2500;

let playerPosX = 20;
let playerPosY = sueloY;

let parado = false
let saltando = false
let onPlatform = false

let sueloX = 0;
let scenarySpeed = 1280 / 3;
let gameSpeed = 1;
let score = 0

let contenedor;
let textScore;
let suelo;
let gameAreaElement;
let player;

let index = 0;
let imagenes = [
    "depositphotos_34447729-stock-illustration-running-silhouettes-vector-illustration-Photoroom.png-Photoroom.png",
    "eba88a6668c8f1d42dab4097cc99851d-man-running-silhouette-16-by-vexels.webp"
];

function start() {
    suelo = document.querySelector(".suelo");
    gameOver = document.querySelector(".gameover");
    gameAreaElement = document.querySelector("#content");
    textScore = document.querySelector(".score");
    player = document.querySelector(".player")
    document.addEventListener("keydown", HandleKeyDown);
}
function cambiarImagen() {
    if (saltando === false) {
        player.src = imagenes[index];
        index = (index + 1) % imagenes.length;
    }
}
const jumpInterval = setInterval(cambiarImagen, 250);

function HandleKeyDown(ev) {
    if (ev.keyCode == 32) {
        Saltar();
    }
}
function Saltar() {
    if (playerPosY === sueloY || onPlatform) {
        saltando = true;
        console.log(saltando);
        speedY = impulse;
    }

}
function update() {
    moveFloor();
    movePlayer();
    speedY -= gravity * framecounter;
}

function moveFloor() {
    sueloX += desplazamiento();
    suelo.style.left = -(sueloX % gameAreaElement.clientWidth) + "px";
}

function desplazamiento() {
    return scenarySpeed * framecounter * gameSpeed;
}
function movePlayer() {
    playerPosY += (speedY * framecounter);
    player.style.bottom = playerPosY;
    if (playerPosY < sueloY) {
        Tocarsuelo();
    }
}
function Tocarsuelo() {
    playerPosY = sueloY;
    speedY = 0;
    saltando = false;
}






