import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    show:false
};

const loginPageSlice = createSlice({
    name:"loginPage",
    initialState,
    reducers:{
        loginPageShow(state){
            state.show = true;
        },
        loginPageClose(state){
            state.show = false;
        }
    }
})

export const loginPageActions = loginPageSlice.actions;
export default loginPageSlice.reducer;