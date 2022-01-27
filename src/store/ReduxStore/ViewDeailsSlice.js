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
            console.log(action.payload);
            DUMMY_DATAS.filter(itemId=>{
                if(itemId.id === action.payload.id){
                    state.product = itemId
                }   
            })
            
        }
    }
    
})

export const viewProductAction = viewProduct.actions;
export default viewProduct.reducer;