import React from 'react'
import { studentInfo } from "../constants";

const StudentHeader = () => {
  return (
    <div className="flex items-center gap-4 bg-[#449dad] text-white rounded-lg px-4 py-3 mx-3 mb-5">
      
          <h1 className="text-sm font-medium">{studentInfo.name}</h1>
          <p className="text-sm bg-white/20 rounded-md px-2 py-1">{studentInfo.grade}</p>
        </div>
  )
}

export default StudentHeader