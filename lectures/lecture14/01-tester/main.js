function makeRed() {
    // your code here...
    console.log("Change background to red");
    document.querySelector("body").style.backgroundColor = "red";
}

function makeBlue() {
    // your code here...
    console.log("Change background to blue");
}

function makePink() {
    // your code here...
    console.log("Change background to pink");
}

function makeOrange() {
    // your code here...
    console.log("Change background to orange");
}

function updateScreen(ev) {
    ev.preventDefault();
    const selector = document.querySelector("#selector").value;
    const prop = document.querySelector("#thing-to-change").value;
    const val = document.querySelector("#value").value;
    const executionString = `document.querySelector("${selector}").${prop} = "${val}"`;
    console.log(executionString);
    document.querySelector("#code").innerHTML = executionString;
    try {
        eval(executionString);
    } catch (ex) {
        console.error(ex);
    }
}
