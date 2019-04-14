import { fork } from 'redux-saga/effects'
import appSaga from './containers/App/saga'
import photosSaga from './containers/Photos/saga'
import albumsSaga from './containers/Albums/saga'

export default function* createSagas() {
  yield fork(appSaga)
  yield fork(photosSaga)
  yield fork(albumsSaga)
}
