import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "./PostSlice";
import auth from "./authSlice";


let storee = configureStore(
    {
        reducer:
        {
            PostSlice,auth
        } 
    })


export default storee;