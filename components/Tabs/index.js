// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


let a = document.querySelector(".tabs");
console.log(a);

axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then (x => {

   x.data.topics.forEach(to => { a.appendChild(Tabtab(to))}) 
    //createCards(data)
    //console.log(data)
    })
  
.catch (data => {console.log(data)})

function Tabtab(headingTitle){
   // console.log(headingTitle)
const tabsTabs = document.createElement('div');

tabsTabs.textContent = `${headingTitle}`;
tabsTabs.classList.add('tab'); 

return tabsTabs
}