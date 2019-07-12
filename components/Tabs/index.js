// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const tabs = document.querySelector('.tabs');

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
  .then(data => {
    console.log('response', data);

    // hold received data
    const tabData = data.data.topics;
    const tabs = document.querySelector('tabs');


    tabs.forEach(tabData => {
      axios.get(`https://api.github.com/users/${gitID}`)
        .then( data => {
          const tabData = data.data.topics;
          const tabs = document.querySelector('.tabs');
          tabs.appendChild(createTab(tabData));
        })
    });
  })
  .catch(error => {
    console.log('Error when retrieving data', error)
  });

function createTabs(object) {

  // Define elements
  const tab = document.createElement('div');
  const topics = document.createElement('div');
  const title = document.createElement('span');

  // Setup structure
  tab.appendChild(topics);
  tab.appendChild(title);

  // Set class names
  tab.classList.add('tab');
  topics.classList.add('topics');
  title.classList.add('title');

  // Set content
  title.textContent = object.topics;

    return tab;
}