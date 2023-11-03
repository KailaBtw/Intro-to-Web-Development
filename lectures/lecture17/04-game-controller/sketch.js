let x = 100;
let y = 200;
let width = 50;
let fillColor = "white";

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    circle(x, y, width);

    drawGrid(canvasWidth, canvasHeight);
}

function moveController(ev) {
    console.log(ev.code);

    if(ev.code==="ArrowUp") {
        y = y - 10
    } else if(ev.code==="ArrowDown") {
        y = y + 10
    } else if(ev.code==="ArrowLeft") {
        x = x - 10
    } else if(ev.code==="ArrowRight") {
        x = x + 10
    } else if(ev.code==="Escape") {
        width = width - 5
    } else if(ev.code==="Space") {
        width = width + 5
    } else if(ev.code === "KeyR") {
        if(fillColor === "red")  {
            fillColor = "white"
        } else {
            fillColor = "red"
        }
    }
    else if(ev.code === "KeyB") {
        if(fillColor === "blue")  {
            fillColor = "white"
        } else {
            fillColor = "blue"
        }
    }
    // left arrow moves circle left
    // right arrow moves circle right
    // up arrow moves circle up
    // down arrow moves circle down

    // redraw circle:
    clear();
    fill(fillColor)
    circle(x, y, width);
    drawGrid(canvasWidth, canvasHeight);
}

// Add event listener on keydown
document.addEventListener("keydown", moveController);
function drawGrid(canvasWidth, canvasHeight) {
    textSize(10);
    textStyle(NORMAL);
    for (let x = 0; x < canvasWidth; x += 100) {
		for (let y = 0; y < canvasHeight; y += 100) {
			stroke(0);
            fill(0);
			strokeWeight(1);
			line(x, 0, x, canvasHeight);
			line(0, y, canvasWidth, y);
            if ((x + 100) % 200 == 0 && (y + 100) % 200 == 0) {
			    strokeWeight(8);
                point(x, y);
                strokeWeight(0);
                text(`(${x}, ${y})`, x + 5, y + 20);
            }
            strokeWeight(1);
		}
	}
}