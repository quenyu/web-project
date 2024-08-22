import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddNewCommentSchema } from '../types/addNewComment';

const initialState: AddNewCommentSchema = {
	text: '',
	error: undefined,
};

export const addNewCommentSlice = createSlice({
	name: 'addNewComment',
	initialState,
	reducers: {
		setText: (state, action: PayloadAction<string>) => {
			state.text = action.payload;
		},
	},
	// extraReducers: (builder) => {
	// 	builder
	// 		.addCase(loginByUsername.pending, (state) => {
	// 			state.isLoading = true;
	// 			state.error = undefined;
	// 		})
	// 		.addCase(loginByUsername.fulfilled, (state, action) => {
	// 			state.isLoading = false;
	// 		})
	// 		.addCase(loginByUsername.rejected, (state, action) => {
	// 			state.isLoading = false;
	// 			state.error = action.payload;
	// 		});
	// },
});

export const { actions: addNewCommentActions } = addNewCommentSlice;
export const { reducer: addNewCommentReducer } = addNewCommentSlice;
