import React from 'react'
import {attendanceRecords} from "../constants"
const AttendanceRecordTable = () => {
  return (
    <table>
        <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
              <th>Arrival Time</th>
              <th>Note</th>
            </tr>
    </thead>
          <tbody>
            { attendanceRecords.map((row)=>(
              <tr key= {row.id} > 
              <td className='py-3 px-2 text-center'>{row.date}</td>
              <td className='py-3 px-2 text-center'>{row.status}</td>
              <td className='py-3 px-2 text-center'>{row.arrivalTime}</td>
              <td className='py-3 px-2 text-center'>{row.note}</td>
            
              </tr>
            ))}
          </tbody>


   
     
    </table>
  );
}

export default AttendanceRecordTable;