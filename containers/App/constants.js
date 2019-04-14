import { defineAction } from 'redux-define'

export const CANCELLED = 'CANCELLED'
export const ERROR = 'ERROR'
export const PENDING = 'PENDING'
export const SUCCESS = 'SUCCESS'

export const APP = defineAction('app')

export const START = defineAction('START', [ERROR, PENDING, SUCCESS], APP)
