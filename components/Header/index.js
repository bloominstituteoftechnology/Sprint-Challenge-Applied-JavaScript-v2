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

function Header() {
    const header = document.createElement('div');
    const date = document.createElement('span');
    const head = document.createElement('h1');
    const temp = document.createElement('span');

    //Create classes for each header element with a class
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    //Create date, header, and temperature reading content
    date.textContent = "March 28. 2019";
    head.textContent = "Lambda Times";
    temp.textContent = "98°";

    //Create order for elements created at top of function
    header.appendChild(date);
    header.appendChild(head);
    header.appendChild(temp);

    return header;
}

//mount the content from this function to the page
const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header())