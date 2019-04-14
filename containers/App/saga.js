import { takeLatest, put, select } from 'redux-saga/effects'
import { START } from './constants'
import { loadPhotos } from '../Photos/actions'
import { getHasRehydrated } from './selectors'
import { pendingStartApp, doneStartApp, startAppError } from './actions'

export function* watchStartApp() {
  yield put(pendingStartApp())

  try {
    const hasLoadedOnce = yield select(getHasRehydrated)
    if (hasLoadedOnce) return yield put(doneStartApp())

    yield put(loadPhotos())
  } catch (error) {
    yield put(startAppError(error))
  }
}

export default function* appSaga() {
  yield takeLatest(START.ACTION, watchStartApp)
}
