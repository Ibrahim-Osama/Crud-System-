import { Formik, useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AddData } from '../State/PostSlice'
import { useNavigate } from 'react-router-dom'
const Add = () => 
{
  let {loading} = useSelector((state)=> state.PostSlice)
   const navigate = useNavigate()
  let dispatch = useDispatch()
 
  let formic = useFormik(
    {
      initialValues: {
        title: '',
        Description: '',
      },
      onSubmit: (values) => {
        console.log(values)
        values.id = Date.now().toString()
        dispatch(AddData(values)).unwrap().then(()=>
        {
          
          navigate('/')
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
      {loading ?  <button className='btn btn-dark w-50 py-2   mt-4' type='submit'>Add Post</button>
      :
      <button disabled={!(formic.dirty && formic.isValid)} className='btn btn-dark w-50 py-2   mt-4' type='submit'>Add Post</button>
      }
    </form>
  </div>
  )
}

export default Add
