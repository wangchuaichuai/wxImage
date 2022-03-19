import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/index'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware = [thunk]
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
)
export default store
