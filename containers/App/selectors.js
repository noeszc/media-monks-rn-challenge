import { createSelector } from 'reselect'
import { every } from 'lodash'

import { getHasLoadedOnce as isPhotosInStore } from '../Photos/selectors'
import { getHasLoadedOnce as isAlbumsInStore } from '../Albums/selectors'

export const getHasRehydrated = createSelector(
  [isPhotosInStore, isAlbumsInStore],
  (photosStored, albumsStored) => every([photosStored, albumsStored]),
)
