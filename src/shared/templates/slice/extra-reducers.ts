import { ActionReducerMapBuilder } from '@reduxjs/toolkit'

import { setStatus } from 'shared/lib/redux/set-status'
import { FileNameFetch } from './thunk'
import { FileNameModel } from './types'

const { fetchFileName } = FileNameFetch

export const extraReducers = (builder: ActionReducerMapBuilder<FileNameModel>) => {
	builder
		.addCase(fetchFileName.pending, (state, action) => {
			setStatus(state.data, action)
		})
		.addCase(fetchFileName.rejected, (state, action) => {
			setStatus(state.data, action)
		})
		.addCase(fetchFileName.fulfilled, (state, action) => {
			const { payload } = action
			setStatus(state.data, action)

			state.data = payload
		})
}
