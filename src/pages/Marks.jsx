import React from "react";
import { MarksTable, SummaryCard, Header, FaDownload, StudentHeader } from "../components";
import { pageTitle } from "../constants/Marks";
import Button from "../components/Button";


const Marks = () => (
  <div className="min-h-screen bg-gray-50">
    <Header pageTitle={pageTitle} />
    <div className="flex flex-col lg:flex-row gap-5 p-6">
      <div className="flex-1 bg-white border border-gray-200 rounded-lg p-4">
       <StudentHeader className={"px-4"}/>
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