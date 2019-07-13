// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-Container component

const headData = [
    {
        date: 'MARCH 28, 2019',
        title: 'Lambda Times',
        temp: '98°',
    }
];

const header = document.querySelector('.header-container');

function Header(date, title, temp) {

    //defining DOM elements
    let headerDOM = document.createElement('div');
    let dateDOM = document.createElement('span');
    let h1DOM = document.createElement('h1');
    let tempDOM = document.createElement('span');

    //recreating html element structure 
    headerDOM.appendChild(dateDOM);
    headerDOM.appendChild(h1DOM);
    headerDOM.appendChild(tempDOM);

    //adding styling
    headerDOM.classList.add('header');
    dateDOM.classList.add('date');
    tempDOM.classList.add('temp');

    //text content
    dateDOM.textContent = date;
    h1DOM.textContent = title;
    tempDOM.textContent = temp;

    return headerDOM;
};



header.appendChild(Header(headData[0].date, headData[0].title, headData[0].temp));