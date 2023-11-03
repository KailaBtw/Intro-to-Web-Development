function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);


    

    // your creature:
    fill('yellow')
    circle(300, 300, 300)

    fill('black')
    ellipse(250, 250, 30, 40)
    ellipse(350, 250, 30, 40)






    // for debugging:
    drawGrid(canvasWidth, canvasHeight)
}