var WIDTH = 144;
var HEIGHT = 168;
var INCREMENT = 15;
var baseValues = [77, 24, 54, 24];
var dotsXValues = [29, 58, 87, 116];

var NUM_FIRST_DIGIT = 2;
var NUM_SECOND_DIGIT = 9;
var NUM_THIRD_DIGIT = 5;
var NUM_FOURTH_DIGIT = 9;

var options = {
	"backgroundColour": "#555555",
	"offDotsColour": "#000000",
	"onDotsColour": "#FFFFFF"
};

function clearScreen() {
	var c = document.getElementById("screen");
	var ctx = c.getContext("2d");
	
	ctx.clearRect(0, 0, WIDTH, HEIGHT);
	drawBackground();
}

function drawCircle(colour, x, y, radius) {
	var c = document.getElementById("screen");
	var ctx = c.getContext("2d");
	
	ctx.beginPath();
	
	ctx.fillStyle = colour;
	ctx.arc(x, y, radius, 0, 2 * Math.PI);
	ctx.fill();
}

function drawBackground() {
	var c = document.getElementById("screen");
	var ctx = c.getContext("2d");
	
	ctx.fillStyle = options.backgroundColour;
	ctx.fillRect(0, 0, WIDTH, HEIGHT);
	
	for (var i = baseValues[0]; i < (NUM_FIRST_DIGIT * INCREMENT) + baseValues[0]; i += INCREMENT) {
        drawCircle(options.offDotsColour, dotsXValues[0], i, 5);
    }
    
    for (var i = baseValues[1]; i < (NUM_SECOND_DIGIT * INCREMENT) + baseValues[1]; i += INCREMENT) {
        drawCircle(options.offDotsColour, dotsXValues[1], i, 5);
    }

    for (var i = baseValues[2]; i < (NUM_THIRD_DIGIT * INCREMENT) + baseValues[2]; i += INCREMENT) {
        drawCircle(options.offDotsColour, dotsXValues[2], i, 5);
    }
    
    for (var i = baseValues[3]; i < (NUM_FOURTH_DIGIT * INCREMENT) + baseValues[3]; i += INCREMENT) {
        drawCircle(options.offDotsColour, dotsXValues[3], i, 5);
    }    
}

function drawTime() {
	clearScreen();
	
	var d = new Date();
	
	var hours = d.getHours();
	var hourStr = ("0" + hours).slice(-2);
	var mins = d.getMinutes();
	var minStr = ("0" + mins).slice(-2);
	
	var firstHour = parseInt(hourStr.substr(0, 1), 10);
	var secondHour = parseInt(hourStr.substr(1, 2), 10);
	var firstMin = parseInt(minStr.substr(0, 1), 10);
	var secondMin = parseInt(minStr.substr(1, 2), 10);
	// console.log(firstHour + " " + secondHour + " " + firstMin + " " + secondMin);
	
	for (var i = (baseValues[0] + (NUM_FIRST_DIGIT * INCREMENT)) - INCREMENT; i > (baseValues[0] + (NUM_FIRST_DIGIT * INCREMENT) - (firstHour * INCREMENT)) - INCREMENT; i -= INCREMENT) {
		drawCircle(options.onDotsColour, dotsXValues[0], i, 5);
	}
	
	for (var i = (baseValues[1] + (NUM_SECOND_DIGIT * INCREMENT)) - INCREMENT; i > (baseValues[1] + (NUM_SECOND_DIGIT * INCREMENT) - (secondHour * INCREMENT)) - INCREMENT; i -= INCREMENT) {
		drawCircle(options.onDotsColour, dotsXValues[1], i, 5);
	}
	
	for (var i = (baseValues[2] + (NUM_THIRD_DIGIT * INCREMENT)) - INCREMENT; i > (baseValues[2] + (NUM_THIRD_DIGIT * INCREMENT) - (firstMin * INCREMENT)) - INCREMENT; i -= INCREMENT) {
		drawCircle(options.onDotsColour, dotsXValues[2], i, 5);
	}
	
	for (var i = (baseValues[3] + (NUM_FOURTH_DIGIT * INCREMENT)) - INCREMENT; i > (baseValues[3] + (NUM_FOURTH_DIGIT * INCREMENT) - (secondMin * INCREMENT)) - INCREMENT; i -= INCREMENT) {
		drawCircle(options.onDotsColour, dotsXValues[3], i, 5);
	}
}

function startSequence() {
	setInterval(drawTime, 1000);
}
