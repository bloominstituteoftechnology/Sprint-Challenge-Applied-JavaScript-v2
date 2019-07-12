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


function Header() {
   
    // NEW ELEMENT 
    const header = document.createElement("div"); 
    const date = document.createElement("span"); 
    const headerh1 = document.createElement("h1"); 
    const temp = document.createElement("span"); 

    // CLASS NAMES
    header.classList.add("header"); 
    date.classList.add("date"); 
    temp.classList.add("temp"); 

    // TEXT CONTENT
    date.textContent = "March 28, 2019"; 
    headerh1.textContent = "Lambda Times"; 
    temp.textContent = "98°"; 

    // CREATED STRUCTURE 
    header.appendChild(date);
    header.appendChild(headerh1);
    header.appendChild(temp);

    return header 
}

// headerContainer
const headerContainer = document.querySelector(".header-container"); 
console.log(headerContainer); 

// append header to headerContainer div 
headerContainer.appendChild(Header()); 
