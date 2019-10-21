import { createStore, combineReducers } from 'redux'
import counterReducer from './reducers/counterReducer'
import tagsReducer from './reducers/tagsReducer'

const enhancer =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const rootReducer = combineReducers({
  counter: counterReducer,
  tags: tagsReducer
})

const store = createStore(rootReducer, enhancer)

export default store
