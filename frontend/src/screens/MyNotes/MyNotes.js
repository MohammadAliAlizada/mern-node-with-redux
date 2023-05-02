import React, { useEffect} from 'react'
import MainScreen from '../../components/MainScreen';
import {Link} from 'react-router-dom'
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, listNotes } from "../../actions/notesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { useNavigate } from "react-router-dom";

const MyNotes = ({search}) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;


  const noteList = useSelector((state) => state.noteList);
  const { loading, error, notes } = noteList;
 
  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;

  const noteDelete = useSelector((state) => state.noteDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = noteDelete;
 

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
  };

  //used useEffect to check user login or not
  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      navigate("/");
    }

  }, [dispatch,successDelete,successUpdate,successCreate, userInfo, navigate])

  return (
    <MainScreen title={`Welcome ${userInfo.name}...`}>
       <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create new Note
        </Button >
        </Link>

        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {errorDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
        )}

        {loading && <Loading />}
        {loadingDelete && <Loading />}

        {notes &&
          notes.reverse().filter((filteredNote) =>
            filteredNote.title.toLowerCase().includes(search.toLowerCase())
          ).map(note => (
          <Accordion key={note._id} defaultActiveKey="0">
            <Card style={{ margin: 10 }} >
            <Card.Header style={{ display: "flex" }}>
              <span
              style={{
                color: "black",
                textDecoration: "none",
                flex: 1,
                cursor: "pointer",
                alignSelf: "center",
                fontSize: 18,
              }}>{note.title}</span>

              <div>
                  <Button href={`/note/${note._id}`}>Edit</Button>
                  <Button variant="danger" className="mx-2" onClick={()=>deleteHandler(note._id)}>Delete</Button>
              </div>
          </Card.Header>
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
                        <cite title="Source Title">
                          {note.createdAt.substring(0, 10)}
                        </cite>
                  </footer>
              </blockquote>
        </Card.Body>
      </Card>
      </Accordion>
        ))}
 
    </MainScreen>
  )
}

export default MyNotes
