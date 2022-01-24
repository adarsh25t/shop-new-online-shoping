import { configureStore } from "@reduxjs/toolkit";
import LoginPageSlice from "./LoginPageSlice";
import viewProduct from "./ViewDeailsSlice";

const store = configureStore({
    reducer:{
        login:LoginPageSlice,
        view:viewProduct
    }
});

export default store;