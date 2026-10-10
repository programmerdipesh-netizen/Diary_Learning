import React from "react";
import {Header, StudentHeader} from "../components"
import {SummaryAttendanceDataCard} from "../components";

const Attendance = () => (
 <div> 
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
