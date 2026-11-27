import { configureStore } from "@reduxjs/toolkit";
import DashboardReducer from '../pages/Dashboard/dashboard.slice'

export const store =  configureStore({
    reducer:{
       dashboard:DashboardReducer
    }
})