// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics

//data: {"topics":["javascript","bootstrap","technology","jquery","node.js"]}


// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const topicsHtml = document.querySelector('.topics');
//want to add the tabCreator(arrayParam) to topicsHtml later [...]

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
.then(data => {
  const info = data.data; 
  console.log(`Here's the info`);
  console.log(info);


//  const cardInfo = createCards(info)
//  cardsHtml.appendChild(cardInfo)
})
.catch(err => {console.log('Did not work!')})



//tab component

const tabCreator = (arrayParam) => {
    tabC = document.createElement('div')

    tabC.classList.add('tab');


}


