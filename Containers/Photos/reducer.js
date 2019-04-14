import { handleActions, combineActions } from 'redux-actions'
import { LOAD_PHOTOS } from './constants'

const initialState = {
  loading: false,
  model: null,
  error: false,
  hasLoadedOnce: false,
}

const photosReducer = handleActions(
  {
    [LOAD_PHOTOS.PENDING]: (state) => ({
      ...state,
      loading: true,
      error: false,
    }),
    [LOAD_PHOTOS.ERROR]: (state) => ({ ...state, error: true }),
    [combineActions(
      LOAD_PHOTOS.CANCELLED,
      LOAD_PHOTOS.SUCCESS,
      LOAD_PHOTOS.ERROR,
    )]: (state) => ({ ...state, loading: false }),
    [LOAD_PHOTOS.SUCCESS]: (state, { payload }) => ({
      ...state,
      error: false,
      hasLoadedOnce: true,
      model: payload || state.model,
    }),
  },
  initialState,
)

export default photosReducer
