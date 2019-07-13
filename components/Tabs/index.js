// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


insertTabs = document.querySelector(".topics");

axios
  .get(`https://lambda-times-backend.herokuapp.com/topics`)
  .then(data => {
    // console.log("index.js -> %cLambda Times data:", "color: #baba09", data);

    const tabData = data.data;

  //  console.log("index.js -> %ctabData:", "color: violet", tabData);

    let element = Object.values(tabData.topics);

    element.forEach(currentValue => {
      makeTabs(currentValue);
    });
  })

  .catch(error => {
    console.log(
      'index.js -> %c"Data not coming through - check:',
      "color: red",
      error
    );
  });

function makeTabs(data) {
  const tabs = document.createElement("div");

  insertTabs.appendChild(tabs);

  tabs.classList.add("tab");
  //console.log("index.js -> %cdata:", "color: green", data);
  tabs.textContent = data;
}
