import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below. X
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties. X
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!  X
  // The text inside elements will be set using their `textContent` property (NOT `innerText`). X
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console. X
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container"> 
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  //declaring elements
  const cardVar = document.createElement("div")
  const headlineVar = document.createElement("div")
  const authorVar = document.createElement("div")
  const imgContainerVar = document.createElement("div")
  const photoVar = document.createElement("img")
  const authorNameVar = document.createElement("span")

  //tree structuring
  cardVar.appendChild(headlineVar);
  cardVar.appendChild(authorVar);
  authorVar.appendChild(imgContainerVar);
  imgContainerVar.appendChild(photoVar);
  authorVar.appendChild(authorNameVar);

  //class names
  cardVar.classList.add("card");
  headlineVar.classList.add("headline");
  authorVar.classList.add("author");
  imgContainerVar.classList.add("img-container");

  //text content
  headlineVar.textContent = `${article.headline}`
  photoVar.src = `${article.authorPhoto}`
  authorNameVar.textContent = `${article.authorName}`

  cardVar.addEventListener("click", console.log(headlineVar))

return cardVar
}


const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  //
const cardContainer = document.querySelector(selector)

  axios
  .get("https://lambda-times-api.herokuapp.com/articles")
  .then((res) => {
    //dot notation to right api
    const cardArray = res.data.articles
    const cards = (Object.keys(cardArray))
    console.log(cards)
    cards.forEach((cardStuff) => {
      cardArray[cardStuff].forEach(card => {
        cardContainer.appendChild(Card(card))
      })

    })   
    })
  .catch((err) => {
    console.log(err)
  })

};




export { Card, cardAppender }
