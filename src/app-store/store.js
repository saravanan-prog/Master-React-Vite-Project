import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../pages/counter/couter.slice'

export const store =  configureStore({
    reducer:{
        counter: counterReducer
    }
})