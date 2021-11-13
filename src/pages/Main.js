import React from "react";
import { Image, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import main from "../main.png";
export default function Main() {
  return (
    <div className="mt-4">
      <Image src={main} fluid />
      <Row className="justify-content-md-center mt-3">
        <Col sm="auto">
          <Link to="/teacher/login">
            <Button variant="primary">Teacher Sign In</Button>
          </Link>
        </Col>

        <Col sm="auto">
          <Link to="/student/login">
            <Button variant="primary">Student Sign In</Button>
          </Link>
        </Col>
        <Col sm="auto">
          <Link to="/admin/login">
            <Button variant="primary">Admin Sign In</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}
