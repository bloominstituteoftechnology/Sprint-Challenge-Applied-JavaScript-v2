// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

function Header() {}

const insertionPoint = document.querySelector(".header-container");
//console.log(
//   'index.js -> %cdocument.querySelector(".header-container"):',
//   "color: #baba09",
//   document.querySelector(".header-container")
// );

makeHeader();

function makeHeader(data) {
  const header = document.createElement("div");
  const date = document.createElement("span");
  const title = document.createElement("h1");
  const temperature = document.createElement("span");

  // Setup structure of elementsreturn artBox;

  insertionPoint.appendChild(header);
  header.appendChild(date);
  header.appendChild(title);
  header.appendChild(temperature);

  // set class names
  header.classList.add("header");
  date.classList.add("date");
  temperature.classList.add("temp");

  ///// content /////

  date.textContent = "MARCH 28, 2019";
  title.textContent = "Lambda Times";
  temperature.textContent = "98°";
}