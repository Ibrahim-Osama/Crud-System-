import React, { useEffect } from 'react'
import { Button, ButtonGroup, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteData, getdata } from '../State/PostSlice';
import { Link, useNavigate } from 'react-router-dom';


const Postdata = () => {

 let {Records , error , loading} = useSelector((state)=> state.PostSlice)
  let navigate =   useNavigate()
  let dispatrch = useDispatch()
  useEffect(()=>
  {
    dispatrch(getdata())
  }
  ,[dispatrch])

console.log(Records,555555555555555555);
  return <>
  {loading?  <h3>Loading...</h3>: error ? <h3>{error.message}...</h3>:
  <Table  striped bordered hover>
    
    <thead>
      <tr>
        <th>#</th>
        <th style={{ width: "70%" }}>Title</th>
        <th style={{ width: "10%" }}></th>
      </tr>
    </thead>
    <tbody>
     {Records.length > 0 ?( Records?.map((item , index)=>
     {return <tr key={index} >
      <td>#{item.id}</td>
      <td>
        
        <Link className='text-decoration-none text-success' to={`post/${item.id}`}>
        {item.title}
        </Link>
        </td>
      <td>
        <ButtonGroup aria-label="Basic example">
          <Button onClick={()=>
          {

            navigate(`post/${item.id}/edit`)
          }
          } variant="success">Edit</Button>
          <Button variant="danger"onClick={()=>
            {
              if(window.confirm("Are you sure you want to"))
              {
                dispatrch(DeleteData(item.id))
              }
            }} >Delete</Button>
        </ButtonGroup>
      </td>
   
    </tr>
     })):null}
    </tbody>
  </Table>}
    
  </>
}

export default Postdata
