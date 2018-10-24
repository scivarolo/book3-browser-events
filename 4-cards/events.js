/*
  Purpose: Event Listeners
*/

// Event listener fore "Create" button

let textbox = document.querySelector("input#create")
let createButton = document.querySelector("input#create ~ button")

createButton.addEventListener("click", () => {
  renderCard(buildCard(textbox.value))

  // Clear Input
  textbox.value = ""
})


//Event listener for "Delete" button

let cardsWrapper = document.querySelector(".cards-wrapper")

cardsWrapper.addEventListener("click", (event) => {
  console.log(event)
  if(event.target.className = "card__delete") {
    let cardId = event.target.getAttribute("id").split("-")[1]
    cardId = `card-${cardId}`
    console.log(cardId)
    removeCard(cardId)
  }
})