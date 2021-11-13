import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import UploadModal from "./UploadModal";

export default function HomeworkList() {
  const homeworks = useSelector((state) => state.homeworks);
  const auth = useSelector((state) => state.auth);
  return (
    <>
      {homeworks.getHomeworkTeacherId
        ? homeworks.getHomeworkTeacherId.map((homework) => (
            <Card key={homework.id} className="mt-3">
              <Card.Header>{homework.title}</Card.Header>
              <Card.Body>{homework.description}</Card.Body>
              <Card.Footer>
                {homework.completedId?.some((x) => x == auth.user?.id) ? (
                  <p>You have done the necessary upload for the assignment. </p>
                ) : (
                  <UploadModal userId={auth.user?.id} homework={homework} />
                )}
              </Card.Footer>
            </Card>
          ))
        : null}
    </>
  );
}
