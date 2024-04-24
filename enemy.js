class enemy {
    constructor() {
      this.velocity = 8;
      this.gameAreaElement = document.querySelector("#content");
      this.gameAreaHeight = this.gameAreaElement.getBoundingClientRect().height;
      this.gameAreaWidth = this.gameAreaElement.getBoundingClientRect().width;
      this.x = this.gameAreaWidth;
      this.y = 0;
      this.createEnemys();
    }

    createEnemys() {
        this.element = document.createElement("div");
        this.element.classList.add("enemys");

        this.gameAreaElement.appendChild(this.element);
        this.y = Math.floor(
            Math.random() *
            (this.gameAreaHeight - this.element.getBoundingClientRect().height -100) -
            this.element.getBoundingClientRect().height +100
        );
        this.height = this.element.getBoundingClientRect().height;
        this.width = this.element.getBoundingClientRect().width;
        this.element.style.top = `${this.y}px`;
    }
    move() {

        this.x -= this.velocity;
        this.element.style.left = `${this.x}px`;
        if (this.x < -this.gameAreaWidth) {
          this.element.remove();
        }
    }
    
}


function collissionCheck3() {
    enemysArray.forEach((enemy) => {
        if (isColliding2(player, enemy.element)) {
            enemy.element.remove();
            audioExplosion.play();
            console.log("¡Colisión detectada!");
            perderVida();
        }
        else if (lives <= 0) {
            gameOver.classList.remove("not-displayed");
            gameAreaElement.classList.add("not-displayed");
            lives = 3;
            textLives.textContent = lives
            score = 0;
            textScore.textContent = score
        }
    });
}
function perderVida() {
    lives--;
    textLives.textContent = lives;
 
}

function isColliding2(rect1, rect2) {
    const rect1Bounds = rect1.getBoundingClientRect();
    const rect2Bounds = rect2.getBoundingClientRect();

    return (
        rect1Bounds.left < rect2Bounds.right &&
        rect1Bounds.right > rect2Bounds.left &&
        rect1Bounds.top < rect2Bounds.bottom &&
        rect1Bounds.bottom > rect2Bounds.top
    );
}