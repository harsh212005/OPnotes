import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import "./Landingpage.css"

const Landingpage = () => {
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
                                <a href="/login">
                                    <Button size='lg' className="LandingButton">
                                        Login
                                    </Button>
                                </a>
                                <a href="/register">
                                    <Button size='lg' className="LandingButton" variant = "outline-primary">
                                        Register
                                    </Button>
                                </a>
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