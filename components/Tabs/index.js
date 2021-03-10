// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://gabitimes.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


// const myTopics = [
//     "javascript",
//     "bootstrap",
//     "technology",
//     "jquery",
//     "node.js"
// ]

function mytab(myTopics) {
    const maintab = document.createElement("div")
    const allUl = document.createElement("ul")

maintab.map(function (item) {
    let allmenuList = document.createElement("li");
    allmenuList.textContent = item;
    allUL.appendChild(allmenuList);

    mytab.classlist.add("tab");

    maintab.appendChild(myTopic);

    return mytab;

  });
}

let tab = document.querySelector(".tab");

axios
.get("https://gabitimes.herokuapp.com/topics")
.then((res) => {
    console.log(res.data);

    cards.appendChild(mycard(res.data));
  })

  .catch((error) => {
    console.log("Unexpected eroor", error);
  });

