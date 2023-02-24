import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Add from "./pages/AddUser.js";
import EditUser from "./pages/EditUser.js";
import PageNotFound from "./pages/PageNotFound.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />{" "}
        <Route path="/dashboard" element={<Dashboard />} />{" "}
        <Route path="/dashboard/add" element={<Add />} />{" "}
        <Route path="/dashboard/edit/:id" element={<EditUser />} />{" "}
        <Route path="/*" element={<PageNotFound />} />{" "}
      </Routes>{" "}
    </BrowserRouter>
  );
}
