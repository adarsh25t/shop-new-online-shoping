import { createSlice } from "@reduxjs/toolkit";
import {DUMMY_DATAS} from "../DummyData";
 
const initialState={
    product:null
};

const viewProduct = createSlice({
    name:"viewproduct",
    initialState,
    reducers:{
        addProduct(state,action){
            DUMMY_DATAS.filter(itemId=>{
                if(itemId.id === action.payload){
                    state.product = itemId
                }   
            })
            
        }
    }
    
})

export const viewProductAction = viewProduct.actions;
export default viewProduct.reducer;