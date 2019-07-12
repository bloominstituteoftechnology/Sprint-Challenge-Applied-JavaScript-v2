// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const topicsEle = document.querySelector('.topics')

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then(data => {
    console.log('yay',data)

    const topicData = data.data.topics
    topicData.forEach(topic => { 
        const topicTab = new Tab(topic)
        topicsEle.appendChild(topicTab)
        console.log(topic)
    })
})
.catch(erreor => {
    console.log('The API is currently down, try again later', error)
})

            //come from topic
function Tab(tabText){
    const tabComponent = document.createElement('div')

    tabComponent.classList.add('tab')

    tabComponent.textContent = tabText

    return tabComponent
    
}

