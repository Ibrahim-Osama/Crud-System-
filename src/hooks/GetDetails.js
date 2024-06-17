import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editpost } from '../State/PostSlice'

const UsepostDetails = (id) => 
{
 
    let {loading , Records , error} = useSelector((state)=> state.PostSlice)
    const dispatch = useDispatch()
  useEffect(()=>
  {
    dispatch(editpost(id))
  },[dispatch , id])
  
  return {loading , Records , error}



}

export default UsepostDetails
