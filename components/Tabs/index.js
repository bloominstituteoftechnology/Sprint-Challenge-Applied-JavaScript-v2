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

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
  .then(data => {

    // Test response
    console.log('response', data);

    // hold received data
    const tabTopic = data.data.topics;

    tabTopic.forEach(element => {
      let newTab = createTabs(element);
      topics.appendChild(newTab);
    })

      .catch(error => {
        console.log('Error when retrieving data', error)
      });

    function createTabs(object) {

      // Define elements
      const tab = document.createElement('div');

      // Setup structure  ->  unnecessary

      // Set class names
      tab.classList.add('tab');


      // Set content
      tab.textContent = object;

      return tab;
    }

  });


