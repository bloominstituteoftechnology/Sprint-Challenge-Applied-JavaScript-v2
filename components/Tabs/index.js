// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>








///container
// tabs = document.querySelector(".topics");/// made container for topics. If you put ".tabs" for some reason it scrunches up the tab names
///^^^ not necessary if you reformat axios

///axios
axios
  .get("https://lambda-times-backend.herokuapp.com/topics") //// get info from API  for topics
  .then(data => {
    ///success and what would happen if successful
    // console.log('OH HAI', data);
    const topicsForTab = data.data.topics; ////dipped into data from console via data.topics to get topicsForTab
    topicsForTab.forEach(element => {
      ///just used element because the name doesnt really matter
      const tab = createTabs(element); ///got tab  variable name  to = the function set up below
      tabs = document.querySelector(".topics"); /// made container for topics. If you put ".tabs" for some reason it scrunches up the tab names
      tabs.appendChild(tab); ///appendChild tab to tabs(which is the container)
    });
  })

  .catch(error => {
    ///failure
    console.log("NO GUUD", error);/// error message that comes up if failure occurs: 'NO GUUD
  });

function createTabs(techTopics) {
  ////function with function name of createTabs that holds parameter techTopics to use later on
  ///create element
  const lambdaTab = document.createElement("div");

  ///set style (classname)
  lambdaTab.classList.add("tab");

  ////set Content
  lambdaTab.textContent = techTopics;

  ///event listener

  lambdaTab.addEventListener("click", () => {
    ///eventListener works and shows clicked in console
    console.log("You clicked a tab"); ////with "You clicked a tab" fired each time clicked
  });

  return lambdaTab; ///returned created element
}
