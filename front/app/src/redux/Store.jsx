import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { chat, money, security, Account1, Account2, Account3 } from '../assets/List'
import { logSlice } from './logSlice'

let state = {
    value: null,
    column: [
        chat,
        money,
        security
    ],
    accounts: [
        Account1,
        Account2,
        Account3
    ]
}

export const store = configureStore(
    {
        
        preloadedState: state,
        reducer: logSlice.reducer
        
    }
)