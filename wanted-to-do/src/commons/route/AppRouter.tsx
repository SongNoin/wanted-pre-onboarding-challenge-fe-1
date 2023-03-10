import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/Home";
import LoginPage from "../../pages/Login";
import SignUpPage from "../../pages/SignUp";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </Router>
  );
}
