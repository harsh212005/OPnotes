import React, { useEffect } from 'react'
// import axios from 'axios'
import Mainscreen from '../../components/Mainscreen'
import { Button, Card , Badge,Accordion} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { listNotes } from '../../actions/notesAction'
import Loading from '../../components/Loading'
import { useNavigate } from 'react-router-dom'
import Errormessage from '../../components/Errormessage'
import { deleteNoteAction } from '../../actions/notesAction'
// import notes from '../../data/notes'

const Mynotes = () => {
  const dispatch = useDispatch();

const noteList = useSelector(state => state.noteList)
const userLogin = useSelector(state => state.userLogin)
const {loading,notes,error} = noteList;
const {userInfo} = userLogin;
const history = useNavigate();

const noteCreate = useSelector((state) => state.noteCreate);
const {success:successCreate} = noteCreate;

const noteUpdate = useSelector((state) => state.noteUpdate);
const {success:successUpdate} = noteUpdate;

const noteDelete = useSelector((state) => state.noteDelete);
const { loading:loadingDelete,error:errorDelete,success:successDelete} = noteDelete;


// const [notes,setNotes] = useState([]);
// const [error,setError] = useState(false);
useEffect(()=>{
// fetchNotes();
  dispatch(listNotes());
  if(!userInfo){
    history('/')
  }
  },[dispatch,successCreate,history,userInfo,successUpdate,successDelete]
);
const deletehandler=(id)=>{
    if(window.confirm("are you confirm")) {
        dispatch(deleteNoteAction(id));
    }

  }
    
// const fetchNotes = async() =>{
//     const {data}  = await axios.get('/api/notes');
//     setNotes(data);
// }
// console.log(notes);

// useEffect(()=>{
//   fetchNotes();
// },[])


// const fetchNotes = async(e) =>{
  
//   const userInfo = localStorage.getItem("userInfo");
//   try{
//     const config = {
//       headers:{
        
//         Authorization:`Bearer ${userInfo.token}`
//       }
//     }
//     const {data}  = await axios.get('/api/notes',config);
//     setNotes(data);
//   }catch(error){
//     setError(error.response.data.message);
//   }
  
  
// }
// console.log(notes);


  
  return (
    <div>
       <Mainscreen title=
      //  {`Welcome back ${userInfo.name}`}
       "Welcome back harsh singhal"
       >
         <Link to="/createnote" style={{textDecoration:"none"}}>
            <Button style={{marginLeft:10,marginBottom:6}} size="sm">
                create newnote
            </Button>
          </Link>
          {errorDelete && (<Errormessage variant="danger">{errorDelete}</Errormessage>)}
          {loadingDelete && <Loading></Loading>}
          {loading && <Loading></Loading> }
            {
              
              notes?.reverse().map((note)=>(
            
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
                            <Button href ={`/note/${note._id}`}>Update</Button>
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
                                Created on{" "}
                                <cite>
                                  {note.createdAt.substring(0,10)}
                                </cite>
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