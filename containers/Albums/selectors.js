import { createSelector } from 'reselect'
import _ from 'lodash'
import { getPhotosByAlbumId } from '../Photos/selectors'
export const getAlbumsState = (state) => _.get(state, 'albums')

export const getHasLoading = createSelector(
  [getAlbumsState],
  (albums) => _.get(albums, 'loading'),
)

export const getHasLoadedOnce = createSelector(
  [getAlbumsState],
  (albums) => _.get(albums, 'hasLoadedOnce'),
)

export const getAlbumsModel = createSelector(
  [getAlbumsState],
  (albums) => _.get(albums, 'model'),
)
