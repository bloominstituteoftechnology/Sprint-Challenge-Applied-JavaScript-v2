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

cardContainer = document.querySelector(".cards-container");

///another way  to make it work that makes more sense

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(data => {
    //////node
    const node = data.data.articles.node;
    cardsContainer = document.querySelector(".cards-container");
    node.forEach(article => {
      const card = createCards(article);
      cardsContainer.appendChild(card);
    });

    // jquery
    const jquery = data.data.articles.jquery;
    cardsContainer = document.querySelector(".cards-container");
    jquery.forEach(article => {
      const card = createCards(article);
      cardsContainer.appendChild(card);
    });
    //technology
    const tech = data.data.articles.technology;
    cardsContainer = document.querySelector(".cards-container");
    tech.forEach(article => {
      const card = createCards(article);
      cardsContainer.appendChild(card);
    });

    ///bootstrap
    const bootstrap = data.data.articles.bootstrap;
    cardsContainer = document.querySelector(".cards-container");
    bootstrap.forEach(article => {
      const card = createCards(article);
      cardsContainer.appendChild(card);
    });

    ///javascript
    const javascript = data.data.articles.javascript;
    cardsContainer = document.querySelector(".cards-container");
    javascript.forEach(article => {
      const card = createCards(article);
      cardsContainer.appendChild(card);
    });
  })
  .catch(error => {
    console.log("OH NOES", error);
  });

function createCards(cards) {
  // create the elements
  const cardContainer = document.createElement("div");
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const imgs = document.createElement("img");
  const name = document.createElement("span");

  // set the styles
  cardContainer.classList.add("card-container");
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  // set the content
  headline.textContent = cards.headline;
  imgs.src = cards.authorPhoto;
  name.textContent = cards.authorName;

  ///put together
  cardContainer.appendChild(card);
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(name);
  imgContainer.appendChild(imgs);

  return cardContainer;
}

