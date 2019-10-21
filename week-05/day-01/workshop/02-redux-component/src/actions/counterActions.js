export const increaseCounter = (amount = 1) => {
  return { type: 'INCREASE', amount }
}

export const decreaseCounter = (amount = 1) => {
  return { type: 'DECREASE', amount }
}

export const resetCounter = () => {
  return { type: 'RESET' }
}

export const setCounter = amount => {
  return { type: 'SET', amount }
}
