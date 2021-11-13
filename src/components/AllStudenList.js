import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudentsService } from "../services/student";
export default function AllStudenList() {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  useEffect(() => {
    dispatch(getAllStudentsService());
  }, []);
  return (
    <ListGroup variant="flush">
      {students.studentList
        ? students.studentList.map((student) => (
            <ListGroup.Item>{`Name: ${student.name} | Lastname: ${student.lastName}  | Email: ${student.email} `}</ListGroup.Item>
          ))
        : null}
    </ListGroup>
  );
}
