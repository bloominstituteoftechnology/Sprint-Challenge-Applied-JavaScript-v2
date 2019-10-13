// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicBox = document.querySelector(".topics");

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(res => {
    const dataDrop = res.data.topics;

    dataDrop.forEach(item => {
      const newTab = tab(item);
      topicBox.appendChild(newTab);
    });
  })
  .catch(err => {
    console.log("oh noes...", err);
  });

function tab(info) {
  // Add Elements
  const tabTopic = document.createElement("div");

  // Add Classes
  tabTopic.classList.add("tab");

  // Add Content
  tabTopic.textContent = info;

  return tabTopic;
}
