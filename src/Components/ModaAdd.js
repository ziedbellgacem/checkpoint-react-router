import {useState} from 'react'
import {Button,Modal,Form} from "react-bootstrap"

function Example({Add}) {
    const [show, setShow] = useState(false);
    const [newtit,setNewtit]=useState('');
    const [newdes,setNewdes]=useState('');
    const [newpost,setNewpost]=useState('');
    const [newrat,setNewrat]=useState();
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
  
    return (
      <>
        <Button variant="outline-danger" onClick={handleShow}>
          Add Movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                onChange={(e) => setNewtit(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                onChange={(e) => setNewdes(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>PosterUrl</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter posterUrl"
                onChange={(e) => setNewpost(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicNumber">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter rate"
                onChange={(e) => setNewrat(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{Add(newtit,newdes,newpost,newrat);handleClose()}}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  export default Example;