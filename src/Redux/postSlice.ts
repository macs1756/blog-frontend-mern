import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../utils/axios"
import { IgetAllPostsPayload, IinitialStatePost, IpostPayload, RemovePostResponse } from '../Types'

const initialState: IinitialStatePost = {
  posts: [],
  popularPosts: [],
  isLoading: false,
}

export const createPost = createAsyncThunk('post/createPost', async (params:FormData) => {
  try {
    const { data } = await axios.post('/posts/create', params)
    return data
  } catch (error) {
    console.log(error)
  }
})

export const getPosts = createAsyncThunk('post/getPosts', async () => {
  try {
    const { data } = await axios.get('/posts/get')
    return data
  } catch (error) {
    console.log(error)
  }
})


export const removePost = createAsyncThunk<RemovePostResponse, string>(
  'post/removePost',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`/posts/${id}/`);
      return response.data;
    } catch (error) {
      console.error('Error removing post:', error);
      return rejectWithValue(error); // You can customize this based on your needs
    }
  }
)

export const replacePost = createAsyncThunk<any, FormData>(
  'post/replacePost',
  async (updatedPost: FormData, { rejectWithValue }) => {

    const id = updatedPost.get('id') as string;

    try {
      const response = await axios.put(`/posts/${id}/`,updatedPost);
      return response.data;
    } catch (error) {
      console.error('Error removing post:', error);
      return rejectWithValue(error); // You can customize this based on your needs
    }
  }
)

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



    //Get posts
    builder.addCase(getPosts.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(getPosts.fulfilled, (state, action: IgetAllPostsPayload) => {
      state.isLoading = false
      state.posts = action?.payload?.posts
      state.popularPosts = action?.payload?.popularPosts
    })

    builder.addCase(getPosts.rejected, (state) => {
      state.isLoading = false
    })

    
    //Remove post
    builder.addCase(removePost.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(removePost.fulfilled, (state, action) => {
      state.isLoading = false
      state.posts = state.posts.filter(post => post._id !== action.payload._id )
    })

    builder.addCase(removePost.rejected, (state) => {
      state.isLoading = false
    })


    //Replace post
    builder.addCase(replacePost.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(replacePost.fulfilled, (state, action) => {
      state.isLoading = false

      const index = state.posts.findIndex( post => post?._id === action.payload._id)

      state.posts[index] = action.payload
      // state.posts[index].description = action.payload.description
      // state.posts[index].image = action.payload.image
    })

    builder.addCase(replacePost.rejected, (state) => {
      state.isLoading = false
    })


  },
})

export default postSlice.reducer