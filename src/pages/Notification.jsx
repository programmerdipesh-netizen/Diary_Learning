import React from "react";
import { NotificationData } from "../Data";
import {Header} from "../components";
import { FiMoreHorizontal} from "../components";


const Notification = () => {
  const pageTitle= "Notification";
  return (
    <div className="min-h-screen bg-slate-50 p-8">
    

       <Header pageTitle={pageTitle} />  

   
      <div className="flex flex-col gap-5 max-w-5xl">
        {NotificationData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-l-blue-500 border border-slate-100 relative transition-all hover:shadow-md"
          >
           
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-base font-bold text-slate-800">
                {item.title}
              </h3>
              <button 
                type="button" 
                className="text-slate-400 hover:text-slate-600 font-bold tracking-widest text-lg cursor-pointer"
              >
              <FiMoreHorizontal/>

              </button>
            </div>

          
            <div className="text-sm text-slate-600 space-y-2 leading-relaxed">
              <p>Dear Parent,</p>
              <p>{item.message}</p>
              <p className="pt-1">
                Thank you,<br />
                School Admin.
              </p>
            </div>

         
            <div className="text-right mt-2">
              <span className="text-xs text-slate-400">
                Sent on {item.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;