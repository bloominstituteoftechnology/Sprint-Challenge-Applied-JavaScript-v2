// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const tabs = document.querySelector(".tabs");
const prom1 = axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then( response => {
    // deal with the response data in here
    console.log("Hi", response.data);
    const tabs = document.querySelectorAll('.tabs')
})
.catch( err => {
    // deal with the error in here
    console.log("No bueno", error);
});

function createTabs(lambdaTopics){

    ////create elements
   const tabs = document.createElement('div')
   const tab = document.createElement('div');
   const tabTopics = document.createElement('div');
   const tabTitle = document.createElement('span')

    ///appendChild
   tabs.appendChild(tab);
   tab.append(tabTopics, tabTitle);

   return tabs
}