import { handleActions, combineActions } from 'redux-actions'
import { START } from './constants'

const initialState = {
  loading: false,
  error: false,
}

const appReducer = handleActions(
  {
    [START.PENDING]: (state) => ({
      ...state,
      loading: true,
      error: false,
    }),
    [START.ERROR]: (state) => ({ ...state, error: true }),
    [combineActions(START.SUCCESS, START.ERROR)]: (state) => ({
      ...state,
      loading: false,
    }),
    [START.SUCCESS]: (state, { payload }) => ({
      ...state,
      error: false,
    }),
  },
  initialState,
)

export default appReducer
