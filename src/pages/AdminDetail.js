import React, { useState } from "react";
import { Card, Nav } from "react-bootstrap";
import AllHomeworkList from "../components/AllHomeworkList";
import AllStudenList from "../components/AllStudenList";
import AllTeacherList from "../components/AllTeacherList";

export default function AdminDetail() {
  const [selected, setSelected] = useState();
  return (
    <Card className="mt-4">
      <Card.Header>
        <Nav
          variant="tabs"
          onSelect={(selectedKey) => setSelected(selectedKey)}
        >
          <Nav.Item>
            <Nav.Link eventKey="teacher">Teacher List</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="student">Student List</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="homework">Homework List</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>

      <Card.Body>
        {selected === "teacher" && <AllTeacherList />}
        {selected === "student" && <AllStudenList />}
        {selected === "homework" && <AllHomeworkList />}
      </Card.Body>
    </Card>
  );
}
