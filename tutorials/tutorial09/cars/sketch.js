const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
let accel = 0;

// feel free to change these values as you like!
const c1 = {
    x: 100,
    y: 100,
    width: 200,
    speed: 1,
    color: 'hotpink'
};
const c2 = {
    x: window.innerWidth,
    y: 300,
    width: 200,
    speed: -3,
    color: 'red'
};
const c3 = {
    x: 0,
    y: 700,
    width: 200,
    speed: 1,
    color: 'green'
};
const t1 = {
    x: 0,
    y: 400,
    width: 200,
    speed: 1,
    color: 'yellow'
};

// required to set up the canvas:
function setup() {
    createCanvas(canvasWidth, canvasHeight);
}


// animation loop:
function draw() {
    // clear the canvas:
    clear();

    // move the car:
    if (accel < 20) {
    accel += 0.2;
    }
    if(c1.x > window.innerWidth) {
        c1.x = 0;
    } else {
        c1.x += (c1.speed + accel);
    }
    if(c2.x < 0) {
        c2.x = canvasWidth;
    } else {
        c2.x += (c2.speed - accel);
    }
    if(c3.x > window.innerWidth) {
        c3.x = 0;
    } else {
        c3.x += (c3.speed + accel);
    }
    if(t1.x > window.innerWidth) {
        t1.x = 0;
    } else {
        t1.x += (t1.speed + accel);
    }

    // redraw the car:
    drawCar(c1.x, c1.y, c1.width, c1.color);
    drawCar(c2.x, c2.y, c2.width, c2.color);
    drawCar(c3.x, c3.y, c3.width, c3.color);
    drawTruck(t1.x, t1.y, t1.width, t1.color);
    // draw the grid (optional -- feel free to remove this line):
    drawGrid(canvasWidth, canvasHeight);
}


// this function's job is to draw a car based on the 
// parameters the user passes in (x, y, size, fillColor, and wheelColor)
function drawCar(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/4, y - (size/5 + size/7), size / 2, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}

function drawTruck(x, y, size, fillColor, wheelColor='black') {
    strokeWeight(0);
    
    // body
    fill(fillColor);
    rect(x - size/2, y - (size/5 + size/7), size / 1.5, size/7); // top
    rect(x - size/2, y - size/5, size, size/5); // bottom

    // wheels:
    fill(wheelColor);
    circle(x - size / 4, y, size / 6);
    circle(x + size / 4, y, size / 6);
}
