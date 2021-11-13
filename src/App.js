import { Container } from "react-bootstrap";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentLogin from "./pages/StudentLogin";
import Main from "./pages/Main";
import { Route, Routes } from "react-router";
import TeacherLogin from "./pages/TeacherLogin";
import StudentDetail from "./pages/StudentDetail";
import RequireAuth from "./components/RequireAuth";
import TeacherDetail from "./pages/TeacherDetail";
import StudentHomeworkList from "./pages/StudentHomeworkList";
import AdminLogin from "./pages/AdminLogin";
import AdminDetail from "./pages/AdminDetail";
function App() {
  return (
    <>
      <Container fluid>
        <Header />
      </Container>
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="student/login" element={<StudentLogin />} />
          <Route path="teacher/login" element={<TeacherLogin />} />
          <Route path="admin/login" element={<AdminLogin />} />

          <Route
            path="student/:id"
            element={
              <RequireAuth>
                <StudentDetail />
              </RequireAuth>
            }
          />
          <Route
            path="teacher/:id"
            element={
              <RequireAuth>
                <TeacherDetail />
              </RequireAuth>
            }
          />
          <Route
            path="admin/:id"
            element={
              <RequireAuth>
                <AdminDetail />
              </RequireAuth>
            }
          />
          <Route
            path="teacher/:id/student/:studentId"
            element={
              <RequireAuth>
                <StudentHomeworkList />
              </RequireAuth>
            }
          />
        </Routes>
      </Container>
    </>
  );
}

export default App;
