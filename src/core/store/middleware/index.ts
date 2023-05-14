import { rtqApi } from 'core/store/config/rtq-api'

import { rtkQueryAuthMiddleware } from './auth'
import { serializable } from './serializable'

export const middleware = <T>(getDefaultMiddleware) =>
	getDefaultMiddleware(serializable).concat(rtqApi.middleware).concat(rtkQueryAuthMiddleware)

export * from './serializable'
export * from './auth'
