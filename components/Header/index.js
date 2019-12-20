  
// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
 
function componentCreator () {  //name function
    let head = document.createElement('div')   //create "primary" element that 
    let spanEL = document.createElement('span');  // create other needed elements
    let h1 = document.createElement('h1')
    let spanEl2 = document.createElement('span');
    head.appendChild(spanEL);  // begin adding other elements to "primary element" using appendChild
    head.appendChild(h1);  
    head.appendChild(spanEl2);
    head.classList.add('header');  // adding class names
    spanEL.classList.add('date');  
    spanEl2.classList.add('temp');

    h1.textContent = "Lambda Times";  // add text content
    spanEL.textContent = "SMARCH 28, 2019"
    spanEl2.textContent = "98°";
    
    return head;   // return primary element

}


const button = componentCreator(); //call component creator function and set result equal to variable

let container = document.querySelector('.header-container') // grab container

container.appendChild(button); //append variable containing result of called function to container elment grabbed on previous line 
