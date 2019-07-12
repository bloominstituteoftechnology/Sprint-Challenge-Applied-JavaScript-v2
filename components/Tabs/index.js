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
const promiseTabs = axios.get('https:lambda-times-backend.herokuapp.com/topics')

//DOT then to console.log the promise, to make sure I am getting the data
promiseTabs.then(data => {
    console.log('array of topics', data.data.topics)
    const topics = data.data.topics;
    topics.forEach(topic => {
        const element = Tabs(topic);
        tabTopics.appendChild(element);
    })
});

//DOT catch in case there is an error
promiseTabs.catch(error => {
    console.log('YOU BROKE MY HEART', error)
});

function Tabs(get) {
    const tabDOM = document.createElement('div');
    tabDOM.classList.add('topics', 'tab');
    tabDOM.textContent = get;

    
    tabDOM.addEventListener('click', () => {
        const tempNodeList = document.querySelectorAll('.tab')
        tempNodeList.forEach(tab => tab.classList.remove('active-tab'));
            

        tabDOM.classList.add('active-tab');
    });

    return tabDOM;
}


const tabTopics = document.querySelector('.topics');


// manual test
// tabTopics.appendChild(Tabs('abcdefg'));

