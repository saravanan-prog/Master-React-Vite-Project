import { createSlice } from "@reduxjs/toolkit";
import { fetchUserList } from "./dashboard.thunk";


const DashboardSlice = createSlice(
    {
        name:"Dashboard",
        initialState:{
            loading : false,
            error:null,
            data:[],
        },
        reducers:{},
        extraReducers:(builder)=>{
            builder.addCase(fetchUserList.pending,(state,action)=>{
                state.loading = true
            })
            .addCase(fetchUserList.fulfilled,(state,action)=>{
                state.loading = false,
                state.error = null,
                state.data = action.payload
            })
            .addCase(fetchUserList.rejected,(state,action)=>{
                state.loading = false,
                state.error = action.error.message
                state.data = null
            })
        }   
    }

)

export default DashboardSlice.reducer