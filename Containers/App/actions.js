import { createAction } from 'redux-actions'
import { START } from './constants'

export const startApp = createAction(START.ACTION)
export const doneStartApp = createAction(START.SUCCESS)
export const pendingStartApp = createAction(START.PENDING)
export const startAppError = createAction(START.ERROR)
