import React from 'react'
import { useState } from 'react'
import { Button,Form,Col } from 'react-bootstrap'
import Mainscreen from '../../components/Mainscreen'
import Loading from '../../components/Loading'
import { Link } from 'react-router-dom'
import "./Loginpage.css"
import axios from 'axios'
import Errormessage from '../../components/Errormessage'

const Loginpage = () => {

    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    // useEffect(() => {
      
    
      
    // }, [third])
    

    const submitHandler= async(e)=>{
        e.preventDefault()
       
        try {
            const config = {
                headers:{
                    "Content-type":"application/json"
                }
            }

            setLoading(true)

            const {data}  = await axios.post('/api/users/login',{
                email,
                password
            },
            config
            );

            setLoading(false)
            console.log(data)
            localStorage.setItem("userInfo",JSON.stringify(data));
           
        } catch (error) {
            setError(error.response.data.message);
            setLoading(false)
        }
    }
  return (
    <Mainscreen title ="Login">
        <div  className="loginContainer">
            {error && <Errormessage variant="danger">{error}</Errormessage>}
            {loading && <Loading></Loading>}
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value = {email} placeholder="Enter email" 
                onChange={(e)=>setEmail(e.target.value)}
            />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} placeholder="Password" 
                 onChange={(e)=>setPassword(e.target.value)}
            />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            
            </Form.Group>
            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
        <Col>
            New User ?  <Link to="/register">Register Here </Link>
        </Col>
        </div>
    </Mainscreen>
    
  )
}

export default Loginpage