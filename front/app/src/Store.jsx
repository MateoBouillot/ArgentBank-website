import { configureStore } from "@reduxjs/toolkit"
import { chat, money, security } from './assets/List'

let state = {
    value: null,
    column: [
        chat,
        money,
        security
    ]
}

const reducer = (currentState, action ) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            const listWithNewProduct = [...currentState.column, action.payload]
            return {...currentState, column: listWithNewProduct}
        case 'REMOVE_PRODUCT':
            const list = currentState.list.filter(
                (item, index) => index !== action.payload
            )
            return {...currentState, list: list}
        default:
            return currentState
            }
        }

export const store = configureStore(
    {
        preloadedState: state,
        reducer
    }
)