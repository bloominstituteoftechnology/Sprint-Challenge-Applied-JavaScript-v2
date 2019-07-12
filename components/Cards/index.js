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

const cardContainer = document.querySelector('.cards-container') 

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
.then(data => {
    const bootstrap = data.data.articles.bootstrap
    bootstrap.forEach(item => {
        const card = createArticle(item)
        cardContainer.appendChild(card)
    })
    const javascript = data.data.articles.javascript
    javascript.forEach(item => {
        const card = createArticle(item)
        cardContainer.appendChild(card)
    })
    const jquery = data.data.articles.jquery
    jquery.forEach(item => {
        const card = createArticle(item)
        cardContainer.appendChild(card)
    })
    const nodejs = data.data.articles.node
    nodejs.forEach(item => {
        const card = createArticle(item)
        cardContainer.appendChild(card)
    })

    
    console.log('5555', bootstrap)
    console.log('it is working', data)
})
.catch(error => {
    console.log('The Article API is currently down, try again later', error)
})



function createArticle(item) {
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const img = document.createElement('img')
    const authorsName = document.createElement('span')


    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    headline.textContent = item.headline
    img.src = item.authorPhoto
    authorsName.textContent = `'By: ' ${item.authorName}`

    card.appendChild(headline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(img)
    author.appendChild(authorsName)

    return card

}

