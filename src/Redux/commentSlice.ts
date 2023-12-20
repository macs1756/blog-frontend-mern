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

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {}
})

export default commentSlice.reducer