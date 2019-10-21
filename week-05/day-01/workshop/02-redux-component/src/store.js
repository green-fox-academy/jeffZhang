import { createStore, combineReducers } from 'redux'
import { counterReducer } from './reducers/counterReducer'

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const rootReducer = combineReducers({ counter: counterReducer })

const store = createStore(rootReducer, enhancer)

export default store
