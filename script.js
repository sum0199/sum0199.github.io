var squares = document.querySelectorAll(".square");
var winColSpan = document.querySelector("#goal");
var message =document.querySelector("#message");
var h1 = document.querySelector("h1");
var winningColour = "";
var easyBtn = document.querySelector("#easy");
var medBtn = document.querySelector("#medium");
var hardBtn = document.querySelector("#hard");
var resetBtn = document.querySelector("#resetBtn");
//Default - for hard mode
var colourNumber = 9;

//generate game values
resetGame();
//add events to squares when clicked
for(var i = 0; i < squares.length; i++)
{
	squares[i].addEventListener("click", function() { 
		var clickedCol = this.style.backgroundColor;
		console.log(clickedCol, winningColour);
		if (clickedCol === winningColour)
		{
			message.textContent = "You got it!";
			resetBtn.textContent = "Play again?";
			changeColorsOnWin(clickedCol);
			h1.style.backgroundColor = clickedCol;
		}
		else {
			this.style.backgroundColor = "#333333";
			message.textContent = "That wasn't right";
		}
	});
}
//Finally add listeners for reset button and difficulty buttons
easyBtn.addEventListener("click", function() {
	this.classList.add("selected");
	hardBtn.classList.remove("selected");
	medBtn.classList.remove("selected");
	colourNumber = 3;
	resetGame();
})
medBtn.addEventListener("click", function() {
	this.classList.add("selected");
	easyBtn.classList.remove("selected");
	hardBtn.classList.remove("selected");
	colourNumber = 6;
	resetGame();
})
hardBtn.addEventListener("click", function() {
	this.classList.add("selected");
	easyBtn.classList.remove("selected");
	medBtn.classList.remove("selected");
	colourNumber = 9;
	resetGame();
})
resetBtn.addEventListener("click", resetGame);
//Game is ready to play.

//Game functions
function resetGame() {
	//new colours
	colors = chooseColours(colourNumber);
	//pick new colour
	winningColour = pickWinColour();
	//update wilColSpan with new colour
	winColSpan.textContent = winningColour;
	//update game logic
	updateSquares();
	//update button and h1
	message.textContent = "";
	resetBtn.textContent = "New Colours";
	h1.style.backgroundColor = "steelblue";
}

function updateSquares() {
	for (var i = 0; i < squares.length; i++)
	{
		if (i < colourNumber)
		{
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
}

function changeColorsOnWin(targetColor) {
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = targetColor;
	}
}

function chooseColours(num) {
	var arr = [];
	for (i = 0; i < num; i++)
	{
		arr[i] = randomColour()
	}
	return arr;
}

function pickWinColour() {
	var rand = Math.floor(Math.random() * colors.length);
	return colors[rand];
}

function randomColour() {
	return "rgb(" + rand255() + ", " + rand255() + ", " + rand255() + ")";
}

function rand255() {
	return Math.floor(Math.random() * 256);
}