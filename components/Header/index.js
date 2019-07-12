// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerContainer = document.querySelector(".header-container");
console.log(headerContainer);

function Header() {
  // New Elements

  const head = document.createElement("div");
  console.log("check", head);
  const date = document.createElement("span");
  const title = document.createElement("h1");
  const temp = document.createElemnt("span");

  // Set class names
  head.classList.add("header");
  date.classList.add("date");
  title.classList.add("title");
  temp.classList.add("temp");

  // Structure of Elements
  head.appendChild(header);
  date.appendChild(date);
  title.appendChild(title);
  temp.appendChild(temp);

  // Set text content
  date.textContent = "SMARCH 28, 2019";
  title.textContent = "Lambda Times";
  temp.textContent = "98°";

  return head;
}
