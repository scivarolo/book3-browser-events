let cardID = 1

// Create a document fragment that holds the card
function buildCard(content) {
  let cardFrag = document.createDocumentFragment()
  let card = document.createElement("section")
  card.classList.add("card")
  card.setAttribute("id", `card-${cardID}`)

  let cardContentDiv = document.createElement("div")
  cardContentDiv.classList.add("card__content");
  cardContentDiv.textContent = content;

  let deleteEl = document.createElement("div")
  deleteEl.classList.add("button-wrapper")
  let deleteButton = document.createElement("button")
  deleteButton.classList.add("card__delete")
  deleteButton.setAttribute("id", `delete-${cardID}`)
  deleteButton.textContent = "Delete"
  deleteEl.appendChild(deleteButton)

  card.appendChild(cardContentDiv)
  card.appendChild(deleteEl)

  cardFrag.appendChild(card)
  cardID++

  return cardFrag
}

//buildCard("Testing")
//buildCard("Number Two")


//Store the Location of card output

const cardWrapper = document.querySelector(".cards-wrapper")

// Add the card to the DOM
function renderCard(cardFragment) {
  cardWrapper.appendChild(cardFragment)
}

// Remove the card from the DOM

function removeCard(cardId) {
  let element = document.getElementById(cardId)
  element.parentNode.removeChild(element)
}
