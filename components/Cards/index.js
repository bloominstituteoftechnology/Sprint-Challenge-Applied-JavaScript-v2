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

const cardsContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(x => {
    articlesByTopic = x.data.articles;
    topicsCom(articlesByTopic);
  })

  .catch(error => {
    console.log('There is an error in your Cards/index.js file', error)
  })


function topicsCom(objectArticlesByTopic) {

  Object.keys(objectArticlesByTopic).forEach(topic => {
    let articles = objectArticlesByTopic[topic];
    articles.forEach(article => cardsContainer.append(cardComponent(article, topic)));
  })
}

function cardComponent(articleObj, topic) {
  const card = document.createElement('div'),
    headline = document.createElement('div'),
    author = document.createElement('div'),
    imgContainer = document.createElement('div'),
    imgSrc = document.createElement('img'),
    authorName = document.createElement('span');


  headline.textContent = articleObj.headline;
  imgSrc.src = articleObj.authorPhoto;
  authorName.textContent = articleObj.authorName;

  card.append(author);
  card.append(headline);
  author.append(authorName);
  author.append(imgContainer);
  imgContainer.append(imgSrc);

  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  return card;
}