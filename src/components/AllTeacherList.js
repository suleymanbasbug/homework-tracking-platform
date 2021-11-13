import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllTeachersService } from "../services/teacher";
export default function AllTeacherList() {
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.teachers);
  console.log(teachers);
  useEffect(() => {
    dispatch(getAllTeachersService());
  }, []);
  return (
    <ListGroup variant="flush">
      {teachers.allTeachers
        ? teachers.allTeachers.map((teacher) => (
            <ListGroup.Item>{`Name: ${teacher.name} | Subject: ${teacher.subject} | Email: ${teacher.email}`}</ListGroup.Item>
          ))
        : null}
    </ListGroup>
  );
}
