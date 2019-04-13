import { handleActions } from 'redux-actions'
import { LOAD_PHOTOS } from './constants'

const initialState = {
  loading: false,
  model: null,
  error: false,
}

const photosReducer = handleActions(
  {
    [LOAD_PHOTOS.ACTION]: (state) => state,
  },
  initialState,
)

export default photosReducer
