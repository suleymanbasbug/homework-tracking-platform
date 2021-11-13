import React from "react";
import { Col, Row } from "react-bootstrap";
import HomeworkList from "../components/HomeworkList";
import TeacherList from "../components/TeacherList";

export default function StudentDetail() {
  return (
    <Row className="mt-4">
      <Col xs={4}>
        <p style={{ textAlign: "center" }}>Teacher List</p>
        <TeacherList />
      </Col>
      <Col>
        <p style={{ textAlign: "center" }}>Homework List</p>
        <HomeworkList />
      </Col>
    </Row>
  );
}
