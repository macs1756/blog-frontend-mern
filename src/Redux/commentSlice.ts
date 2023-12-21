import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IcommentsInitialState, IcreateCommentArgs } from "../Types"
import axios from "../utils/axios"

const initialState: IcommentsInitialState = {
  comments: [],
  isLoading: false
}


export const createComment = createAsyncThunk<any, IcreateCommentArgs>('comment/createComment', async ({postId, comment}) => {
    try {
      const { data } = await axios.post(`/comments/${postId}`, {
        postId, comment
      })

      return data

    } catch (error) {
      console.log(error)
      
    }
})


export const getCommentsForPost = createAsyncThunk('comment/getCommentsForPost', async (postId: string) => {
  try {
    
    const { data } = await axios.post(`/comments/${postId}`, {
    })

    return data

  } catch (error) {
    console.log(error)
  }
})

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers(builder) {
    

 //Create comment
 builder.addCase(createComment.pending, (state) => {
  state.isLoading = true
})

builder.addCase(createComment.fulfilled, (state, action) => {
  state.isLoading = false
  state.comments.push(action?.payload)
})

builder.addCase(createComment.rejected, (state) => {
  state.isLoading = false
})


  },
})

export default commentSlice.reducer