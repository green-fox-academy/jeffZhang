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

export const asyncIncrease = (number, timeDelayed) => {
  return dispatch =>
    setTimeout(() => {
      dispatch(increaseCounter(number))
    }, timeDelayed)
}
