'use strict'

// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

class PostIt {
  constructor(backgroundColor, text, textColor) {
    this.backgroundColor = backgroundColor
    this.text = text
    this.textColor = textColor
  }
}

let post1 = new PostIt('orange', 'Idea 1', 'blue')
let post2 = new PostIt('pink', 'Awesome', 'black')
let post3 = new PostIt('yellow', 'Superb!', 'green')
console.log(post1)
