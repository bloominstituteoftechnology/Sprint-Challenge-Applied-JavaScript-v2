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
headerContainer.appendChild(finish);
const finish = Header();

function Header() {
  const head = document.createElement("div");
  const date = document.createElement("span");
  const title = document.createElement("h1");
  const temp = document.createElement("span");

  head.classList.add("header");
  date.classList.add("date");
  temp.classList.add("temp");

  title.textContent = "Lambda Times";
  date.textContent = "SMARCH 28, 2019";
  temp.textContent = "98°";

  head.appendChild(date);
  head.appendChild(h1);
  head.appendChild(temp);

  return head;
}
