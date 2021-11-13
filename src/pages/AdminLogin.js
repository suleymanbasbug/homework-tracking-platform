import React, { useEffect, useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { adminLoginService } from "../services/auth";

export default function AdminLogin() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [email, setEmail] = useState("sede@sede.com");
  const [password, setPassword] = useState("123");

  const [id, setId] = useState();
  const idRef = useRef(id);
  idRef.current = id;

  const loggingIn = () => {
    dispatch(adminLoginService({ email, password }));
    setTimeout(() => {
      navigate(`/admin/${idRef.current}`);
    }, 300);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    setId(auth.user?.id);
  }, [auth]);
  return (
    <>
      <Form className="mt-3">
        <p style={{ textAlign: "center" }}>Student Login Page</p>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={handleEmail}
            value={email}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={handlePassword}
            value={password}
          />
        </Form.Group>
        <Form.Group>
          <Button variant="primary" size="md" onClick={loggingIn}>
            Submit
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}
