// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


    // const tabs = document.querySelector('.topics')
    
    // response.tabs.forEach(item => {
    //     const tab = document.createElement('div');
    //     tab.classList.add('tab')
    //     tab.textContent = topic;

    

    function axiosFun (topic) {
        const nTab = document.createElement('div');
        nTab.classList.add('tab')
        nTab.textContent = topic;
       
        return nTab

    }

    

    topics = document.querySelector('.topics');

    axios
    .get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        response.data.topics.forEach(topic => {
            const tab = axiosFun(topic);
            topics.appendChild(tab);
        })
        .catch(error => {
            console.log("There was an error")
        })
    })
  