class nubes {
    constructor() {
      this.velocity = 3;
      this.gameAreaElement = document.querySelector("#content");
      this.gameAreaHeight = (this.gameAreaElement.getBoundingClientRect().height)/2;
      this.gameAreaWidth = this.gameAreaElement.getBoundingClientRect().width;
      this.x = this.gameAreaWidth;
      this.y = 0;
      this.createElement();
    }

    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("nube");

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