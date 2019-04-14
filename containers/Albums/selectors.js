import { createSelector } from 'reselect'
import _ from 'lodash'

export const getAlbumsState = (state) => _.get(state, 'albums')

export const getHasLoading = createSelector(
  [getAlbumsState],
  (photos) => _.get(photos, 'loading'),
)

export const getHasLoadedOnce = createSelector(
  [getAlbumsState],
  (photos) => _.get(photos, 'hasLoadedOnce'),
)

export const getAlbumsModel = createSelector(
  [getAlbumsState],
  (photos) => _.get(photos, 'model'),
)
