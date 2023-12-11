import { createSlice } from "@reduxjs/toolkit"
import { InitialStateUser } from '../Types'

const initialState: InitialStateUser = {
    user: null,
    isLoading: false,
    status: null,
    token: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
})

export default authSlice.reducer