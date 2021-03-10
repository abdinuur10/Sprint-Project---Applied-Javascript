// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://gabitimes.herokuapp.com/articles
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

function mycard(cardContent) {
    const newCard = document.createElement("div")
    const headline = document.createElement("div")
    const myauthor = document.createElement("div")
    const imgContainer = document.createElement("div")
    const NewImg = document.createElement("img")
    const authName = document.createElement("span")


    newCard.classList.add("card");
    headline.classList.add("headline");
    myauthor.classList.add("author");
    imgContainer.classList.add("img-container");

    newCard.appendChild(headline);
    newCard.appendChild(myauthor);
    myauthor.appendChild(imgContainer);
    myauthor.appendChild(authName);
    imgContainer.appendChild(NewImg);

    headline.textContent = cardContent.headline
    myauthor.textContent = cardContent.authorName
    NewImg.src = cardContent.authorPhoto

    return newCard;
}

let cards = document.querySelector(".cards-container")

axios
.get("https://gabitimes.herokuapp.com/articles").then((res) => {
    console.log(res.data);
    let articleData = res.data.articles
    for (const property in articleData) {
        console.log(articleData)
    articleData[property].forEach( function (item) {
        cards.appendChild(mycard(item))
    })
    }
})

.catch((error) => {
    console.log("incorrent massage, please try again", error)
});













