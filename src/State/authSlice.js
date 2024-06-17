import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



let auth = createSlice(
    {
        name:'auth',
        initialState:{id:0,islogin:true,error:null },
        reducers:{},
        extraReducers:{},
    })


    export default auth.reducer