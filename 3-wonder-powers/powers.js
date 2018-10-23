// Single power enabler

function enablePower(event) {
  let selector = event.target.id.split("-")[1]
  let element = document.querySelector(`#${selector}`)
  element.classList.remove("disabled")
  element.classList.add("enabled")
}

// Enable flight power
document.querySelector("#activate-flight").addEventListener("click", enablePower)

// Enable mind reading power
document.querySelector("#activate-mindreading").addEventListener("click", enablePower)

// Enable xray power
document.querySelector("#activate-xray").addEventListener("click", enablePower)

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