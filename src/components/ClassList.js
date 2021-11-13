import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getClassByTeacherIdService } from "../services/class";
import { getStudentByClassIdService } from "../services/student";
import AddHomeworkModal from "./AddHomeworkModal";
export default function ClassList() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const classes = useSelector((state) => state.classes);

  useEffect(() => {
    dispatch(getClassByTeacherIdService(auth.user?.id));
  }, []);

  const getStudents = (id) => {
    dispatch(getStudentByClassIdService(id));
  };

  return (
    <ListGroup as="ol">
      {classes.classList?.map((singleClass) => (
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start mt-2 "
          key={singleClass.id}
          onClick={() => getStudents(singleClass.id)}
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{singleClass.name}</div>
          </div>
          <AddHomeworkModal type={"class"} />
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
