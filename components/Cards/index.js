// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// Select main node
const cardsContainer = document.querySelector('.cards-container');

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then(data => {
    // test response
    console.log('response', data);

    // hold received data
  const articleData = data.data.articles; // data is stored in an object

    //create an array to hold object data
    const articleArray = Object.values(articleData);
      //nest forEach to assign object values from data
    articleArray.forEach(articleData => {
        // create new article
        articleData.forEach(element => {
          let newArticle = createCard(element);
          cardsContainer.appendChild(newArticle);
        })
    })
})

  .catch(error => {
    // test response
    console.log('Error retrieving card data', error)
  });

function createCard(object) {

  // Define elements
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const authorContent = document.createElement('div');
  const imgContainer = document.createElement('div');
  const cardImg = document.createElement('img');
  const credit = document.createElement('span');

  // Setup structure
  card.appendChild(headline);
  card.appendChild(authorContent);
  authorContent.appendChild(imgContainer);
  imgContainer.appendChild(cardImg);
  imgContainer.appendChild(credit);

  // Set class names
  card.classList.add('card');
  authorContent.classList.add('author');
  headline.classList.add('headline');
  imgContainer.classList.add('img-container');

  // Set content
  headline.textContent = object.headline;
  cardImg.src = object.authorPhoto;
  credit.textContent = object.authorName;

  return card;
}
