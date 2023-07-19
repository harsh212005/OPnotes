import React from 'react'
// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import {Link ,useNavigate} from "react-router-dom";
import { logout } from '../../actions/userActions';

const Header = ({setSearch}) => {
   const history = useNavigate();
   const dispatch = useDispatch();

   const userLogin = useSelector((state)=> state.userLogin);
   const {userInfo} = userLogin;

   const logoutHandler=()=>{
    dispatch(logout());
    // if(userInfo){
    //   hi
    // }
    history('/');
   }

  return (
    
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
        <Navbar.Brand >
         {/* <NavLink className='nav-link'  to="/">OPNotes</NavLink>  */}
         {/* <Nav.Link href="/">OpNotes</Nav.Link> */}
         <Link className='nav-link' to="/">
                  OpNotes
              </Link>
         {/* OpNotes */}
        </Navbar.Brand> 
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="m-auto">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setSearch(e.target.value)}
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
          </Nav>
          <Nav
            // className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/Mynotes">
              <Link className='nav-link' to="/Mynotes">
                  Mynotes
              </Link>
            </Nav.Link>
            {/* <Nav.Link href="#action2">Link</Nav.Link> */}
            {userInfo?<NavDropdown className='nav-link' title={userInfo?.name} id="navbarScrollingDropdown">
              <NavDropdown.Item href="/profile">My profile</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item> */}
              <NavDropdown.Divider />
              <NavDropdown.Item 
               onClick = {logoutHandler}
              >
               logout
              </NavDropdown.Item>
            </NavDropdown>:<Nav>
                <Nav.Link href="/login">
                  <Link className='nav-link' to="/login">
                      Login
                  </Link>
                </Nav.Link>
              </Nav>}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */} 
          </Nav>
         
        </Navbar.Collapse>
        </Container>
     
        
      
    </Navbar>
    
    
  )
};

export default Header