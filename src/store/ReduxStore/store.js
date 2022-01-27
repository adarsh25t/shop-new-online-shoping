import { configureStore } from "@reduxjs/toolkit";
import LoginPageSlice from "./LoginPageSlice";
import viewProduct from "./ViewDeailsSlice";
import CategorySlice from "./CategorySlice";

const store = configureStore({
    reducer:{
        login:LoginPageSlice,
        view:viewProduct,
        product:CategorySlice
    }
});

export default store;