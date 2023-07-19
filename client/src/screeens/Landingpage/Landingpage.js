import React, { useEffect } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import "./Landingpage.css"

const Landingpage = () => {

     const history = useNavigate();
    
 useEffect(()=>{
    const userInfo = localStorage.getItem("userInfo");
    if(userInfo){
        history("/mynotes");
    }
 },[history])
  return (
    <div className='main'>
        <Container>
            <Row>
                <div className="intro-text">
                    <div>
                        <h1 className='title'>
                                Welcome T0 OpNotes
                        </h1>
                        <p className='subtitle'>
                            One safe place for all your notes
                        </p>
                        <div>
                            <div className='buttonContain'>
                                <Link to="/login">
                                    <Button size='lg' className="LandingButton" variant = "dark">
                                        Login
                                    </Button>
                                </Link>
                                <Link to ="/register">
                                    <Button size='lg' className="LandingButton" variant = "dark">
                                        Register
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    </div>
  )
}

export default Landingpage