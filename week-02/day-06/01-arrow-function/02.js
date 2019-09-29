function multiPurposeFunction(action) {
  if (action) {
    console.log(action('John', 'Smith'))
    console.log(action('', 'Bond'))
  }
}

function frameFunction() {
  const anonymOne = (...params) => {
    return params[0] ? params[0] + ' ' + params[1] : params[1]
  }
  multiPurposeFunction(anonymOne)

  const anonymTwo = (firstName, lastName) => {
    return firstName ? firstName + ' ' + lastName : lastName
  }
  multiPurposeFunction(anonymTwo)
}

frameFunction()
