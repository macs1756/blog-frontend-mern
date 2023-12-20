import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IcommentsInitialState } from "../Types"
import axios from "../utils/axios"

const initialState: IcommentsInitialState = {
  comments: [],
  isLoading: false
}

export const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {}
})

export default commentSlice.reducer