import React from 'react'
import UsepostDetails from '../hooks/GetDetails'
import { useParams } from 'react-router-dom';

const Details = () =>
{
  
  let {id} = useParams()
  let {loading , Records , error} = UsepostDetails(id)
  

  return (
    <div className='text-center bg-dark text-white p-4'>
    <h2>{Records.id}</h2>
    <h3>{Records.title}</h3>
    <h3>{Records.title}</h3>
    </div>
  )
}

export default Details
