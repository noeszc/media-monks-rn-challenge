import { createAction } from 'redux-actions'
import { LOAD_ALBUMS } from './constants'

export const loadAlbums = createAction(LOAD_ALBUMS.ACTION)
export const pendingLoadAlbums = createAction(LOAD_ALBUMS.PENDING)
export const albumsLoaded = createAction(LOAD_ALBUMS.SUCCESS)
export const albumsLoadingError = createAction(LOAD_ALBUMS.ERROR)
