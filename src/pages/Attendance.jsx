import React from "react";
import {Header, StudentHeader} from "../components"
import {SummaryAttendanceDataCard, AttendanceRecordTable} from "../components";

const Attendance = () => (
<div className=" bg-slate-50 mx-6"> 
   <Header pageTitle={"Attendance"}/>
   <div>
      <StudentHeader/>
      <SummaryAttendanceDataCard />
      
      <div>
         <h2>Attendance Record May 2025</h2>
         <AttendanceRecordTable/>


      </div>



   </div>
   
</div>
);
  
 

export default Attendance;
