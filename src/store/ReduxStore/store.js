import { configureStore } from "@reduxjs/toolkit";
import LoginPageSlice from "./LoginPageSlice";

const store = configureStore({
    reducer:{
        login:LoginPageSlice
    }
});

export default store;