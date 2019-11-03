const counterReducer = (state = 0, action) => {
  let { type, amount } = action
  let newCounter = state

  newCounter = type === 'CHANGE_BY' ? newCounter + amount : amount

  return newCounter === undefined ? state : newCounter
}

export default counterReducer
