import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Mainscreen from '../../components/Mainscreen'
import { Button, Card , Badge,Accordion} from 'react-bootstrap'
import { Link } from 'react-router-dom'
// import notes from '../../data/notes'

const Mynotes = () => {
const [notes,setNotes] = useState([])
 

const deletehandler=(id)=>{
    if(window.confirm("are you confirm")) {

    }

  }
    
const fetchNotes = async() =>{
    const {data}  = await axios.get('/api/notes');
    setNotes(data);
}
// console.log(notes);

useEffect(()=>{
  fetchNotes();
},[])
  
  return (
    <div>
       <Mainscreen title='Welcome back Harsh Singhal'>
         <Link to="createnote" style={{textDecoration:"none"}}>
            <Button style={{marginLeft:10,marginBottom:6}} size="sm">
                create newnote
            </Button>
          </Link>
            {
              notes.map((note)=>(
            
                <Accordion >
                  <Accordion.Item eventKey="0" >
                    <Card style={{ margin:10}}>
                    
                      <Card.Header style={{display:"flex",}}>
                        
                        {/* <Accordion.Header> */}
                          <span 
                          style=
                          {{
                            color:"black",
                            textDecoration:"none",
                            
                            flex:"auto",
                            cursor :"pointer",
                            alignself:"center",
                            fontSize: 18,
                            
                          }}
                          >
                            {/* {note.title} */}
                            <Accordion.Header as="Card.Text" variant="link" eventKey="0" >{note.title}</Accordion.Header> 
                            
                          </span>
                          {/* </Accordion.Header> */}
                          <div>
                            <Button href={`/note/${note._id}`}>Update</Button>
                            <Button variant='warning' className='mx-2' onClick={() => deletehandler(note._id)}>Delete</Button>
                          </div>
                      </Card.Header>
                 
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            <h4>
                              <Badge bg="success">
                                Category - {note.category}
                              </Badge>
                            </h4>
                            <blockquote className="blockquote mb-0">
                              <p>
                                {note.content}
                              </p>
                              <footer className="blockquote-footer">
                                Created on - Date
                              </footer>
                            </blockquote>
                          </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                  </Accordion.Item>
                </Accordion>
              ))
            }
           
         
       </Mainscreen>
    </div>
  )
}

export default Mynotes