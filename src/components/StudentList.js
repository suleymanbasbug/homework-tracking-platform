import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddHomeworkModal from "./AddHomeworkModal";

export default function StudentList() {
  const students = useSelector((state) => state.students);

  return (
    <ListGroup as="ol">
      {students.studentList?.map((student) => (
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start mt-2"
          key={student.id}
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">
              <Link
                to={`student/${student.id}`}
              >{`${student.name} ${student.lastName}`}</Link>
            </div>
          </div>
          <AddHomeworkModal type={"student"} studentId={student.id} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
