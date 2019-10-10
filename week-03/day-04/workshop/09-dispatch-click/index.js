let d = document

function simulateClick() {
  var evt = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  })
  var div = document.querySelector('div')
  div.dispatchEvent(evt)
}

d.querySelector('button').addEventListener('click', simulateClick)
