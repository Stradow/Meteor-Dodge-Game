class Game {
  constructor() {
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("game-over");
    this.player = new PlayerUfo(this.gameScreen, 260, 500, 250, 250);
    this.height = 700;
    this.width = 500;
    this.obstacles = [new Obstacles(this.gameScreen)];
    this.score = 0;
    this.lives = 3;
    this.gameIsOver = false;
    this.gameIntervalId;
    this.gameLoopFrequency = Math.floor(1000 / 60);

    this.scoreElem = document.getElementById("score");
    this.livesElem = document.getElementById("lives");

    this.frames = 0;
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    this.gameIntervalId = setInterval(() => {
      this.gameLoop();
    }, this.gameLoopFrequency);
  }
  gameLoop() {
    this.frames++;
    if (this.frames % 150 === 0) {
      this.obstacles.push(new Obstacles(this.gameScreen));
    }
    this.update();
    if (this.gameIsOver) {
      clearInterval(this.gameIntervalId);
      this.gameOver();
    }
  }
  update() {
    this.player.move();
    for (let i = 0; i < this.obstacles.length; i++) {
      const currentObstacle = this.obstacles[i];
      currentObstacle.move();

      if (this.player.didCollide(currentObstacle)) {
        currentObstacle.element.remove();
        this.obstacles.splice(i, 1);
        i--;

        this.lives--;
        this.livesElem.innerText = this.lives;
        if (this.lives === 0) {
          this.gameIsOver = true;
        }
      }

      if (currentObstacle.top >= 610) {
        currentObstacle.element.remove();
        this.obstacles.splice(i, 1);
        i--;
        this.score++;
        this.scoreElem.innerText = this.score;
      }
    }
  }

  gameOver() {
    console.log("Game over");
    this.gameScreen.style.display = "none";
    this.endScreen.style.display = "block";
  }
}
