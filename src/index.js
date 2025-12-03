let ourGame;

window.onload = function () {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");

  startButton.addEventListener("click", function () {
    startGame();
  });
  restartButton.addEventListener("click", function () {
    window.location.reload();
  });

  window.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft" || event.code === "KeyA") {
      ourGame.player.directionX = -8;
    }
    if (event.code === "ArrowRight" || event.code === "KeyD") {
      ourGame.player.directionX = 8;
    }
    if (event.code === "ArrowUp" || event.code === "KeyW") {
      ourGame.player.directionY = -8;
    }
    if (event.code === "ArrowDown" || event.code === "KeyS") {
      ourGame.player.directionY = 8;
    }

    if (event.code === "Space") {
      ourGame.player.element.classList.add("spin");
    }
  });

  window.addEventListener("keyup", (event) => {
    if (event.code === "ArrowLeft" || event.code === "KeyA") {
      ourGame.player.directionX = 0;
    }
    if (event.code === "ArrowRight" || event.code === "KeyD") {
      ourGame.player.directionX = 0;
    }
    if (event.code === "ArrowUp" || event.code === "KeyW") {
      ourGame.player.directionY = 0;
    }
    if (event.code === "ArrowDown" || event.code === "KeyS") {
      ourGame.player.directionY = 0;
    }

    if (event.code === "Space") {
      ourGame.player.element.classList.remove("spin");
    }
  });

  function startGame() {
    ourGame = new Game();
    ourGame.start();
  }
};
