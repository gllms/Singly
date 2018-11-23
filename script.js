var current = 0
var input

function start() {
  current = 0
  input = gi("text").value.split("\n")

  gi("singly").innerHTML = input[0]

  gi("input").style.display = "none"
  gi("sentence").style.display = "block"
  gi("controls").style.display = "block"
  fit()
}

M.updateTextFields()

document.body.addEventListener("keyup", function (event) {
  if (event.key == "ArrowLeft") {
    prev()
  }
  if (event.key == "ArrowRight") {
    next()
  }
  if (event.key == "Escape") {
    esc()
  }
})

document.getElementById("text").addEventListener("keyup", function (event) {
  if (event.key == "Enter" && event.ctrlKey) {
    start()
  }
})

function prev() {
  if (current > 0) {
    current--
    gi("singly").innerHTML = input[current]
    fit()
  }
}

function next() {
  if (current < input.length - 1) {
    current++
    gi("singly").innerHTML = input[current]
    fit()
  }
}

function esc() {
  current = 0
  gi("sentence").style.display = "none"
  gi("controls").style.display = "none"
  gi("input").style.display = "block"
}

function fit() {
  $("#singly").fitText(0.05 * $("#singly").text().length + 0.2)
}

function gi(id) {
  return document.getElementById(id)
}