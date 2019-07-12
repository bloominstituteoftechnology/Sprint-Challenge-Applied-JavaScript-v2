// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.

//data is an object with many objects contained within that are within an array (which they themselves have objects)

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Data example of JS:
//{"articles":{"javascript":[{"headline":"ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects","authorPhoto":"./assets/sir.jpg","authorName":"SIR 
//RUFF'N'STUFF"},{"headline":"Type Coercion: Why Does NaN !== NaN? and Other Strange Occurrences","authorPhoto":"./assets/bones.jpg","authorName":"BONES R. LIFE"},{"headline":"When to 
//Rest, When to Spread: Why There Are Two Meanings Behind '...'","authorPhoto":"./assets/puppers.jpg","authorName":"PUPPER S. DOGGO"},{"headline":"Typescript: Ten Things you Should 
//Know Before Building Your Next Angular Application","authorPhoto":"./assets/sir.jpg","authorName":"SIR RUFF'N'STUFF"}]}}
//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// You will be creating a component for each 'article' in the list. [i.e. nothing in the data is named "article" but it is assumed that
//                                                                   this article is each object (however many there are) for each array 
//                                                                   (i.e. JS, bootstrap, etc...)
//                                                                   that is under the parent object 'articles' (...right???)]

//is "article" the same as "card"? 

// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} /> || authorPhoto example: "authorPhoto":"./assets/sir.jpg" || what is meant by "url"??
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
//
// Create a card for each of the articles and add the card to the DOM. <----- might be a typo, isn't it "for each article" (i.e. JS, bootstrap, etc.)?? 


const cardContHtml = document.querySelector('.cards-container');

// axios.get('https://lambda-times-backend.herokuapp.com/articles')
// .then(data => {

//     //need to get access to article's array (there should be 5)
//     const article = data.data.articles;
//     console.log(article); // {javascript: Array(4), bootstrap: Array(3), technology: Array(3), jquery: Array(3), node: Array(2)}
//     //need to iterate array from each "article" using a for loop
//     for(topics in article) {
//         article[topics].forEach((item) => {
//             cardContHtml.appendChild(cardClassCreator(item));
//         })
//     }

// })

// .catch(err => {console.log('Cards did not work!')})






//function that creates DOM component [...]
cardClassCreator = (article) => {
    //create elements
    const div1Card = document.createElement('div');
    const div2Head = document.createElement('div');
    const div3Auth = document.createElement('div');
    const div4Img = document.createElement('div');
    const imgC = document.createElement('img');
    const spanC = document.createElement('span');


    //create Classes [...]
    div1Card.classList.add('card');
    div2Head.classList.add('headline');
    div3Auth.classList.add('author');
    div4Img.classList.add('img-container');


    //add textContent [...]
    //not sur I have the pieces yet
    div2Head.textContent = article.headline
    imgC.src = article.authorPhoto
    spanC.textContent = `By ${article.authorName}`


    //appending [...]
    div1Card.appendChild(div2Head);
    div1Card.appendChild(div3Auth);
    div3Auth.appendChild(div4Img);
    div4Img.appendChild(imgC); 
    div3Auth.appendChild(spanC);

    //return
    return div1Card;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(data => {

    //need to get access to article's array (there should be 5)
    const articles = data.data.articles;
    console.log(articles); // {javascript: Array(4), bootstrap: Array(3), technology: Array(3), jquery: Array(3), node: Array(2)}
    //need to iterate array from each "article" using a for loop
    for(topics in articles) {
        articles[topics].forEach((item) => {
            cardContHtml.appendChild(cardClassCreator(item));
        })
    }

})

.catch(err => {console.log('Cards did not work!')})

