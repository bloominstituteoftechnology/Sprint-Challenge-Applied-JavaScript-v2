// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// <!-- TABS COMPONENT, PLACE TABS HERE -->
// <div class="tabs">
//   <div class="topics">
//     <span class="title">TRENDING TOPICS:</span>
//   </div>
// </div>

///container
const tabs = document.querySelector(".tabs");

///axios
const promise1 = axios.get("https://lambda-times-backend.herokuapp.com/topics");

promise1
  .then(response => {
    console.log("Hai", response.data);
    const tabs = document.querySelectorAll('.tabs');
    // console.log(tabs);
    // const tab = createTabs(response.data);
    // tabs.appendChild(tab);
  })

  .catch(error => {
    console.log("No guud", error);
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

    ///set styles


    ///set content

    return tabs
}

// <!-- TABS COMPONENT, PLACE TABS HERE -->
// <div class="tabs">
//   <div class="topics">
//     <span class="title">TRENDING TOPICS:</span>
//   </div>
// </div>