// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
entry = document.querySelector(".tabs");
console.log(entry);

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(reply => {
    console.log("working:", reply);
    const lambda = reply.data;
    lambda.forEach(topicData => {
      const element = createTabs(topicData);
      entry.appendChild(element);
    });
  })
  .catch(err => {
    console.log("help me help you:", err);
  });

function createTabs(topicData) {
  console.log("mic check", topicData);
  const card = document.createElement(".div");
}
