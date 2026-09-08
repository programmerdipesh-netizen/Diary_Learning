import React from "react";
import { Routes, Route } from "react-router";

import MainLayout from "./layout/MainLayout";

import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Homework from "./pages/Homework";
import Lesson from "./pages/Lesson";
import Message from "./pages/Message";
import Marks from "./pages/Marks";
import Notification from "./pages/Notification";
import Settings from "./pages/Settings";

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/homework" element={<Homework />} />
        <Route path="/lesson" element={<Lesson />} />
        <Route path="/message" element={<Message />} />
        <Route path="/marks" element={<Marks />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default App;
