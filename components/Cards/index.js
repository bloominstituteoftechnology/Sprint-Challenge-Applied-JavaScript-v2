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
        .then(res =>  {
          console.log(res.data.articles)
          const cardHome = document.querySelector('.title')
          const javascript = cardCreator(res.data.articles.javascript)
          const bootstrap = cardCreator(res.data.articles.bootstrap)
          const node = cardCreator(res.data.articles.node)
          const tech = cardCreator(res.data.articles.technology)
          const jquery = cardCreator(res.data.articles.jquery)
          cardHome.append(javascript, bootstrap, node, tech, jquery)
        })
        .catch(err => console.log(err))


function cardCreator(article){
  const card = document.createElement('div');
  card.classList.add('card');

  article.forEach(item => {
    const header = document.createElement('h3')
    header.classList.add('headline')
    header.textContent = item.headline
    card.appendChild(header)
  })

  const author = document.createElement('div');
  author.classList.add('author');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');

  article.forEach(item => {
      const authorImage = document.createElement('img')
      authorImage.setAttribute('src', item.authorPhoto)
      imgContainer.appendChild(authorImage)
  });

  article.forEach(item => {
    const credit = document.createElement('span');
    credit.textContent = `By: ${item.authorName}`
      author.appendChild(credit);
  });


  card.appendChild(author);
  author.appendChild(imgContainer);


  return card
}
