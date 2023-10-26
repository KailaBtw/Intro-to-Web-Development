function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background("pink");

    drawCreature(500, 500, "lightPink", 150);
    drawCreature(200, 200, "lightBlue", 100);
    /* Use the drawing functions to draw a picture. Ideas:
        * Draw an animal
        * Draw a tree
        * Draw a car
        * Draw some abstract art
    */


    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}

function drawCreature(x, y, color, size) {
    fill(color)
    let eyeball = size/7.5;
    circle(x, y+10, size*.7);
    fill("white")
    circle(x-20, y-5, 2*eyeball);
    fill("black")
    circle(x-20, y-5, eyeball);
    fill("white")
    circle(x+20, y-5, 2*eyeball);
    fill("black")
    circle(x+20, y-5, eyeball);
}