import { configureStore } from "@reduxjs/toolkit";
import batchAllocationReducer from '../pages/Batch-allocation-form/allocation.form.slice' 

export const store =  configureStore({
    reducer:{
        batches: batchAllocationReducer
    }
})