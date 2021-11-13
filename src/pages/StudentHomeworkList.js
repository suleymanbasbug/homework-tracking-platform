import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getHomeworkByTeacherIdService } from "../services/homework";
import { useParams } from "react-router";
export default function StudentHomeworkList() {
  let { id, studentId } = useParams();
  const dispatch = useDispatch();
  const homeworks = useSelector((state) => state.homeworks);
  useEffect(() => {
    dispatch(getHomeworkByTeacherIdService(Number(id), Number(studentId)));
  }, []);
  return (
    <>
      {homeworks.getHomeworkTeacherId
        ? homeworks.getHomeworkTeacherId.map((homework) => (
            <Card className="mt-4">
              <Card.Header>{homework.title}</Card.Header>
              <Card.Body>
                <Card.Text>{homework.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                {homework.completedId?.some((x) => x == studentId) ? (
                  <small className="text-muted">Completed</small>
                ) : (
                  <small className="text-muted">Uncompleted</small>
                )}
              </Card.Footer>
            </Card>
          ))
        : null}
    </>
  );
}
