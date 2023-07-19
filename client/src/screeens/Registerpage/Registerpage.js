import React, { useEffect } from 'react'
import { Form ,Button,Row,Col} from 'react-bootstrap'
import MainScreen from '../../components/Mainscreen'
import {Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Loading from '../../components/Loading'
import ErrorMessage from '../../components/Errormessage'
// import { Form, Button, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

import {useDispatch, useSelector} from "react-redux";
import { register } from '../../actions/userActions'

const Registerpage = () => {
  const history = useNavigate();

  const [email,setEmail] = useState("");
  const [name,setName] = useState("");
  const [pic,setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );

  const [password,setPassword] = useState("");
  const [confirmpassword,setConfirmpassword] = useState("");
  const [message,setMessage] = useState(null);
  const [picMessage,setPicMessage] = useState(null);
  // const [error,setError] = useState(false);
  // const [loading,setLoading] = useState(false);
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const {loading,error,userInfo} = userRegister;

  useEffect(()=>{
    if(userInfo){
      history("/mynotes");
    }
  },[history,userInfo]);
  
  const submitHandler = async(e)=>{
    e.preventDefault();
    if(password !== confirmpassword){
      setMessage('password not match')
    }
    else{
      dispatch(register(name,email,password,pic));
    }

  //  if(password !== confirmpassword){
  //   setMessage("Password do not Match")
  //  } else{
  //     setMessage(null);
  //     try {
  //         const config = {
  //           headers:{
  //               "Content-type":"application/json"
  //           }
  //       }

  //       setLoading(true)

  //       const {data}  = await axios.post('/api/users',{
  //           name,
  //           pic,
  //           email,
  //           password
  //       },
  //       config
  //       );

      
  //       console.log(data)
  //       localStorage.setItem("userInfo",JSON.stringify(data));
  //       setLoading(false)
  //     } catch (error) {
  //           setError(error.response.data.message);
  //           setLoading(false)
  //     }
  //  }
  };



  return (
    <MainScreen title = "Register">
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit = {submitHandler}>
        <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              value={name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmpassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmpassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control type="file"
            //  onChange = {(e)=> postDetail(e)}
            size="sm"
             />
          </Form.Group>

          <Button variant="dark" type="submit">
            Register
          </Button>
        </Form>

        <Row className="py-3">
          <Col>
            Have an Account ? <Link to="/login">Login</Link>
          </Col>
        </Row>
      </div>
    </MainScreen>
  )
}

export default Registerpage