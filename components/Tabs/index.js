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
.then (data => {
  //console.log('data:', data);
  const tabs = data.data;
  
}
  
  
  
  
  /*const myInfo = data.data;
  console.log('UserInfo', myInfo);
  const cards = document.querySelector('.cards');
  const cardInfo = cardCreator(myInfo);
  console.log(cardInfo);
  cards.appendChild(cardInfo);
})/*

 <div class="tabs">
    <div class="topics">
      <span class="title">TRENDING TOPICS:</span>
    </div>
  </div>
