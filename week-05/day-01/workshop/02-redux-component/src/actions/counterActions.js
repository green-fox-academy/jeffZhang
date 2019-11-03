export const changeNumber = (amount = 1) => {
  return { type: 'CHANGE_BY', amount }
}

export const setNumber = (amount = 0) => {
  return { type: 'SET_TO', amount }
}
