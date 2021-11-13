import React from "react";
import { Col, Row } from "react-bootstrap";
import ClassList from "../components/ClassList";
import StudentList from "../components/StudentList";

export default function TeacherDetail() {
  return (
    <Row className="mt-4">
      <Col xs={4}>
        <p style={{ textAlign: "center" }}>Class List</p>
        <ClassList />
      </Col>
      <Col>
        <p style={{ textAlign: "center" }}>Student List</p>
        <StudentList />
      </Col>
    </Row>
  );
}
