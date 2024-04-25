class pollo {
    constructor() {
      this.velocity = 5;
      this.gameAreaElement = document.querySelector("#content");
      this.gameAreaHeight = (this.gameAreaElement.getBoundingClientRect().height);
      this.gameAreaWidth = this.gameAreaElement.getBoundingClientRect().width;
      this.x = this.gameAreaWidth;
      this.y = 0;
      this.createElement();
    }

    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("pollo");

        this.gameAreaElement.appendChild(this.element);
        this.y = this.gameAreaHeight - 150;
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