import { createStore, applyMiddleware, compose } from 'redux'
import counterReducer from './reducers/counterReducer'
import thunk from 'redux-thunk'

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
  counterReducer,
  compose(
    applyMiddleware(thunk),
    enhancer
  )
)

export default store
