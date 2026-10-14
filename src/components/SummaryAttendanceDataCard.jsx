import React from 'react'
import {summaryAttendanceData} from "../constants";

const SummaryAttendanceDataCard = () => {
  return (
    <div className="w-full p-5">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">

        {
          summaryAttendanceData.map((card)=>
          (  
            <li key={card.label} className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-3xl font-bold mt-2">
              {card.value}
            </p>
            <p className="text-sm font-medium text-gray-500">{card.label}</p>
          </li>
     
          ))
        }   
        
      </ul>
    </div>
  );
};

export default SummaryAttendanceDataCard;