import React from "react";
import {Header, StudentHeader} from "../components"
import {SummaryAttendanceDataCard} from "../components";

const Attendance = () => (
 <div className=" bg-slate-50 mx-6"> 
  <Header pageTitle={"Attendance"}/>
  <div>
     <StudentHeader/>
     <SummaryAttendanceDataCard />
     
     <div>
      <div> </div>
      <div>

      </div>
     </div>



  </div>
 
 </div>
);
  
 

export default Attendance;
