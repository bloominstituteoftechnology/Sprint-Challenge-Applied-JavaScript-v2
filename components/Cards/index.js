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

//https://lambda-times-backend.herokuapp.com/articles

const promiseCards = axios.get('https://lambda-times-backend.herokuapp.com/articles');

promiseCards.then(data => {
    console.log('articles for the cards', data.data.articles.technology);
    const bootstrap = data.data.articles.bootstrap;
    const javascript = data.data.articles.javascript;
    const jquery = data.data.articles.jquery;
    const node = data.data.articles.node;
    const technology = data.data.articles.technology;
    
    bootstrap.forEach(article => {
        const element = Cards(article.headline, 
            article.authorPhoto, article.authorName);
            cards.appendChild(element);
    })

    javascript.forEach(article => {
        const element = Cards(article.headline, 
            article.authorPhoto, article.authorName);
            cards.appendChild(element);
    })

    jquery.forEach(article => {
        const element = Cards(article.headline, 
            article.authorPhoto, article.authorName);
            cards.appendChild(element);
    })

    node.forEach(article => {
        const element = Cards(article.headline, 
            article.authorPhoto, article.authorName);
            cards.appendChild(element);
    })

    technology.forEach(article => {
        const element = Cards(article.headline, 
            article.authorPhoto, article.authorName);
            cards.appendChild(element);
    })
    
});

promiseCards.catch(data => {
    console.log('YOU BROKE MY HEART', data);
});

const cards = document.querySelector('.cards-container');

function Cards(headline, imgSrc, author){

    //elements
    const cardDOM = document.createElement('div');
    const headlineDOM = document.createElement('div');
    const authorDOM = document.createElement('div');
    const imgContainDOM = document.createElement('div');
    const imgDOM = document.createElement('img');
    const authorSpanDOM = document.createElement('span');

    //content
    headlineDOM.textContent = headline;
    imgDOM.src = imgSrc;
    authorDOM.textContent = author; 


    //structure
    cardDOM.appendChild(headlineDOM);
    cardDOM.appendChild(authorDOM);

    authorDOM.appendChild(imgContainDOM);

    imgContainDOM.appendChild(imgDOM);

    authorDOM.appendChild(authorSpanDOM);

    //styling
    cardDOM.classList.add('card');
    headlineDOM.classList.add('headline');
    authorDOM.classList.add('author');
    imgContainDOM.classList.add('img-container');

    

    return cardDOM;
}

//cards.appendChild(Cards(headline, imgSrc, author));