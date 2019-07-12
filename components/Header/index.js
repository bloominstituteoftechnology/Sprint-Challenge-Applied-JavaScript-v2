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

const headerContainerHtml = document.querySelector('.header-container');


function Header() {
    //create elements
    headerContainer = document.createElement('div');
    spanC1 = document.createElement('span');
    h1C = document.createElement('h1');
    spanC2 = document.createElement('span');

    //classnames 
    headerContainer.classList.add('header');
    spanC1.classList.add('date');
    spanC2.classList.add('temp');

    //append elements
    // headerContainerHtml.appendChild(headerContainer);
    headerContainer.appendChild(spanC1);
    headerContainer.appendChild(h1C);
    headerContainer.appendChild(spanC2);

    //content
    spanC1.textContent = `SMARCH 28, 2019`;
    h1C.textContent = `Lambda Times`;
    spanC2.textContent = `98°`;

    //return
    return headerContainer;
}

headerContainerHtml.appendChild(Header());
