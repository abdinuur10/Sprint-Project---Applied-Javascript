// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">February, 28, 2021</span>
//    <h1>Gabi Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

// Use this object for the component you created.
const newDate = new Date();
const headerContent = [
    {
        date: newDate.toDateString(),
        title: "Gabi Times",
        temp: "98°"
    }
];

funtion (date, title, content) {
    const myheader = document.createElement("div")
    const dateinfor = document.createElement("div")
    const mainTitle = document.createElement("h1")
    const temInfor = document.createElement("div")
}


mainTitle.textContent = newDate

myheader.classList.add("header");
dateinfor.classList.add("date");
temInfor.classList.add("temp");





