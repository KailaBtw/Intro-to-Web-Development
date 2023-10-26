	
// Assign all elements
const demoId =document.getElementById('demo');
const demoClass =document.getElementsByClassName('demo');
const demoTag =document.getElementsByTagName('article');
const demoQuery =document.querySelector('#demo-query');
const demoQueryAll =document.querySelectorAll('.demo-query-all');

// Change border of ID demo to purple
demoId.style.border ='1px solid purple';// Change border of class demo to orange

for(i =0;i <demoClass.length;i++){
	demoClass[i].style.border ='1px solid orange';
}
// Change border of tag demo to blue
for(i =0;i <demoTag.length;i++){
	demoTag[i].style.border ='1px solid blue';
}
// Change border of ID demo-query to red
demoQuery.style.border ='1px solid red';
// Change border of class query-all to green
demoQueryAll.forEach(query=>{
	query.style.border ='1px solid green';
});

let button = document.getElementById('changeBackground');

button.addEventListener('click', () => {
  document.body.style.backgroundColor = 'fuchsia';
});

//A for...of loop can be used to iterate through all children elements.

    for (let element of ul.children) {
      element.style.background = 'yellow';
    }

    document.body.children[3].lastElementChild.style.background = 'fuchsia';




const paragraph = document.createElement('p');
paragraph.textContent = "I'm a brand new paragraph.";
paragraph.innerHTML = "I'm a paragraph with <strong>bold</strong> text.";

const text = document.createTextNode("I'm a new text node.");

    // To-do list ul element
    const todoList = document.querySelector('ul');

    // Create new to-do
    const newTodo = document.createElement('li');
    newTodo.textContent = 'Do homework';

    parentNode.insertBefore(newNode,nextSibling);
    parentNode.replaceChild(newNode, oldNode);

    removeChild(child)
    todoList.children[1].remove();

Document.querySelector('selector name') [only selects the first element]
Document.querySelectorAll('name') [select all of an element]
Document.getElementById('nav')
getElementsByTagName(' ')
getElementsByClassName(' ')
document.getElementsByTagName(); //html tag

// Get a NodeList of all .demo elements
const demoClasses = document.querySelectorAll('.demo-class');

// Change the text of multiple elements with a loop
demoClasses.forEach(element => {
  element.textContent = 'All demo classes updated.';
});

// Access the first element in the NodeList
demoClasses[0];


// Assign image element
const img = document.querySelector('img');

img.hasAttribute('src');                // returns true
img.getAttribute('src');                // returns "...shark.png"
img.removeAttribute('src');             // remove the src attribute and value


// Select the first div
const div = document.querySelector('div');

// Assign the warning class to the first div
div.className = 'warning';


// Select the second div by class name
const activeDiv = document.querySelector('.active');

activeDiv.classList.add('hidden');                // Add the hidden class
activeDiv.classList.remove('hidden');             // Remove the hidden class
activeDiv.classList.toggle('hidden');             // Switch between hidden true and false
activeDiv.classList.replace('active', 'warning'); // Replace active class with warning class


//instead of text-align use textAlign for the JavaScript style property.

// Make div into a circle and vertically center the text
div.style.borderRadius = '50%';
div.style.display = 'flex';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';






<html lang="en-US">

<head>
	<title>Events</title>
</head>

<body>

	<button onclick="changeText()">Click me</button>

	<p>Try to change me.</p>

</body>

<script src="js/events.js"></script>

</html>


// Function to modify the text content of the paragraph
const changeText = () => {
	const p = document.querySelector('p');

	p.textContent = "I changed because of an inline event handler.";
}


// Add event handler as a property of the button element
const button = document.querySelector('button');
button.onclick = changeText;
button.onclick = alertText;

// Listen for click event
const button = document.querySelector('button');
button.addEventListener('click', changeText);
button.addEventListener('click', alertText);

// An anonymous function on an event listener
button.addEventListener('click', () => {
	p.textContent = "Will I change?";
});

// Remove alert function from button element
button.removeEventListener('click', alertText);

// Test the key and code properties
document.addEventListener('keydown', event => {
	console.log('key: ' + event.key);
	console.log('code: ' + event.code);
});

// Pass an event through to a listener
document.addEventListener('keydown', event => {
	var element = document.querySelector('p');

	// Set variables for keydown codes
	var a = 'KeyA';
	var s = 'KeyS';
	var d = 'KeyD';
	var w = 'KeyW';

	// Set a direction for each code
	switch (event.code) {
		case a:
			element.textContent = 'Left';
			break;
		case s:
			element.textContent = 'Down';
			break;
		case d:
			element.textContent = 'Right';
			break;
		case w:
			element.textContent = 'Up';
			break;
	}
});

const section = document.querySelector('section');

// Print the selected target
section.addEventListener('click', event => {
	console.log(event.target);
});

const address = 
  'Homer J. Simpson\n' + 
  '742 Evergreen Terrace\n' + 
  'Springfield'


  function createOAuthString(host, clientId, scope) {
    return host + '/login/oauth/authorize?client_id=' + clientId + '&scope=' + scope
  }
  
  createOAuthString('https://github.com', 'abc123', 'repo,user')
  
  const sum = (x, y) => x + y
  const x = 5
  const y = 100
  const string = `The sum of ${x} and ${y} is ${sum(x, y)}.`
  
  console.log(string)
  
  const age = 19
  const message = `You can ${age < 21 ? 'not' : ''} view this page`
  console.log(message)
  
  function tag(strings, ...expressions) {
    console.log(strings)
    console.log(expressions)
  }
  
  const string = tag`This is a string with ${true} and ${false} and ${100} interpolated inside.`




  function returnsNull(strings, ...expressions) {
    return null
  }
  
  const string = returnsNull`Does this work?`
  console.log(string)
  

  
function bold(strings, ...expressions) {
  let finalString = ''

  // Loop through all expressions
  expressions.forEach((value, i) => {
    finalString += `${strings[i]}<strong>${value}</strong>`
  })

  // Add the last string literal
  finalString += strings[strings.length - 1]

  return finalString
}

const string = bold`This is a string with ${true} and ${false} and ${100} interpolated inside.`

console.log(string)
