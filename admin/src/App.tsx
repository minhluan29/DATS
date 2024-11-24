import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/dashboard";

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
