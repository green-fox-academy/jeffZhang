;(function() {
  function SetLike() {
    this.data = []
  }
  SetLike.prototype.add = function(value) {
    if (!this.data.includes(value)) {
      //update according to exercise 13
      this.data.push(value)
    }
  }

  SetLike.prototype.values = function() {
    return this.data
  }

  let setLike = new SetLike()
  setLike.add(1)
  setLike.add(1)
  setLike.add(9)
  console.log(setLike.values())
})()
