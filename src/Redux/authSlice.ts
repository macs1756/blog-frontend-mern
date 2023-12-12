import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "../utils/axios"
import { InitialStateUser } from '../Types'

const initialState: InitialStateUser = {
    user: null,
    isLoading: false,
    status: null,
    token: null
}

export const registerUser = createAsyncThunk('auth/registerUser', async ({ username, password }) => {
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
    extraReducers: {
        [registerUser.pending]: ()=>{
            
        }
    }
})

export default authSlice.reducer