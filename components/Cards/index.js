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

const cards = document.querySelector(".cards-container");
// cards.appendChild(createCards()) 

const promise = axios.get(
  "https://lambda-times-backend.herokuapp.com/articles"
);

promise
  .then(response => {
    console.log("GUUD", response.data);
   const articles = response.data.articles;
    articles.forEach(lambdaCards => {
        const cards = createCards(lambdaCards);
        cards.appendChild(card);
    })
  })

  .catch(error => {
    console.log("OHNOES", error);
  });

function createCards(lambdaCards) {
  ////create elements
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const imgs = document.createElement("img");
  const authorName = document.createElement("span");

  //set styles
  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  ///set content
  imgs.src = lambdaCards.authorPhoto;
  headline.textContent = lambdaCards.headline;
  author.textContent = lambdaCards.author;

  ///put together
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authorName)
  imgContainer.appendChild(imgs);
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
