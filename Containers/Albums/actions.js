import { createAction } from 'redux-actions'
import { LOAD_PHOTOS } from './constants'

export const loadPhotos = createAction(LOAD_PHOTOS.ACTION)
