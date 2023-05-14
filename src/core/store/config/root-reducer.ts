import { combineReducers } from '@reduxjs/toolkit'

import { auth } from 'entities/auth'
import { layout } from 'entities/layout'
import { rtqApi } from './rtq-api'

export const rootReducer = combineReducers({
	[rtqApi.reducerPath]: rtqApi.reducer,
	auth,
	layout,
})
