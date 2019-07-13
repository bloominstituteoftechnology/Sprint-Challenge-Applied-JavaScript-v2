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

insertCards = document.querySelector(".cards-container");

axios
  .get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then(data => {
    const articleData = Object.entries(data.data.articles);
    const categories = Object.keys(data.data.articles);

    console.log("index.js -> %carticleData:", "color: blue", articleData);
    console.log("index.js -> %ccategories:", "color: green", categories);

    categories.forEach(cat => {
      articleData.forEach(article => {
        if (articleData[0][0] == cat) {
          makeCards(article);
        }
      });
    });
  })

  .catch(error => {
    console.log("index.js -> %c\"There's a data issue:", "color: red", error);
  });

function makeCards(data) {
  const cards = document.createElement("div");
  const headLn = document.createElement("div");
  const author = document.createElement("div");
  const imgCont = document.createElement("div");
  const authImg = document.createElement("img");
  const byLine = document.createElement("span");
  
  insertCards.appendChild(cards);
  cards.appendChild(headLn);
  cards.appendChild(author);
  author.appendChild(imgCont);
  imgCont.appendChild(authImg);
  author.appendChild(byLine);

  cards.classList.add("card");
  headLn.classList.add("headline");
  author.classList.add("author");
  imgCont.classList.add("img-container");
  authImg.classList.add("img")
    
    data[1].forEach(item => populate(item))


  function populate(data) {
  //console.log('index.js -> %cdata:', 'color: indigo', data)

    headLn.textContent = data.headline;
    authImg.src = data.authorPhoto;
    //author.textContent = data.authorName;
    byLine.textContent = `By: ${data.authorName}`;
  }
}
