import { handleActions, combineActions } from 'redux-actions'
import { LOAD_ALBUMS } from './constants'

const initialState = {
  loading: false,
  model: null,
  error: false,
  hasLoadedOnce: false,
}

const albumsReducer = handleActions(
  {
    [LOAD_ALBUMS.PENDING]: (state) => ({
      ...state,
      loading: true,
      error: false,
    }),
    [LOAD_ALBUMS.ERROR]: (state) => ({ ...state, error: true }),
    [combineActions(
      LOAD_ALBUMS.CANCELLED,
      LOAD_ALBUMS.SUCCESS,
      LOAD_ALBUMS.ERROR,
    )]: (state) => ({ ...state, loading: false }),
    [LOAD_ALBUMS.SUCCESS]: (state, { payload }) => ({
      ...state,
      error: false,
      hasLoadedOnce: true,
      model: payload || state.model,
    }),
  },
  initialState,
)

export default albumsReducer
