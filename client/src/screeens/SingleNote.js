import React from 'react'
import Mainscreen from '../components/Mainscreen'
import { Button, Card, Form } from "react-bootstrap";
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import Errormessage from '../components/Errormessage';
import Loading from '../components/Loading';
import ReactMarkdown from 'react-markdown';
import { updateNoteAction } from '../actions/notesAction';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteNoteAction } from '../actions/notesAction';







const SingleNote = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [category, setCategory] = useState();
  const [date, setDate] = useState("");

  const dispatch = useDispatch();
  const history = useNavigate();
  const useParamsd = useParams();

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { loading, error } = noteUpdate;

  const noteDelete = useSelector((state) => state.noteDelete);
  const { loading:loadingDelete,error:errorDelete} = noteDelete;

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/notes/${useParamsd.id}`);

      setTitle(data.title);
      setContent(data.content);
      setCategory(data.category);
      setDate(data.updatedAt);
    };

    fetching();
  }, [useParamsd.id, date]);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateNoteAction(useParamsd.id, title, content, category));
    if (!title || !content || !category) return;

    resetHandler();
    history("/mynotes");
  };

  const deleteHandler =(id)=>{
    if(window.confirm("are you confirm")) {
        dispatch(deleteNoteAction(id));
    }
    history("/mynotes");

  }




  return (
    <Mainscreen title="Edit Note">
      <Card>
        <Card.Header>Edit your Note</Card.Header>
        <Card.Body>
          <Form onSubmit={updateHandler}>
            {loadingDelete && <Loading />}
            {error && <Errormessage variant="danger">{error}</Errormessage>}
            {errorDelete && (
              <Errormessage variant="danger">{errorDelete}</Errormessage>
            )}
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                placeholder="Enter the title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter the content"
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            {content && (
              <Card>
                <Card.Header>Note Preview</Card.Header>
                <Card.Body>
                  <ReactMarkdown>{content}</ReactMarkdown>
                </Card.Body>
              </Card>
            )}

            <Form.Group controlId="content">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="content"
                placeholder="Enter the Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            {loading && <Loading size={50} />}
            <Button variant="primary" type="submit">
              Update Note
            </Button>
            <Button
              className="mx-2"
              variant="danger"
              onClick={() => deleteHandler(useParamsd.id)}
            >
              Delete Note
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Updated on - {date.substring(0, 10)}
        </Card.Footer>
      </Card>
    </Mainscreen>
  )
}

export default SingleNote