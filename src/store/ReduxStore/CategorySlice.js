import { createSlice } from "@reduxjs/toolkit";
import { DUMMY_DATAS } from "../DummyData";

const initialState={
    products:[]
}


const CategorySlice = createSlice({
    name:"categorys",
    initialState,
    reducers:{
        showProducts(state,action){
            DUMMY_DATAS.filter(proId=>{
                return proId.category === action.payload
            }).map((product,index)=>{
                state.products.push(product)
            }) 
        }

    }
})

export const productActions = CategorySlice.actions;

export default CategorySlice.reducer;