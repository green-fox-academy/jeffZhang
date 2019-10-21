import { createStore, combineReducers } from 'redux'

//------------------------initState------------------------------//
const initState = {
  counter: 0,
  tags: []
}

//----------------------------counter-action creators--------------------------//
const increaseCounter = (amount = 1) => {
  return { type: 'INCREASE', amount }
}

const decreaseCounter = (amount = 1) => {
  return { type: 'DECREASE', amount }
}

const resetCounter = () => {
  return { type: 'RESET' }
}

const setCounter = amount => {
  return { type: 'SET', amount }
}
//-------------------------counter reducer-----------------------------//
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

//-----------------------------tag reducer-------------------------//
const tagReducer = (state = [], action) => {
  let { type, tag } = action
  let newTags = state

  switch (type) {
    case 'ADD_TAG':
      newTags = newTags.find(element => element === tag)
        ? newTags
        : [...state, tag]
      return newTags
    case 'REMOVE_TAG':
      newTags = state.filter(element => element !== tag)
      return newTags
    case 'REMOVE_TAGS':
      return []
    default:
      return state
  }
}

//---------------------------store---------------------------//
const combinedReducer = combineReducers({
  tags: tagReducer,
  counter: counterReducer
})
const store = createStore(combinedReducer)
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

//--------------------------dispatch actions----------------------------//
store.dispatch(setCounter(6))
store.dispatch(increaseCounter())
store.dispatch(increaseCounter(2))
store.dispatch(resetCounter())
store.dispatch(increaseCounter())
store.dispatch(decreaseCounter(4))

store.dispatch({ type: 'ADD_TAG', tag: 'blue' })
store.dispatch({ type: 'ADD_TAG', tag: 'bold' })
store.dispatch({ type: 'ADD_TAG', tag: 'hipster' })
store.dispatch({ type: 'REMOVE_TAG', tag: 'blue' })
store.dispatch({ type: 'ADD_TAG', tag: 'bold' })
store.dispatch({ type: 'REMOVE_TAGS' })

unsubscribe()
