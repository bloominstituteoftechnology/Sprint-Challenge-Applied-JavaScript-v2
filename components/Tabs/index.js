// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics');

axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then (data => {
    console.log('data', data.data.topics);
    const topicsArray = data.data.topics;
    console.log(topicsArray);
    const topics = document.querySelector('.topics');
    topicsArray.forEach((topic) => {
      const newTopic = topicCreator(topic);
      topics.appendChild(newTopic);
    });
  });

function topicCreator (topic) {
  const topicTab = document.createElement('div');
  topicTab.classList.add('tab');
  topicTab.textContent = topic;

  return topicTab;
}
