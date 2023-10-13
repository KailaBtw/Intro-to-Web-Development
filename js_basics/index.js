   
   
// //comment
// console.log('hello world');

// //variables
//  //var is old
//  let firstName = 'Ellie';
//  console.log(firstName);
      
//  //constants (like final in java)
//  const interestRate = 0.3;

//  //primitve types vs referense types
// //primitives: 



// let employee = {
//     baseSalary: 30_000,
//     overtime: 10,
//     rate: 20,
//     getWage: function() {
//         return this.baseSalary + (this.overtime * this.rate);
//     }
// };
// employee.getWage();

// function greet(name, lastName) { //do function with parameter
// 	console.log('Hello' + name);
// 	}
	
// 	greet('Ellie', 'Lagrave'); //call function with argument
	
// 	//calculate a value
// 	function square(number) {
// 		return number*number;
// 	}
	
// let number = square(2);


// const circle = {  //Object literal syntax
// 	//contains key/value pairs
//     radius: 1, //property
//     location: { //object literal syntax brackets
//         x: 1, //property
//         y: 1
//     },
//     draw: function() { //method
//         console.log('draw');
//     }
// };   


// //facotry function
// function createCircle(radius) {
//     return { 
//         radius, 
//         draw: function() { 
//             console.log('draw radius: ' + radius);
//         }
//     };  
// }

// // const circle = createCircle(2);
// // circle.draw();


// //'this' is the global objects (at the node or at the browser)
// //constructor function
// function Circle(radius) {
//     //console.log('this', this);
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw radius: ' + radius);
//     }
// }

// /*using new
// 1) creates empty object
// 2) sets 'this' to point of the given object
// 3) returns object from function
// */



// another.draw();
// another.constructor

//Circle.

//use a function internally
// const Circle1 = new Function ('radius', 
// `this.radius = radius;
// this.draw = function() {
//     console.log('draw radius: ' + radius);
// }
// `)

// const circle = new Circle1(4);



//const another = new Circle(3);




// Circle.call({}, 5);  //{} is our object (target of this)
// Circle.apply({}, [1,2,3]);

// const another = new Circle(5);
// another.draw;

let x = 10;
let y = x;


let number = 10;
function increase(number) {
    //this only increases it WITHIN the function
    number++ //must use objects to change global
}

increase(number);
console.log(number); //still 10


//using objects
let obj = { value: 10 };
function increase(obj) {
    obj.value++ //must use this to change global
}

increase(obj);
console.log(obj); //now 11








