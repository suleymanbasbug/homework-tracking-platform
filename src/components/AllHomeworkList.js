import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllHomeworksService } from "../services/homework";
export default function AllHomeworkList() {
  const dispatch = useDispatch();
  const homeworks = useSelector((state) => state.homeworks);
  useEffect(() => {
    dispatch(getAllHomeworksService());
  }, []);
  return (
    <ListGroup variant="flush">
      {homeworks.homeworkList
        ? homeworks.homeworkList.map((homework) => (
            <ListGroup.Item>{`Title: ${homework.title} | Description: ${homework.description}    `}</ListGroup.Item>
          ))
        : null}
    </ListGroup>
  );
}
