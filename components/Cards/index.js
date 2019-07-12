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

//JS
const cardsContainer = document.querySelector('.cards-container');
console.log(cardsContainer);

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then (data => {
    // console.log('data', data);
    const JSArray = data.data.articles.javascript;
    // console.log('JS Articles', JSArray);
    const cardsContainer = document.querySelector('.cards-container');
    JSArray.forEach((article) => {
      const newJSArticle = jsArticleCreator(article);
      cardsContainer.appendChild(newJSArticle);
    });
  });

function jsArticleCreator (article) {
  const card = document.createElement('div');
  card.classList.add('card');

  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = article.headline;

  const author = document.createElement('div');
  author.classList.add('author');

  const img = document.createElement('img');
  img.classList.add('img-container');
  img.src = article.authorPhoto;

  const by = document.createElement('span');
  by.textContent = article.authorName;

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(img);
  author.appendChild(by);

  return card;
}
