import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { uploadHomeworkService } from "../services/homework";
export default function UploadModal({ userId, homework }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const uploadDocs = () => {
    dispatch(uploadHomeworkService(userId, homework));
    setTimeout(() => {
      setShow(false);
    }, 300);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Upload Docs
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Docs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.File id="formControl" label="Upload Docs" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={uploadDocs}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
