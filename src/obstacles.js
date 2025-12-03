class Obstacles {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.possiblePosition = [380, 20];
    this.left =
      this.possiblePosition[
        Math.floor(Math.random() * this.possiblePosition.length)
      ];
    this.top = -200;
    this.width = 160;
    this.height = 160;
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img");
    this.element.src = `images/meteor.png`;
    this.element.style.position = "absolute";
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;

    this.gameScreen.appendChild(this.element);
  }

  move() {
    this.top += 4;
    this.updatePosition();
  }
  updatePosition() {
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }
}
