const startbutton = document.querySelector(".start");
  const inicio = document.querySelector(".inicio");
  const scenario = document.querySelector(".scenario");
  const empezarbutton = document.querySelector(".empezar");
  let algo = document.querySelector("#screen");
  let audioInicial = document.querySelector(".audio-inicial");
  let audioSalto = document.querySelector(".salto");
  let audioExplosion = document.querySelector(".explosion");
  let audioColeccionable = document.querySelector(".coleccionable");
  const volverAlMenuButton = document.querySelector(".Volver-al-menu")
  let aplausos = document.querySelector(".aplausos");


empezarbutton.addEventListener("click", () => {
    empezarbutton.classList.add("not-displayed");
    algo.classList.add("background");
    startbutton.classList.remove("not-displayed");
    inicio.classList.add("background-image");
    audioInicial.setAttribute("src","suits-you-69233.mp3");
    audioInicial.play();
})
startbutton.addEventListener("click", () => {
    gameAreaElement.classList.remove("not-displayed");
    inicio.classList.add("not-displayed");
    scenario.classList.add("not-displayed");
    algo.classList.remove("background");
    algo.classList.add("background-black");
    score = 0;
    textScore.forEach((element) =>{
        element.textContent = score
     })
});

volverAlMenuButton.addEventListener("click", () => {
    gameOver.classList.add("not-displayed");
    empezarbutton.classList.remove("not-displayed");
    inicio.classList.remove("not-displayed");
    algo.classList.remove("background-black");
    startbutton.classList.add("not-displayed");
    scenario.classList.remove("not-displayed")
    inicio.classList.remove("background-image")
    empezarbutton.innerHTML = "Any more questions?";
    algo.classList.remove("gameover2")

})




let time = new Date();
let framecounter = 0;
const neutralArray = [];
const coleccionablesArray = [];
const enemysArray = [];
const nubesArray = [];
const polloArray = [];


setInterval(() => {
    const newNeutral = new neutral();
    neutralArray.push(newNeutral);
}, 1200);
setInterval(() => {
    const newcoleccionable = new coleccionables();
    coleccionablesArray.push(newcoleccionable)
}, 4100);
setInterval (() => {
    const newEnemy = new enemy();
    enemysArray.push(newEnemy);
}, 1500);
setInterval(() => {
    const newNube = new nubes();
    nubesArray.push(newNube);
}, 3000);
setInterval(() => {
    const newPollo = new pollo();
    polloArray.push(newPollo)
}, 10000)

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
    enemysArray.forEach((enemy) => {
        enemy.move();
    });
    nubesArray.forEach((nube) => {
        nube.move();
    });
    polloArray.forEach((pollo) => {
        pollo.move();
    });

    collissionCheck2();
    collissionCheck();
    collissionCheck3();
    update();
    requestAnimationFrame(Loop);
}

let sueloY = 70;
let speedY = 0;
let impulse = 1000;
let gravity = 2500;

let playerPosX = 20;
let playerPosY = sueloY;

let parado = false
let saltando = false
let onPlatform = false

let sueloX = 0;
let scenarySpeed = 1280 / 3;
let gameSpeed = 1;
let score = 0;
let lives = 3;

let contenedor;
let textScore;
let suelo;
let gameAreaElement;
let player;
let textLives;
let gameOver

let index = 0;
let imagenes = [
    "ni;o1-Photoroom.png-Photoroom.png",
    "ni;o2-Photoroom.png-Photoroom.png",
    "ni;o3-Photoroom.png-Photoroom.png",
    "ni;o2-Photoroom.png-Photoroom.png"
];

function start() {
    suelo = document.querySelector(".suelo");
    gameOver = document.querySelector(".gameover");
    gameAreaElement = document.querySelector("#content");
    textScore = document.querySelectorAll(".score");
    player = document.querySelector(".player");
    textLives = document.querySelector(".lives")
    document.addEventListener("keydown", HandleKeyDown);
}
function cambiarImagen() {
    if (saltando === false) {
        player.src = imagenes[index];
        index = (index + 1) % imagenes.length;
    }
}
const jumpInterval = setInterval(cambiarImagen, 200);

function HandleKeyDown(ev) {
    if (ev.keyCode == 32) {
        Saltar();
        audioSalto.play();
    }
}
function Saltar() {
    if(!saltando) {
        if (playerPosY === sueloY || onPlatform) {
            saltando = true;
            console.log(saltando);
            speedY = impulse;
        }
    }
}
function update() {
    if(parado) return;
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






