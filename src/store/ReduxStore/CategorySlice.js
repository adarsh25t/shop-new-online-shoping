import { createSlice } from "@reduxjs/toolkit";
import { PRODUCTS } from "../DummyData";

const initialState={
    products:[]
}



const CategorySlice = createSlice({
    name:"categorys",
    initialState,
    reducers:{
        showProducts(state,action){
            PRODUCTS.filter(proId=>{
                return proId.category === action.payload
            }).map((product,index)=>{
                state.products.push(product)
        })   }
    }
})

export const productActions = CategorySlice.actions;

export default CategorySlice.reducer;