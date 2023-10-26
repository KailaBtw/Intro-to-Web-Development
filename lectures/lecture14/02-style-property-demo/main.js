
function makeRed() {
    document.get
    console.log('Change background to red');
    document.querySelector('#section1').style.backgroundColor = 'red';
};

function makeBlue() {
    // your code here...
    console.log('Change background to blue');
    document.querySelector('#section2').style.backgroundColor = 'blue';
};

function makePink() {
    // your code here...
    console.log('Change background to pink');
    document.querySelector('#section3').style.backgroundColor = 'pink';
};

function makeOrange() {
    // your code here...
    console.log('Change background to orange');
    document.querySelector('#section4').style.backgroundColor = 'orange';
};

function reset() {
    // your code here...
//rule does not cascade backgroundColor from main
    console.log('Change background to white');
    document.querySelector('#section1').style.backgroundColor = 'white';
    document.querySelector('#section2').style.backgroundColor = 'white';
    document.querySelector('#section3').style.backgroundColor = 'white';
    document.querySelector('#section4').style.backgroundColor = 'white';
};


