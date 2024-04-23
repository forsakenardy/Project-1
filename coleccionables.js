class coleccionables {
    constructor() {
      this.velocity = 8;
      this.gameAreaElement = document.querySelector("#content");
      this.gameAreaHeight = this.gameAreaElement.getBoundingClientRect().height;
      this.gameAreaWidth = this.gameAreaElement.getBoundingClientRect().width;
      this.x = this.gameAreaWidth;
      this.y = 0;
      this.createColeccionable();
    }

    createColeccionable() {
        this.element = document.createElement("div");
        this.element.classList.add("coleccionables");

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


function collissionCheck() {
    coleccionablesArray.forEach((coleccionable) => {
        if (isColliding2(player, coleccionable.element)) {
            coleccionable.element.remove()
            console.log("¡Colisión detectada!");
        }
    });
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