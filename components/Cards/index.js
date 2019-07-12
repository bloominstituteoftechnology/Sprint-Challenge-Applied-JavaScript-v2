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

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(data => {
        const javaArticles = data.data.articles.javascript
        const bootStrapArticles = data.data.articles.bootstrap;
        const techArticles = data.data.articles.technology;
        const jqueryArticles = data.data.articles.jquery;
        const nodeArticles = data.data.articles.node

        const articles = [jsArticles, bootStrapArticles, techArticles, jqueryArticles, nodeArticles]

        articles.forEach(article => {
            article.forEach(art => {
                const cards = document.querySelector('.cards-container');
                cards.appendChild(Article(art));
            })
        })
        console.log('Success', data);
    })
    .catch(error => {
        console.log("ERROR", error);
    })

function Article(obj) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const authorName = document.createElement('span');

    return card;

}