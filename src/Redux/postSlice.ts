import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../utils/axios"
import { IinitialStatePost } from '../Types'

const initialState: IinitialStatePost = {
    posts: [],
    popularPosts: [],
    isLoading: false,
}

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers(builder) {
    
  },
})

export default postSlice.reducer