import { combineReducers } from 'redux'
import photos from './Containers/Photos/reducer'
import albums from './Containers/Albums/reducer'

export default function createReducer(injectedReducers = {}) {
  return combineReducers({ photos, albums, ...injectedReducers })
}
