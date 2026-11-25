import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({

    name:"calculator",

    initialState:{
        count: 10
    },

    reducers:{

        addition:(state,action)=>{
            state.count += 1
        },
        subraction:(state,action)=>{
            state.count -= 1
        }
    }
})


export const  {addition,subraction} = counterSlice.actions
export default counterSlice.reducer