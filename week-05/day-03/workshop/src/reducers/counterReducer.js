const counterReducer = (state = 0, action) => {
  let { type, amount } = action
  let newCounter = state

  switch (type) {
    case 'INCREASE':
      newCounter += amount
      return newCounter
    case 'DECREASE':
      newCounter -= amount
      return newCounter
    case 'RESET':
      return 0
    case 'SET':
      return amount
    default:
      return state
  }
}

export default counterReducer
