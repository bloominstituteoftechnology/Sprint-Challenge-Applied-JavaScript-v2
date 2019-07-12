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

function Header(content) {
    const header = document.createElement('div')
    const date = document.createElement('span')
    const name = document.createElement('h1')
    const temp = document.createElement('span')
    header.appendChild(header)
    header.appendChild(date)
    header.appendChild(name)
    header.appendChild(temp)
}
