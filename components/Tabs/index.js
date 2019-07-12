// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then(reply => {
    console.log("working:", reply);
    const topics = reply.data.topics;
    topics.forEach(topicData => {
      const topDiv = document.createElement("div");
      const topics = document.querySelector(".topics");
      topDiv.classList.add("tab");
      topDiv.textContent = topicData;
      topics.appendChild(topDiv);
    });
    console.log("yoooo", topics);
  })
  .catch(err => {
    console.log("help me help you:", err);
  });
