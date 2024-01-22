import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { logSlice } from './logSlice'
import {infoSlice} from "./infoSlice"


let state = {
    log: null,
    info: null
}


export const store = configureStore(
    {
        
        reducer: {
            log: logSlice.reducer,
            info: infoSlice.reducer
        }
        
    }
)




// !!!!!! optimiser les images
//     message d erreur