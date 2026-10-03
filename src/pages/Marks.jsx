import React from "react";
import { MarksTable, SummaryCard,Header } from "../components";
import { pageTitle } from "../constants/Marks";

const Marks = () => 
  <div>
     <Header pageTitle={pageTitle} />  
     <div>
      <div>
        <div> <h1>Student Name</h1> <p>Grade 9</p></div>
        <MarksTable />
      </div>
      
     <SummaryCard />
     </div>
  </div>;


export default Marks;
