import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import counterReducer from './reducers/counterReducer'
import usersReducer from './reducers/usersReducer'
import chatReducer from './reducers/chatReducer'

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const rootReducer = combineReducers({
  counter: counterReducer,
  usersData: usersReducer,
  chatData: chatReducer
})

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    enhancer
  )
)

export default store
