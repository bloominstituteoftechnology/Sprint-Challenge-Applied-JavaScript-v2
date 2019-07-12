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







// cardContainer = document.querySelector(".cards-container");//// container for cards to bring card into one big family
////^^ not necessary because it is down below as well

axios
  .get("https://lambda-times-backend.herokuapp.com/articles") /////accessing my API for articles. only needed once with this method.
  .then(data => {
    ///.then = success and what happens if successful
    //////node
    // console.log('YOU DID IT', data);
    const node = data.data.articles.node; ////access node articles individually  with variable name node
    cardsContainer = document.querySelector(".cards-container"); ////making my cardContainer  and only need one instance of it
    node.forEach(article => {
      ///accesses the array for node
      const cards = createCards(article); ///utilizes my previous function below for createCards  for variable name cards
      cardsContainer.appendChild(cards); // appends cards made above to the cardContainer
    });
    ///// same steps until line 65
    // jquery
    const jquery = data.data.articles.jquery;
    // cardsContainer = document.querySelector(".cards-container"); not necessary
    jquery.forEach(article => {
      const cards = createCards(article);
      cardsContainer.appendChild(cards);
    });
    //technology
    const tech = data.data.articles.technology;
    // cardsContainer = document.querySelector(".cards-container"); not necessary
    tech.forEach(article => {
      const cards = createCards(article);
      cardsContainer.appendChild(cards);
    });

    ///bootstrap
    const bootstrap = data.data.articles.bootstrap;
    // cardsContainer = document.querySelector(".cards-container"); not necessary
    bootstrap.forEach(article => {
      const cards = createCards(article);
      cardsContainer.appendChild(cards);
    });

    ///javascript
    const javascript = data.data.articles.javascript;
    // cardsContainer = document.querySelector(".cards-container");   not necessary
    javascript.forEach(article => {
      const cards = createCards(article);
      cardsContainer.appendChild(cards);
    });
  })
  .catch(error => {
    ////failure possibility and there was some
    console.log("OH NOES", error); ////oh noes will print if there is something null or undefined
  });

function createCards(articleCard) {
  ///function with function name of createCards that holds parameter articleCard to use later on
  // create the elements
  const cardContainer = document.createElement("div");
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const imgs = document.createElement("img");
  const name = document.createElement("span");

  // set the styles/// provided class names
  cardContainer.classList.add("card-container");
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  // set the content
  headline.textContent = articleCard.headline; ////utilize parameter name articleCard to bring out headline name of article from within the data provided in console
  imgs.src = articleCard.authorPhoto; /// utilize parameter name articleCard to bring out the authorPhoto from within the data provided in console
  name.textContent = articleCard.authorName; //utilize parameter name articleCard to bring out the authorName from within the data provided in console

  ///put together
  cardContainer.appendChild(card);
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(name);
  imgContainer.appendChild(imgs);

  return cardContainer; ///return first created element of function
}
