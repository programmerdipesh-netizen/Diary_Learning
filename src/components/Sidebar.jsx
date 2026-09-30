import React from "react";
import { Link, Outlet, NavLink } from "react-router";
const Sidebar = () => {
  return (
    <div className="w-52 h-screen bg-[#1F3B56] text-white fixed left-0 top-0">
      <div>
        <h1 className="font-bold text-2xl text-center mb-15 mt-8">Dashboard</h1>
        <nav className="flex flex-col gap-12 text-center">
          <Link to="/" className="sidebar-fonts">
            Dashboard
          </Link>
          <Link to="attendance" className="sidebar-fonts">
            Attandance
          </Link>
          <Link to="homework" className="sidebar-fonts">
            Homework
          </Link>
          <Link to="lesson" className="sidebar-fonts">
            Lesson
          </Link>
          <Link to="message" className="sidebar-fonts">
            Message
          </Link>
          <Link to="marks" className="sidebar-fonts">
            Marks
          </Link>
          <Link to="notification" className="sidebar-fonts">
            Notification
          </Link>
          <Link to="settings" className="sidebar-fonts">
            Settings
          </Link>
        </nav>
      </div>
    </div>
  );
};
export default Sidebar;
