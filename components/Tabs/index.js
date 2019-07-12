// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics

//data: {"topics":["javascript","bootstrap","technology","jquery","node.js"]}


// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsHtml = document.querySelector('.topics');
//want to add the tabCreator(arrayParam) to topicsHtml later [...]

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then(data => {
  const info = data.data; 
  console.log(`Here's the info`);
  console.log(info);
  //get: {"topics": ["javascript", "bootstrap", "technology", "jquery", "node.js"]}
  //BUT need to acess data from the array, maybe use variables? need to remove braces or access only the array
  // arrayinfo = info.value; <--- wrong approach (lesson learned...)
  arrayValues = (info['topics']);
  console.log(arrayValues);
  
  //to pass array into tabCreator
  arrayValues.forEach(arrIndex => {
    //need to create a div for each topic, but I think that the componenet is already doing that.
    //for each [i] in the array, I want to ... no I
    newTopic = tabCreator(arrIndex);
    
    //append last
    topicsHtml.appendChild(newTopic);
  })

})
.catch(err => {console.log('Did not work!')})



//tab component
// not sure if I should pass arr or [i] of array
const tabCreator = (arrayIndexItem) => {
    tabC = document.createElement('div')
    tabC.classList.add('tab');
    //not sure if need textContent since arrayInfo has content

    //return
    return tabC;
}


