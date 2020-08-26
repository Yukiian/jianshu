import { combineReducers } from 'redux-immutable'
import { reduce as headerReducer } from '../common/Header/store'

const reducer = combineReducers({
  header:headerReducer
})

export default reducer;