import { createAction } from 'redux-actions'
import { LOAD_PHOTOS } from './constants'

export const loadPhotos = createAction(LOAD_PHOTOS.ACTION)
export const pendingLoadPhotos = createAction(LOAD_PHOTOS.PENDING)
export const photosLoaded = createAction(LOAD_PHOTOS.SUCCESS)
export const photosLoadingError = createAction(LOAD_PHOTOS.ERROR)
