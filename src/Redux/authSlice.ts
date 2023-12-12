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


export const loginUser = createAsyncThunk('auth/loginUser', async ({ username, password }: RegisterUserPayload) => {
    try {

        const { data } = await axios.post('/auth/login/', {
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

        //Register
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(registerUser.fulfilled, (state,action) => {
            state.isLoading = false
            state.status = action?.payload?.messange
            state.user = action?.payload?.newUser
            state.token = action?.payload?.token
        });
        builder.addCase(registerUser.rejected, (state) => {
           state.status = 'Error on server'
           state.isLoading = false
        });

        //Log In
        builder.addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(loginUser.fulfilled, (state,action) => {
            state.isLoading = false
            state.status = action?.payload?.messange
            state.user = action?.payload?.newUser
            state.token = action?.payload?.token
        });
        builder.addCase(loginUser.rejected, (state) => {
           state.status = 'Error on server'
           state.isLoading = false
        }); 


    },
})

export default authSlice.reducer