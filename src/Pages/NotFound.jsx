import React from 'react'
import {Container,Row,Col,Table,Button,ButtonGroup,}from "react-bootstrap";
import { useNavigate, useRouteError } from "react-router-dom";

const NotFound = () =>{
  const error = useRouteError();
  const navigate = useNavigate()
  
  return (
    <Container className='text-center mt-5 fs-3'>
    
    <Row>
      <Col xs={{ span: 8, offset: 2 }}>
      <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Button onClick={()=>
        {
          navigate("/",{replace:true});
        }} variant="link"  className='bg-dark text-white text-decoration-none'>Home</Button>

    </div>
      </Col>
    </Row>
  </Container>
  )
}

export default NotFound
