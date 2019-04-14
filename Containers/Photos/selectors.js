import { createSelector } from 'reselect'
import { get } from 'lodash'

export const getPhotoState = (state) => get(state, 'photos')

export const getHasLoading = createSelector(
  [getPhotoState],
  (photos) => get(photos, 'loading'),
)

export const getHasLoadedOnce = createSelector(
  [getPhotoState],
  (photos) => get(photos, 'hasLoadedOnce'),
)

export const getPhotosModel = createSelector(
  [getPhotoState],
  (photos) => get(photos, 'model'),
)
