import { takeLatest, call, put } from 'redux-saga/effects'
import { LOAD_ALBUMS } from './constants'
import { fetchAllAlbums } from '../../api/albums'
import { pendingLoadAlbums, albumsLoadingError, albumsLoaded } from './actions'
import { doneStartApp } from '../App/actions'

export function* watchFetchAlbums() {
  yield put(pendingLoadAlbums())
  try {
    const response = yield call(fetchAllAlbums)
    yield put(albumsLoaded(response))
    yield put(doneStartApp())
  } catch (error) {
    yield put(albumsLoadingError())
  }
}

export default function* albumsSaga() {
  yield takeLatest(LOAD_ALBUMS.ACTION, watchFetchAlbums)
}
