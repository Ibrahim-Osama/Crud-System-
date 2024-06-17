import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export let getdata = createAsyncThunk('post/getdata', async(_,thunkapi)=>
{
    let {rejectWithValue}= thunkapi
  try
  {
    let response = await axios.get('http://localhost:3001/Posts')
  console.log(response);
  return response.data
  }
  catch(error)
  {
      console.log(error);
    return rejectWithValue(error);
  }
})

export let DeleteData = createAsyncThunk('post/DeleteData', async(rowid,thunkapi)=>
{
    let {rejectWithValue}= thunkapi
  try
  {
    let response = await axios.delete('http://localhost:3001/Posts/' + rowid)
  console.log(response);
  return response.data
  }
  catch(error)
  {
      console.log(error);
    return rejectWithValue(error);
  }
})

export let AddData = createAsyncThunk('post/AddData', async(row,thunkapi)=>
{
    let {rejectWithValue}= thunkapi
  try
  {
    let response = await axios.post('http://localhost:3001/Posts/',row,
    
    {
        Headers: {'Content-Type': 'application/json'}
    })
  console.log(response);
  return response.data
  }
  catch(error)
  {
      console.log(error);
    return rejectWithValue(error);
  }
})


export let editpost = createAsyncThunk('post/editpost', async(id,thunkapi)=>
{
    let {rejectWithValue}= thunkapi
  try
  {
    let response = await axios.get('http://localhost:3001/Posts/'+ id)
  console.log(response);
  return response.data
  }
  catch(error)
  {
      console.log(error);
    return rejectWithValue(error);
  }
})

export let editposts = createAsyncThunk('post/editposts', async(id,thunkapi)=>
{
    let {rejectWithValue}= thunkapi
  try
  {
    let response = await axios.patch('http://localhost:3001/Posts/'+ id.id,id)
  console.log(response.data);
  return response.data
  }
  catch(error)
  {
      console.log(error);
    return rejectWithValue(error);
  }
})




let  initialState= {Records:[],loading:false , error:null }
let postslice = createSlice(
    {
        name:"post",
        initialState,
        reducers:{},
        extraReducers:(bulider)=>
        {
            bulider.addCase(getdata.pending,(state , action)=>
            {
              
                state.loading = true
                state.error = null;
                
            })
            .addCase(getdata.fulfilled,(state , action)=>
            {
                state.Records = action.payload
                  state.loading = false
                
                
            })
            .addCase(getdata.rejected,(state , action)=>
            {
                  state.loading = false
                state.error = action.payload;
                
            })
            


            bulider.addCase(DeleteData.pending,(state , action)=>
            {
              
                state.loading = true
                state.error = null;
                
            })
            .addCase(DeleteData.fulfilled,(state , action)=>
            {
                state.Records= state.Records.filter((item)=>
                {
                    return item.id !== action.payload.id
                })
                  state.loading = false
                
                
            })
            .addCase(DeleteData.rejected,(state , action)=>
            {
                  state.loading = false
                state.error = action.payload;
                
            })



            bulider.addCase(AddData.pending,(state , action)=>
            {
              
                state.loading = true
                state.error = null;
                
            })
            .addCase(AddData.fulfilled,(state , action)=>
            {
                    state.Records = action.payload
                  state.loading = false
                
                
            })
            .addCase(AddData.rejected,(state , action)=>
            {
                  state.loading = false
                state.error = action.payload;
                
            })


            bulider.addCase(editpost.pending,(state , action)=>
            {
              
                state.loading = true
                state.error = null;
                
            })
            .addCase(editpost.fulfilled,(state , action)=>
            {
                    state.Records = action.payload
                  state.loading = false
                
                
            })
            .addCase(editpost.rejected,(state , action)=>
            {
                  state.loading = false
                state.error = action.payload;
                
            })

            bulider.addCase(editposts.pending,(state , action)=>
            {
              
                state.loading = true
                state.error = null;
                
            })
            .addCase(editposts.fulfilled,(state , action)=>
            {
                    state.Records = action.payload
                  state.loading = false
                
                
            })
            .addCase(editposts.rejected,(state , action)=>
            {
                  state.loading = false
                state.error = action.payload;
                
            })



        }
    })


    export default postslice.reducer;