import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../utils/axios"
import { InitialStateUser, RegisterUserPayload } from '../Types'

const initialState: InitialStateUser = {
    user: null,
    isLoading: false,
    status: null,
    token: null
}



export const registerUser = createAsyncThunk('auth/registerUser', async ({ username, password }: RegisterUserPayload) => {
    try {

        const { data } = await axios.post('/auth/register/', {
            username, password
        })

        if (data.token) {
            window.localStorage.setItem('token', data.token)
        }

        return data

    } catch (error) {
        console.log(error)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(registerUser.fulfilled, (state,action) => {
            state.isLoading = false
            state.status = action.payload.messange
            state.user = action.payload.user
            state.token = action.payload.token
        });

        builder.addCase(registerUser.rejected, (state,action) => {
           state.status = 'An unknown error occurred';
           state.isLoading = false
        });
    },
})

export default authSlice.reducer