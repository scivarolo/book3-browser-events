// Enable flight power
let flight = document.querySelector("#flight");

function flightHandlerFunction() {
  flight.classList.remove('disabled')
  flight.classList.add('enabled')
}

document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction)

// Enable mind reading power
let mindReading = document.querySelector("#mindreading")

function mindReadingFunction() {
  mindReading.classList.remove('disabled')
  mindReading.classList.add('enabled')
}

document.querySelector("#activate-mindreading").addEventListener("click", mindReadingFunction)


// Enable xray power
let xray = document.querySelector("#xray")

function xrayFunction() {
  xray.classList.remove('disabled');
  xray.classList.add('enabled');
}

document.querySelector("#activate-xray").addEventListener("click", xrayFunction)

// Enable all powers



function enablePowers() {
  let powers = document.querySelectorAll('#powerList section')
  powers.forEach(power => {
    power.classList.remove('disabled')
    power.classList.add('enabled')
  })
}

document.querySelector("#activate-all").addEventListener("click", enablePowers)

// Disable all powers

function disablePowers() {
  let powers = document.querySelectorAll('#powerList section')
  powers.forEach(power => {
    power.classList.remove('enabled')
    power.classList.add('disabled')
  })
}

document.querySelector("#deactivate-all").addEventListener("click", disablePowers)