import { takeLatest, call, put } from 'redux-saga/effects'
import { LOAD_PHOTOS } from './constants'
import { fetchAllPhotos } from '../../api/photos'
import { pendingLoadPhotos, photosLoadingError, photosLoaded } from './actions'
import { loadAlbums } from '../Albums/actions'

export function* watchFetchPhotos() {
  yield console.log('*watchFetchPhotos()')
  yield put(pendingLoadPhotos())
  try {
    const response = yield call(fetchAllPhotos)
    yield put(photosLoaded(response))
    yield put(loadAlbums())
  } catch (error) {
    yield put(photosLoadingError())
  }
}

export default function* photosSaga() {
  yield takeLatest(LOAD_PHOTOS.ACTION, watchFetchPhotos)
}
