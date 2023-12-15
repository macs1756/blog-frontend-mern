import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../utils/axios"
import { IinitialStatePost, IpostPayload } from '../Types'

const initialState: IinitialStatePost = {
  posts: [],
  popularPosts: [],
  isLoading: false,
}

export const createPost = createAsyncThunk('post/createPost', async (params) => {
  try {

    const { data } = await axios.post('/posts/create', params)

    return data

  } catch (error) {
    console.log(error)
  }
})

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers(builder) {

    //Create post
    builder.addCase(createPost.pending, (state) => {
      state.isLoading = true
    })


    builder.addCase(createPost.fulfilled, (state, action: IpostPayload) => {
      state.isLoading = false
      state.posts.push(action?.payload)
    })


    builder.addCase(createPost.rejected, (state) => {
      state.isLoading = false
    })



  },
})

export default postSlice.reducer