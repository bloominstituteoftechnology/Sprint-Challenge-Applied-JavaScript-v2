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

  arrayValues = (info['topics']); //<--- maybe should be outside? 
  console.log(arrayValues); // ["javascript", "bootstrap", "technology", "jquery", "node.js"]
  

  //to pass array into tabCreator
  arrayValues.forEach(arrIndex => {
    //need to create a div for each topic, but I think that the componenet is already doing that.
    //for each [i] in the array, I want to it to pass through tabCreator
    newTopic = tabCreator(arrIndex);
    console.log(newTopic); // newTopic is showing this: <div class="tab"></div>

    //adding class '.active-tab' here maybe? not sure if need an event listener...
    // newTopic.forEach(function () => {}) ----> Going to add event listener in  the tabCreator

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

    //not sure if need textContent since arrayInfo has content. YES! Finally figured out that I needed
    //to pass the parameter itself as the context as well
    tabC.textContent = `${arrayIndexItem}`

    //event Listener (maybe need a for each but don't think so since this is already a [i])
    // tabC.addEventListener("click", () => {
    //   /*something here*/tabC.classList.add('active-tab');
    // })

    //return
    return tabC;
}

//don't know where to put the '.active-tab' on? Maybe on the forEach section


