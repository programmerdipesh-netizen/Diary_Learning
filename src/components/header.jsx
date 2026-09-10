import React from "react";
import { FiSearch,FiBell} from "react-icons/fi";

const Header = ({ pageTitle = pageTitle }) => {
  return (
    <div className="flex items-center justify-between w-full py-4 px-2 mb-6">
   
      <h1 className="text-2xl font-bold text-slate-800">{pageTitle}</h1>

   
      <div className="flex items-center gap-4">
      
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-400">
            <FiSearch className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-64 py-1.5 pl-9 pr-4 text-sm text-slate-700 bg-slate-50 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
        </div>

      
        <button
          type="button"
          className="p-2 text-slate-600 hover:text-slate-800 rounded-full hover:bg-slate-100 transition-colors"
        >
          <FiBell/>
        </button>

        <div className="w-8 h-8 rounded-full bg-slate-800 cursor-pointer flex items-center justify-center text-white text-xs font-semibold">
          {/* Avatar content */}
        </div>
      </div>
    </div>
  );
};

export default Header;