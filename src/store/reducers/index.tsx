import { combineReducers } from 'redux'
import userReducers from './userReducers'
import tabsReducers from './tabsReducers'

export default combineReducers({
  userReducers,
  tabsReducers,
})
