import { combineReducers } from 'redux'
import app from './containers/App/reducer'
import photos from './containers/Photos/reducer'
import albums from './containers/Albums/reducer'

export default function createReducer(injectedReducers = {}) {
  return combineReducers({ app, photos, albums, ...injectedReducers })
}
