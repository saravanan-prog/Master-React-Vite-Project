// Thunk is a Redux middleware for async operation

import { createAsyncThunk } from "@reduxjs/toolkit"

export const fetchUserList = createAsyncThunk(
    "fetch/customerList/data",
    async ()=>{
        const response = await fetch("https://fakestoreapi.com/users")
        const responseData = await response.json()
        return responseData
    }
)