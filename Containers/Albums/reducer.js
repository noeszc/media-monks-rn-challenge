import { handleActions } from 'redux-actions'
import { LOAD_ALBUMS } from './constants'

const initialState = {
  loading: false,
  model: null,
  error: false,
}

const albumsReducer = handleActions(
  {
    [LOAD_ALBUMS.ACTION]: (state) => state,
  },
  initialState,
)

export default albumsReducer
