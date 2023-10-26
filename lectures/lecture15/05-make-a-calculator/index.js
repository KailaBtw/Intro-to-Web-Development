function addNumbers() {
    // Your job: 
    // 1. Access the first number that the user typed in and store it
    //    as a variable.
    let num1 = parseInt(document.querySelector("#num1").value);
    let num2 = parseInt(document.querySelector("#num2").value);
    // console.log(num1);
    // console.log(num2);
    let result = num1 + num2;
    document.querySelector("#answer").innerHTML = result; //innerHTML tagets the text inside an element

    // 2. Access the first number that the user typed in and store it
    //    as a variable.
    // 3. Convert the values stored inside of the two variables to a 
    //    number (so that you can do math)!

    // 4. Add the two numbers together.
    // 5. Write the result to the #answer section
    //let answer = document.querySelector("#answer");
    //document.querySelector("#answer").appendChild("")
    //const text = document.createTextNode(result);

}
function mathNumbers() {
    let num1 = parseInt(document.querySelector("#num1").value);
    let num2 = parseInt(document.querySelector("#num2").value);
    let result = num1 - num2;
    document.querySelector("#answer").innerHTML = result; //innerHTML tagets the text inside an element
}
function subtractNumbers() {
    let num1 = parseInt(document.querySelector("#num1").value);
    let num2 = parseInt(document.querySelector("#num2").value);
    let result = num1 - num2;
    document.querySelector("#answer").innerHTML = result; //innerHTML tagets the text inside an element
}
function multiplyNumbers() {
    let num1 = parseInt(document.querySelector("#num1").value);
    let num2 = parseInt(document.querySelector("#num2").value);
    let result = num1 * num2;
    document.querySelector("#answer").innerHTML = result; //innerHTML tagets the text inside an element
}

function divideNumbers() {
    let num1 = parseInt(document.querySelector("#num1").value);
    let num2 = parseInt(document.querySelector("#num2").value);
    let result = num1 / num2;
    document.querySelector("#answer").innerHTML = result; //innerHTML tagets the text inside an element
}

