var counted = window.localStorage.getItem('count')

if (counted === null || counted === undefined) {
  window.localStorage.setItem('count', 1)
} else {
  counted = window.localStorage.getItem('count')
  var tempCounter = parseInt(counted)

  var newCounter = tempCounter + 1

  window.localStorage.setItem('count', newCounter)
}

counted = window.localStorage.getItem('count')
var text = '<h1>counter: ' + counted + '</h1>'
document.getElementById('displayCount').innerHTML = text

document.body.setAttribute('class', 'day-theme')
window.localStorage.setItem('theme', 'day')
var lightState = window.localStorage.getItem('theme')

var switcher = function () {
  if (lightState === 'day') {
    document.body.setAttribute('class', 'night-theme')
    window.localStorage.setItem('theme', 'night')
    lightState = window.localStorage.getItem('theme')
  } else {
    document.body.setAttribute('class', 'day-theme')
    window.localStorage.setItem('theme', 'day')
    lightState = window.localStorage.getItem('theme')
  }
}

var buttonPress = document.getElementById('moveTime')
buttonPress.addEventListener('click', switcher)
