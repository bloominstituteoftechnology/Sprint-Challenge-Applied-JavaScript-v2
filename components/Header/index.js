// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the header-container component

function Header() {

//define new elements
const head = document.createElement('div');
const date = document.createElement('span');
const headingOne = document.createElement('h1');
const temperature = document.createElement('span');

//setup structure of elements
head.appendChild(date)
head.appendChild(headingOne)
head.appendChild(temperature)

//set class names
head.classList.add('header');
date.classList.add('date');
headingOne.classList.add('h1');
temperature.classList.add('temp');

//set text content
date.textContent = "MARCH 28";
headingOne.textContent = "Lambda Times";
temperature.textContent = "95%";


return head;
}

const project = document.querySelector('.header-container');
console.log(project)

project.appendChild(Header());