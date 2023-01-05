function moveDodgerRight() {
    dodger = document.getElementById('dodger')
    var left = dodger.style.left
    left = parseInt(left)
    dodger.style.left = (left + 10) + "px"
  }
  function moveDodgerLeft() {
    dodger = document.getElementById('dodger')
    var left = dodger.style.left
    left = parseInt(left)
    dodger.style.left = (left - 10) + "px"
  }