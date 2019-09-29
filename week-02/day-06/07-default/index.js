const makeCoffee = (withSuger = false, withMilk = false) => {
  let suger = withSuger ? 'with suger' : ''
  let milk = withMilk ? 'with milk' : ''

  return `coffee ${suger} ${milk}`
}

console.log(makeCoffee(true, true))
