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

const topics = [
  "javascript",
  "bootstrap",
  "jquery",
  "node",
  "technology"
]

topics.forEach(topic =>
  axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
        .then(res =>  {
          console.log(res.data.topic)
          const tabs = document.querySelector('.topics')
          const cards = cardCreator(res.data)
          tabs.appendChild(cards)
        })
)



function cardCreator(article){
  const card = document.createElement('div');
  card.classList.add('card');

  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = article.headline

  const author = document.createElement('div');
  author.classList.add('author');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');

  const image = document.createElement('img');
  image.setAttribute('src', article.authorPhoto);

  const credit = document.createElement('span');
  credit.textContent = `By: ${article.authorName}`

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(image);
  author.appendChild(credit);

  return card
}
