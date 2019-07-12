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

function headerFunction() {
    const header = document.createElement('div')
    const date = document.createElement('span')
    const h1Lambda = document.createElement('h1')
    const temp = document.createElement('span')

    header.classList.add('header')
    date.classList.add('date')
    h1Lambda.textContent = 'Lambda Time'
    temp.textContent = '98°'

    header.appendChild(date)
    header.appendChild(h1Lambda)
    header.appendChild(temp)
    
    return header
}

const headerComponent = headerFunction()
const headerContainer = document.querySelector('.header-container')

headerContainer.parentNode.insertBefore(headerComponent, headerContainer.nextSibling)