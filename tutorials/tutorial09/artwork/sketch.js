const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 
const colors = ["#08415c", "#e1f0c4", "#6bab90", "#55917f", "#5e4c5a"];

function randomFloat(min, max) { 
	// min and max included 
	return Math.random() * (max - min) + min;
}

function randomInt(min, max) { 
	// min and max included 
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    // frameRate(2);
    //clear();
    let counter = 0;
    while(counter <500) {

    colorId = randomInt(0,4)
    fill(colors[colorId]);

    // draw a random circle:
    let x = randomInt(0, canvasWidth);
    let y = randomInt(0, canvasHeight);
    let size = randomFloat(25, 125);
    //console.log("X", x, " Y:", y," Size:", size)
    shapeId = Math.random()*4;
    if(shapeId < 1) {
    circle(x, y, size);
    } else if (shapeId > 0 && shapeId < 2) {
        square(x, y, size);
    } else if (shapeId > 1 && shapeId < 3) {
        triangle(
        x, y - size / 2, 
        x - size / 2.25, y + size / 4.3,
        x + size / 2.25, y + size / 4.3
        );
    } else {
        let coefX = randomFloat(-3, 3);
        let coefY = randomFloat(-3, 3);
        line(x, y, x + size * coefX, y + size * coefY);
    }
    counter++;
   }
}

countr = 0;
// // anything that you want to animate goes in this function:  
function draw() {
//     //clear();
//     let counter = 0;
//    // while(counter <500) {

//     colorId = parseInt(Math.random() * 4, 10)
//     fill(colors[colorId]);

//     // draw a random circle:
//     let x = randomInt(0, canvasWidth);
//     let y = randomInt(0, canvasHeight);
//     let size = randomFloat(25, 125);
//     console.log("X", x, " Y:", y," Size:", size)
//     shapeId = Math.random()*2
//     if(shapeId ==0) {
//     circle(x, y, size);
//     } else if (shapeId == 1) {
//         square(x, y, size);
//     } else if (shapeId ==2) {
//         // triangle(
//     x, y - size / 2, 
//     x - size / 2.25, y + size / 4.3,
//     x + size / 2.25, y + size / 4.3
//     }
//     counter++;
//    // }

}



// // 3. draw a random line:


