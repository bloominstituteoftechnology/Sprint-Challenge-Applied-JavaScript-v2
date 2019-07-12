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

function Cards () {

    // new elements

    const card = document.createElement('div');
    const headline = document.createElement('div');
    const authorPic = document.createElement('div');
    const divImg = document.createElement('div');
    const img = document.createElement('img');
    const authorName = document.createElement('span');


    // structure 

    card.appendChild(headline);
    card.appendChild(authorPic);
    card.appendChild(divImg);
    divImg.appendChild(img);
    card.appendChild(authorName);


    // class names

    card.classList.add('card');
    card.classList.add('headline');
    card.classList.add('author');
    card.classList.add('img-container');


    // text content

    headline.textContent = '{Headline of article}';
    authorName.textContent = 'By {authors name}';



    return card;






}
