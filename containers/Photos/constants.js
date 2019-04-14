import { defineAction } from 'redux-define'
import { ERROR, PENDING, SUCCESS, CANCELLED, APP } from '../App/constants'

export const LOAD_PHOTOS = defineAction(
  'LOAD_PHOTOS',
  [PENDING, ERROR, SUCCESS, CANCELLED],
  APP,
)
