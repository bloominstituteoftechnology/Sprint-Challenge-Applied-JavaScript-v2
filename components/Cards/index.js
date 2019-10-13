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

const cardsContainer = document.querySelector(".cards-container");

axios.get("https://lambda-times-backend.herokuapp.com/articles").then(res => {
  lambdaContent = res.data.articles;
  const test = "bootstrap";
  console.log("test me", lambdaContent[test]);
  const titles = Object.keys(lambdaContent);
  console.log("hello", titles);

  titles.forEach(title => {
    lambdaContent[title].forEach(article => {
      const newArticle = createArticle(article);
      cardsContainer.appendChild(newArticle);
    });
  });
});

function createArticle(info) {
  // Add Elements
  const card = document.createElement("div");
  const cardHead = document.createElement("div");
  const cardAuthor = document.createElement("div");
  const cardImgBox = document.createElement("div");
  const cardImg = document.createElement("img");
  const cardSign = document.createElement("span");

  // Add Classes
  card.classList.add("card");
  cardHead.classList.add("headline");
  cardAuthor.classList.add("author");
  cardImgBox.classList.add("img-container");

  // Add Content
  cardHead.textContent = info.headline;
  cardAuthor.textContent = info.authorPhoto;
  cardSign.textContent = info.authorName;

  // Append
  card.appendChild(cardHead);
  card.appendChild(cardAuthor);
  cardAuthor.appendChild(cardImgBox);
  cardAuthor.appendChild(cardSign);
  cardImgBox.appendChild(cardImg);

  return card;
}
