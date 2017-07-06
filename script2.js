var p1Btn = document.querySelector("#p1");
var p2Btn = document.querySelector("#p2");
var resetBtn = document.querySelector("#reset");

var scoreInput = document.querySelector("input");

var p1Display = document.querySelector("#p1Score");
var p2Display = document.querySelector("#p2Score");
var gameOverDisplay = document.querySelector("#gameOver");
var scoreLimitDisplay = document.querySelector("#scoreLimit");

var p1Score = 0;
var p2Score = 0;

var scoreLimit = 5;
var gameOver = false;

scoreInput.addEventListener("change", function() {
	scoreLimitDisplay.textContent = scoreInput.value;
	scoreLimit = Number(scoreInput.value);
	reset();
})

p1Btn.addEventListener("click", function() {
	if (!gameOver) {
		p1Score ++;
		p1Display.textContent = p1Score;
	}
	if (p1Score === scoreLimit)
	{
		gameOver=true;
		p1Display.classList.add("green");
		gameOverDisplay.textContent = "Game over!";
	}
})
p2Btn.addEventListener("click", function() {
	if (!gameOver) {
		p2Score ++;
		p2Display.textContent = p2Score;
	}
	if (p2Score === scoreLimit)
	{
		gameOver=true;
		p2Display.classList.add("green");
		gameOverDisplay.textContent = "Game over!";
	}
})
resetBtn.addEventListener("click", function() {
	reset();
})

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	gameOver = false;
	gameOverDisplay.textContent = "";
	p1Display.classList.remove("green");
	p2Display.classList.remove("green");
}