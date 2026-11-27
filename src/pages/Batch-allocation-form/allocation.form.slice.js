import { createSlice } from "@reduxjs/toolkit";



const AllocationFormSlice = createSlice({
    name:"batch-alloction",
    initialState:{
        batchAllocation : []
    },
    reducers:{
        addAllocation:(state,action) => {
            console.log("action====>",action)
            state.batchAllocation.push(action.payload.batch)
        }
    }
})

export const {addAllocation} = AllocationFormSlice.actions
export default AllocationFormSlice.reducer