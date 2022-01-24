import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const viewProduct = createSlice({
    name:"viewproduct",
    initialState,
    reducers:{
        addProduct(state,action){
            state.push(action.payload)
        }
    }
})
export const viewProductAction = viewProduct.actions;
export default viewProduct.reducer;