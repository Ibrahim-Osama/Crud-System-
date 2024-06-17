import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { AddData, editposts } from '../State/PostSlice'
import UsepostDetails from '../hooks/GetDetails'

const Edit = () =>{
  let nav = useNavigate()

  let {id} = useParams()
  let {loading , Records , error} = UsepostDetails(id)
  let [ record, setrecord] = useState('')
   const navigate = useNavigate()
  let dispatch = useDispatch()
  console.log(record.id);
  useEffect(()=>
  { 
    if(Records)
    {
   
      setrecord(Records)
    }
  },[Records])

  let formic = useFormik(
    {
      initialValues: {
        title: record ? `${record.title}`:'',
        Description: record ?  `${record.Description}`: '',
      },enableReinitialize: true,
      onSubmit: (values) => {
        console.log(values)
        values.id = Date.now().toString()
        dispatch(editposts({id:record.id ,title:values.title,Description:values.Description})).then(()=>
        {
          nav('/')
        
        }).catch((error)=>
        {
          console.log(error);
        })
      },
    })



  return (
    <div className=''>
    <form  onSubmit={formic.handleSubmit} className='w-50 m-auto text-center'>
      <label htmlFor="title"></label>
      <input onChange={formic.handleChange} value={formic.values.title} type="text" placeholder='Enter Ur title' className='form-control ' name="title" id="title" />
      <label htmlFor="Description"></label>
      <input  onChange={formic.handleChange} value={formic.values.Description} type="text" placeholder='Enter Ur Description' className='form-control ' name="Description" id="Description" />
      {loading ?  <h1>Loading</h1>
      :
      <button disabled={!(formic.dirty && formic.isValid)} className='btn btn-dark w-50 py-2   mt-4' type='submit'>Edit Post</button>
      }
    </form>
  </div>
  )
}

export default Edit
