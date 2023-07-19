import React, { useEffect } from 'react'
import { Col, Row,Form ,Button} from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux'
import Mainscreen from '../../components/Mainscreen'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UpdateProfile } from '../../actions/userActions';
import Loading from '../../components/Loading';
import Errormessage from '../../components/Errormessage';

const ProfilePage = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const history = useNavigate();

    

    const dispatch = useDispatch();

    const userLogin = useSelector((state)=>state.userLogin);
    const {userInfo} = userLogin;

    const userUpdate = useSelector((state)=> state.userUpdate);
    const {loading,error,success} = userUpdate;

    useEffect(() =>{
        if(!userInfo){
            history("/")
        } else {
            setName(userInfo.name);
            setEmail(userInfo.email);

        }
    },[history,userInfo])

    const submitHandler=(e)=>{
        e.preventDefault();
        if(password === confirmPassword){
            dispatch(UpdateProfile({name,email,password}));
        }
        
    }

  return (
    <Mainscreen title='EDIT Profile'>
        <div>
            <Row className='profileContainer'>
                <Col md={6}>
                    <Form onSubmit={submitHandler}>
                        {loading && <Loading/>}
                        {success && (
                            <Errormessage variant='success'>
                                Updated Succesfully
                            </Errormessage>
                        )}
                        {error && <Errormessage variant='danger'>{error}</Errormessage>}
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
                            value={confirmPassword}
                            placeholder="Confirm Password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </Form.Group>

                        {/* <Form.Group controlId="formFileSm" className="mb-3">
                            <Form.Label>Profile Picture</Form.Label>
                            <Form.Control type="file"
                            //  onChange = {(e)=> postDetail(e)}
                            size="sm"
                            />
                        </Form.Group> */}
                        <Button type="submit" variant="success"> Update</Button>
                </Form>
                </Col>
                <Col 
                  style={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                  }}
                ></Col>
            </Row>
        </div>
    </Mainscreen>
  )
}

export default ProfilePage