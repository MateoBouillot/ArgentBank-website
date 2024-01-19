import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null,
    loggedIn: false,
    loading: true,
    error: null,
    
}

export const logSlice = createSlice( {
    name: 'log',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true
            state.error = null
        },
        loginSuccess: (state, action) => {
            state.loading = false
            state.loggedIn = true
            state.token = action.payload.token
        },
        loginFailure: (state, action) => {
            state.loading = false
            state.error = action.payload.error
        },
        logOut: (state) => {
            state.token = null
            state.loggedIn = false
        }
        
    }
})

export const { loginStart, loginSuccess, loginFailure, logOut } = logSlice.actions
export default logSlice.reducer