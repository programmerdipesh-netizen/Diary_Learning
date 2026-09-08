import React from "react";
import { Link, Outlet, NavLink } from "react-router";
const Sidebar = () => {
  return (
    <div className="w-52 h-screen bg-[#1F3B56] text-white fixed left-0 top-0">
      <div>
        <h1>Dashboard</h1>
        <nav className="flex flex-col gap-12 text-center">
          <Link to="/" className="Block">
            Dashboard
          </Link>
          <Link
            to="attendance"
            className="hover hover:bg-[#2F5FA7] hover:text-[20px] p-3"
          >
            Attandance
          </Link>
          <Link to="homework" className="Block">
            Homework
          </Link>
          <Link to="lesson" className="Block">
            Lesson
          </Link>
          <Link to="message" className="Block">
            Message
          </Link>
          <Link to="marks" className="Block">
            Marks
          </Link>
          <Link to="notification" className="Block">
            Notification
          </Link>
          <Link to="settings" className="Block">
            Settings
          </Link>
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;
