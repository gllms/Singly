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
  var l = $("#singly").text().length
  var f = 0.05 * l + 0.2
  if (l > 120) {
    f *= 1/l*75
  }
  $("#singly").fitText(f)
}

function gi(id) {
  return document.getElementById(id)
}