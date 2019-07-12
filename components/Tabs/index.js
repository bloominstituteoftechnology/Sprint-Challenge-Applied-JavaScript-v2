// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector(".topics");

function createTabs(lambdaTopics){

    ////create elements
   const tab = document.createElement('div');
   tab.classList.add("tab")
   tab.textContent = lambdaTopics
   
   
 

   return tab
}
axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then( response => {
    // deal with the response data in here
    response.data.topics.forEach(topic =>{
        topics.appendChild(createTabs(topic))
    })
})
.catch( err => {
    // deal with the error in here
    console.log("No bueno", error);
});