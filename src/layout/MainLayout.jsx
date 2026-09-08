import React from "react";
import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <div className="h-screen overflow-hidden bg-[#F5F5F5]">
      <Sidebar />

      {/* Right Side */}
      <main className="ml-52 h-screen overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
