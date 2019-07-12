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
//                                                                   that is under the parent object 'articles' (i.e. JS, bootstrap, etc..right???)]
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


