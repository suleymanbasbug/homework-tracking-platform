import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router";

export default function RequireAuth({ children }) {
  const auth = useSelector((state) => state.auth);
  let { id } = useParams();
  if (!auth.auth || auth.user?.id !== Number(id)) {
    return <Navigate to="/" />;
  }
  return children;
}
