import React from "react";
import { Button, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../redux/actions/Auth";
export default function Header() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const handleSignOut = () => {
    dispatch(signOut());
  };

  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand href="/">Homework Tracking Platform</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {auth.auth ? (
            <>
              <Navbar.Text>
                Signed in as: <a>{auth.user.name}</a>
              </Navbar.Text>
              <Button className="btn btn-sm ml-2" onClick={handleSignOut}>
                Logout
              </Button>
            </>
          ) : null}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
