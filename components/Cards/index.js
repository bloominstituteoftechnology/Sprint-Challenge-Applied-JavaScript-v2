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


const cardContainer = document.querySelector('.cards-container');


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(function (response) {
    const articles = response.data.articles;
    const topics = Object.keys(articles);


    // map
    topics.map(topic => {
        articles[`${topic}`].map(article => {
            cardContainer.append(Cards(article));
        });
    });
      
})


.catch(function (error){
  console.log('something went wrong', error);
});





function Cards (data) {

    // new elements

    const card = document.createElement('div');
    const headline = document.createElement('div');
    const authorContainer = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const author = document.createElement('span');


    // structure 

    card.append(headline);
    card.append(authorContainer);
    authorContainer.append(imgContainer);
    authorContainer.append(author);
    imgContainer.append(img);


    // class names

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');


    // text content

    headline.textContent = data.headline;
    author.textContent = data.authorName;
    img.src = data.authorPhoto;


    

    


    return card;






}
