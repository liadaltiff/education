import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import HomePage from "./pages/HomePage/HomePage";

export default function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}
