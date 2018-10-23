const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
document.addEventListener("scroll", function (event) {
  let scroll = window.scrollY

  /*
    Adjust the width of audrey to be 1/3 the value of
    `window.scrollY`. No lower than 50px, though.
  */

  let width = scroll / 3
  if (width < 50) {
    width = 50
  }

  audrey.style.width = width + 'px'

  /*
    Adjust the height of audrey to be 1/4 the value of
    `window.scrollY`. No lower than 100px, though.
  */

  let height = scroll / 4
  if (height < 100) {
    height = 100
  }

  audrey.style.height = height + 'px'

})