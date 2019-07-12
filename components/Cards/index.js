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

//////node
axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(data => {
    console.log("OH HAI", data.data.articles);
    const articlesArray = data.data.articles.node ;
    cardsContainer = document.querySelector(".cards-container");
    articlesArray.forEach((article) => {
        const newArticle = createCards(article);
        cardsContainer.appendChild(newArticle);
    });
  })


////jquery
axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(data => {
    console.log("OH HAI", data.data.articles);
    const articlesArray = data.data.articles.jquery ;
    cardsContainer = document.querySelector(".cards-container");
    articlesArray.forEach((article) => {
        const newArticle = createCards(article);
        cardsContainer.appendChild(newArticle);
    });
  })


////technology
axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(data => {
    console.log("OH HAI", data.data.articles);
    const articlesArray = data.data.articles.technology ;
    cardsContainer = document.querySelector(".cards-container");
    articlesArray.forEach((article) => {
        const newArticle = createCards(article);
        cardsContainer.appendChild(newArticle);
    });
  })


///bootstrap
axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(data => {
    console.log("OH HAI", data.data.articles);
    const articlesArray = data.data.articles.javascript ;
    cardsContainer = document.querySelector(".cards-container");
    articlesArray.forEach((article) => {
        const newArticle = createCards(article);
        cardsContainer.appendChild(newArticle);
    });
  })

///javascript
axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(data => {
    console.log("OH HAI", data.data.articles);
    const articlesArray = data.data.articles.javascript ;
    cardsContainer = document.querySelector(".cards-container");
    articlesArray.forEach((article) => {
        const newArticle = createCards(article);
        cardsContainer.appendChild(newArticle);
    });
  })

  ////this worked but I want to understand more
    // const articleCards = data.data.articles;
    // for (const something in articleCards) {
    //   const articles = articleCards[something];
    //   articles.forEach(articleType => {
    //     const card = createCards(articleType);
    //     cardContainer.append(card);
  
  .catch(error => {
    console.log("OH NOES", error);
  });

function createCards(articleCards) {
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
  headline.textContent = articleCards.headline;
  imgs.src = articleCards.authorPhoto;
  name.textContent = articleCards.authorName;

  ///put together
  cardContainer.appendChild(card);
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(name);
  imgContainer.appendChild(imgs);

  return cardContainer;
}

// <div class="card">
// //   <div class="headline">{Headline of article}</div>
// //   <div class="author">
// //     <div class="img-container">
// //       <img src={url of authors image} />
// //     </div>
// //     <span>By {authors name}</span>
// //   </div>
// // </div>
