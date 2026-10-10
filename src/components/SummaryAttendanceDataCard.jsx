import React from 'react'
import {summaryAttendanceData} from "../constants";

const SummaryAttendanceDataCard = () => {
  return (
    <div>
        <ul>
            <li>{summaryAttendanceData.DaysPresent}</li>
            <li>{summaryAttendanceData.Leave}</li>
            <li>{summaryAttendanceData.DaysAbsent}</li>
            <li>{summaryAttendanceData.DaysLate}</li>
            <li>{summaryAttendanceData.AttendanceRate}%</li>
        </ul>
    </div>
  )
}

export default SummaryAttendanceDataCard