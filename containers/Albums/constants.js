import { defineAction } from 'redux-define'
import { ERROR, PENDING, SUCCESS, CANCELLED, APP } from '../App/constants'
export const LOAD_ALBUMS = defineAction(
  'LOAD_ALBUMS',
  [ERROR, PENDING, SUCCESS, CANCELLED],
  APP,
)
