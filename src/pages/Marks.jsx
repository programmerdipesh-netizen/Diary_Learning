import React from "react";
import { MarksTable, SummaryCard, Header,FaDownload } from "../components";
import { pageTitle } from "../constants/Marks";
import Button from "../components/Button";
import { studentInfo } from "../constants";

const Marks = () => (
  <div className="min-h-screen bg-gray-50">
    <Header pageTitle={pageTitle} />
    <div className="flex flex-col lg:flex-row gap-5 p-6">
      <div className="flex-1 bg-white border border-gray-200 rounded-lg p-4">
        <div className="flex items-center gap-4 bg-[#449dad] text-white rounded-lg px-4 py-3 mb-5">
      
          <h1 className="text-sm font-medium">{studentInfo.name}</h1>
          <p className="text-sm bg-white/20 rounded-md px-2 py-1">{studentInfo.grade}</p>
        </div>
        <MarksTable />
        <div className="mt-5 flex gap-3">
          <Button
            text="Download PDF "
            bgColor="bg-[#3b5ba9]"
            textColor="text-white"
            borderColor="border-[#3b5ba9]"
          />
          <Button text="Print" />
        </div>
      </div>

      <div className="w-full lg:w-80">
        <SummaryCard />
      </div>
    </div>
  </div>
);

export default Marks;