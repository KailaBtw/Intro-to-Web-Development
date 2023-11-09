function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);

    // fill('red');
    noFill();
    for(let i=0; i<600; i+=5) {
        fill("red");
        circle(200, 50 + i, 50 + i/2);
        fill("blue");
        circle(400, 600 - i, 50 + i/2);
        circle(600, 50 + i, 50 + i/2);
    }

    drawGrid(canvasWidth, canvasHeight);
}
