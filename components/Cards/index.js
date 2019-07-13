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
          console.log(res.data)
          const cardHome = document.querySelector('.cards-container')
          const javascript = res.data.articles.javascript
          javascript.forEach(item => {
            const java = cardCreator(item)
            cardHome.append(java)
          })
          const bootstrap = res.data.articles.bootstrap
          bootstrap.forEach(item => {
            const boot = cardCreator(item)
            cardHome.append(boot)
          })
          const jquery = res.data.articles.jquery
          jquery.forEach(item => {
            const j = cardCreator(item)
            cardHome.append(j)
          })
          const technology = res.data.articles.technology
          technology.forEach(item => {
            const tech = cardCreator(item)
            cardHome.append(tech)
          })
          const node = res.data.articles.node
          node.forEach(item => {
            const nodeCard = cardCreator(item)
            cardHome.append(nodeCard)
          })
        })
        .catch(err => console.log(err))


function cardCreator(article){

  const card = document.createElement('div');
  card.classList.add('card');


    const header = document.createElement('h3')
    header.classList.add('headline')
    header.textContent = article.headline
    card.appendChild(header)

    const author = document.createElement('div');
    author.classList.add('author');
    card.appendChild(author);

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');
    author.appendChild(imgContainer);

    const authorImage = document.createElement('img')
    authorImage.setAttribute('src', article.authorPhoto)
    imgContainer.appendChild(authorImage)

    const credit = document.createElement('span');
    credit.textContent = `By: ${article.authorName}`
      author.appendChild(credit);

    return card

}
