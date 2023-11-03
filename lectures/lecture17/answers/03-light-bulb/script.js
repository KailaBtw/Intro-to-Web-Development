const imgOn = "https://www.w3schools.com/js/pic_bulbon.gif";
const imgOff = "https://www.w3schools.com/js/pic_bulboff.gif";
const elem = document.querySelector("#my_image");

function turnOn() {
    if (elem.src === imgOn) {
        elem.src = imgOff;
    } else {
        elem.src = imgOn;
    }
}
