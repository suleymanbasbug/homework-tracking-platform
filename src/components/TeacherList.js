import React, { useEffect } from "react";
import { Badge, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getHomeworkByTeacherIdService } from "../services/homework";
import { getTeachersByClassIdService } from "../services/teacher";
export default function TeacherList() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const teachers = useSelector((state) => state.teachers);
  useEffect(() => {
    dispatch(getTeachersByClassIdService(auth.user?.id));
  }, []);

  const getHomeworks = (teacherId) => {
    dispatch(getHomeworkByTeacherIdService(teacherId, auth.user?.id));
  };
  return (
    <ListGroup as="ol">
      {teachers.teachersByClassId.map((teacher) => (
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start mt-2"
          key={teacher.id}
          onClick={() => getHomeworks(teacher.id)}
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{teacher.name}</div>
            {teacher.subject}
          </div>
          <Badge variant="primary" pill>
            14
          </Badge>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
