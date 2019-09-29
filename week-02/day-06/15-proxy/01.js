const target = { a: 1, b: 1, c: 1 }

const handler = {
  get: function(target, field) {
    if (field === 'nextId') {
      if (target.hasOwnProperty('nextId')) {
        target['nextId']++
      } else {
        target['nextId'] = 1
      }
      return target['nextId']
    }
  }
}

const proxyObject = new Proxy(target, handler)
console.log(proxyObject.nextId)
console.log(proxyObject.nextId)
console.log(proxyObject.nextId)
