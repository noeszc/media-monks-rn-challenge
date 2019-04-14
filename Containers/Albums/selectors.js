import { createSelector } from 'reselect'
import { get } from 'lodash'

export const getAlbumsState = (state) => get(state, 'albums')

export const getHasLoading = createSelector(
  [getAlbumsState],
  (photos) => get(photos, 'loading'),
)

export const getHasLoadedOnce = createSelector(
  [getAlbumsState],
  (photos) => get(photos, 'hasLoadedOnce'),
)

export const getAlbumsModel = createSelector(
  [getAlbumsState],
  (photos) => get(photos, 'model'),
)
