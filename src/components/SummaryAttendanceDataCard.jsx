import React from 'react'
import {summaryAttendanceData} from "../constants";

const SummaryAttendanceDataCard = () => {
  return (
    <div className="w-full p-5">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">

        
        <li className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-3xl font-bold mt-2">
            {summaryAttendanceData.DaysPresent}
          </p>
          <p className="text-sm font-medium text-gray-500">Days Present</p>
        </li>

        <li className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-3xl font-bold mt-2">
            {summaryAttendanceData.Leave}
          </p>
          <p className="text-sm font-medium text-gray-500">Leave</p>
        </li>

        <li className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-3xl font-bold mt-2">
            {summaryAttendanceData.DaysAbsent}
          </p>
          <p className="text-sm font-medium">Days Absent</p>
        </li>

        <li className="bg-white  rounded-xl p-6 shadow-sm">
          <p className="text-3xl font-bold mt-2">
            {summaryAttendanceData.DaysLate}
          </p>
          <p className="text-sm font-medium text-gray-500">Days Late</p>
        </li>

        <li className="bg-white rounded-xl p-6 shadow-sm">
          <p className="text-3xl font-bold mt-2">
            {summaryAttendanceData.AttendanceRate}%
          </p>
          <p className="text-sm font-medium text-gray-500">Attendance Rate</p>
        </li>
      </ul>
    </div>
  );
};

export default SummaryAttendanceDataCard;