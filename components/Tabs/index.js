// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


axios.get('https://lambda-times-backend.herokuapp.com/topics')

.then(function (response) {
    const topicsClass = document.querySelector('.topics');
    return response.data.topicsClass.map(topic => {
        return topicsClass
    });

  
})
.catch(function (error){
  console.log('something went wrong', error);
});


function Tabs() {

    // new elements

    const topic = document.createElement('div');



    // class names

    topic.classList.add('tab');


    // text content

    topic.textContent = 'topic here';

    return topic;




}


