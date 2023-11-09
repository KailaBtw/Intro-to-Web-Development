let x = 100;
let y = 200;
let width = 50;
let speed = 10;


c1 = {
x: 100,
y: 200,
width: 50
}

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function sleep(ms=100) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function drawFunction() {  
    c1.x += speed;
    c1.y += 5
    clear();
    noFill();

    circle(c1.x, c1.y, c1.width)
    drawGrid(canvasWidth, canvasHeight);
}

async function actualp5AnimationLoop() {
    while(true) {
        drawFunction(); 
        // sleep for 20 milliseconds, and then jump back to the top
        // of the loop.
        await sleep(20);
    }
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    
    // what is probably happening behind the scenes: 
    actualp5AnimationLoop();  
}

