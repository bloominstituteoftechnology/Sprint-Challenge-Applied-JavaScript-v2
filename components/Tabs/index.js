// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// https://lambda-times-backend.herokuapp.com/topics


// promise
const promise = axios.get('https:lambda-times-backend.herokuapp.com/topics')

//DOT then to console.log the promise, to make sure I am getting the data
promise.then(data => {
    console.log('response', data.data.topics)
    const topics = data.data.topics;
    topics.forEach(topic => {
        const element = Tabs(topic);
        tabTopics.appendChild(element);
    })
});

//DOT catch in case there is an error
promise.catch(error => {
    console.log('YOU BROKE MY HEART', error)
});

function Tabs(get) {
    const tabDOM = document.createElement('div');
    tabDOM.classList.add('tab');
    tabDOM.textContent = get;

    return tabDOM;
}


const tabTopics = document.querySelector('.tabs');


// manual test
// tabTopics.appendChild(Tabs('abcdefg'));

