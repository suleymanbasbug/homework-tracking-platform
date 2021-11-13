import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addHomeworkForClassService,
  addHomeworkforStudentService,
} from "../services/homework";
export default function AddHomeworkModal({ type, studentId }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const auth = useSelector((state) => state.auth);
  const students = useSelector((state) => state.students);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const addHomeworkForClass = () => {
    dispatch(
      addHomeworkForClassService(
        auth.user.id,
        students.studentList,
        title,
        description
      )
    );
    setTimeout(() => {
      setShow(false);
    }, 300);
  };
  const addHomeworkForStudent = () => {
    dispatch(
      addHomeworkforStudentService(auth.user.id, studentId, title, description)
    );
    setTimeout(() => {
      setShow(false);
    }, 300);
  };
  return (
    <>
      <Button variant="primary" className="btn-sm" onClick={handleShow}>
        Add Homework
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Homework</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                onChange={handleTitleChange}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                onChange={handleDescriptionChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {type === "class" ? (
            <Button variant="primary" onClick={addHomeworkForClass}>
              Add Homework
            </Button>
          ) : (
            <Button variant="primary" onClick={addHomeworkForStudent}>
              Add Homework
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
