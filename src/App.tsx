import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router";

export default function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  );
}
