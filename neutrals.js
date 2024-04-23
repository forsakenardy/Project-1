class neutral {
    constructor() {
      this.velocity = 8;
      this.gameAreaElement = document.querySelector("#content");
      this.gameAreaHeight = this.gameAreaElement.getBoundingClientRect().height;
      this.gameAreaWidth = this.gameAreaElement.getBoundingClientRect().width;
      this.x = this.gameAreaWidth;
      this.y = 0;
      this.createElement();
    }

    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("neutral");

        this.gameAreaElement.appendChild(this.element);
        this.y = Math.floor(
            Math.random() *
            (this.gameAreaHeight - this.element.getBoundingClientRect().height) -
            this.element.getBoundingClientRect().height
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
function collissionCheck2() {
    neutralArray.forEach((neutral) => {
        if (isColliding(player, neutral.element) && speedY < 0) {
            playerPosY = neutral.element.getBoundingClientRect().top - (player.offsetHeight + 23);
            player.style.top = playerPosY + "px";
         saltando = false;
         onPlatform = true ;
            speedY = 0
            console.log("hello");
        }else{
            
        }

    }); 
}

function isColliding(rect1, rect2) {
    const rect1Bounds = rect1.getBoundingClientRect();
    const rect2Bounds = rect2.getBoundingClientRect();

    return (
        rect1Bounds.left < rect2Bounds.right &&
        rect1Bounds.right > rect2Bounds.left &&
        rect1Bounds.top < rect2Bounds.bottom &&
        rect1Bounds.bottom > rect2Bounds.top
    );
}