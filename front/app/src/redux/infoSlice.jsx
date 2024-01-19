import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    username: null,
    firstName: null,
    lastName: null
}

export const infoSlice = createSlice( {
    name: 'info',
    initialState,
    reducers: {
        getInfo: (state, action) => {
            state.username = action.payload.username
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        }
    }
})

export const {getInfo} = infoSlice.actions
export default infoSlice.reducer