import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: null,
    loggedIn: false,
    loading: false,
    error: null,
    username: null,
    firstName: null,
    lastName: null
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
        },
        getInfo: (state, action) => {
            state.username = action.payload.username
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        }
    }
})

export const { loginStart, loginSuccess, loginFailure, logOut, getInfo } = logSlice.actions
export default logSlice.reducer