"use strict";

let highscore = 0;

let secret_num = Math.trunc(Math.random() * 20) + 1;

let score = 10;
document.querySelector(".score").textContent = score;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (guess == false) {
    document.querySelector(".message").textContent =
    "Enter a guess between 1 and 20!!";
  } else if (guess === secret_num) {
    document.querySelector(".message").textContent = "Correct guess!!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "99%";
    document.querySelector(".number").textContent = secret_num;
    document.querySelector(".check").style.display = "none";
    document.querySelector(".number").style.left = "0%";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess > secret_num && guess <= 20) {
    document.querySelector(".message").textContent = "Too High!!";
    score--;
    document.querySelector(".score").textContent = score;
    if (score === 0) {
      document.querySelector(".message").textContent = "You lost the game!!";
      document.querySelector("body").style.backgroundColor = "#E20101";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".check").style.display = "none";
      document.querySelector(".number").textContent = secret_num;
    }
  } else if (guess < secret_num && guess >= 1) {
    document.querySelector(".message").textContent = "Too Low!!";
    score--;
    document.querySelector(".score").textContent = score;
    if (score === 0) {
      document.querySelector(".message").textContent = "You lost the game!!";
      document.querySelector("body").style.backgroundColor = "#E20101";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".check").style.display = "none";
      document.querySelector(".number").textContent = secret_num;
    }
  } else if (guess < 1 || guess > 20) {
    document.querySelector(".message").textContent =
    "Enter a guess between 1 and 20!!";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  secret_num = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").width = "15rem";
  document.querySelector(".guess").value = " ";
  document.querySelector(".check").style.display = "block";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").style.left = "45%";
});
