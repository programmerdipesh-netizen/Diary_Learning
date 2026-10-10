import React from "react";

const Summarycard = () => {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg p-4">
      <h1 className="text-lg font-semibold text-[#1e3a52] pb-2 mb-4 border-b border-gray-300">
        Performance summary
      </h1>
      <dl className="flex flex-col gap-4">
        <div className="bg-[#1e3a52] text-white rounded-lg py-3 text-center">
          <dt className="text-xs uppercase tracking-wide">Overall Average</dt>
          <dd className="text-3xl font-bold mt-1">84.75%</dd>
        </div>
        <div className="bg-[#449dad] text-white rounded-lg py-3 text-center">
          <dt className="text-xs uppercase tracking-wide">
            Overall Attendance
          </dt>
          <dd className="text-3xl font-bold mt-1">92%</dd>
        </div>
        <div className="bg-gray-100 border-l-2 border-blue-300 rounded-lg py-3 text-center">
          <dt className="text-xs uppercase tracking-wide text-gray-500">
            Top Subject
          </dt>
          <dd className="text-lg font-bold uppercase text-green-700">
            Science
          </dd>
        </div>
        <div className="bg-gray-100 border-l-2 border-blue-300 rounded-lg py-3 text-center">
          <dt className="text-xs uppercase tracking-wide text-gray-500">
            Need Attention
          </dt>
          <dd className="text-lg font-bold uppercase text-amber-600">
            Social Studies
          </dd>
        </div>

        <div className="bg-cyan-100 border-l-2 border-blue-300 rounded-lg py-3 px-3 text-center">
          <dt className="text-sm font-semibold text-[#1e3a52]">Remarks</dt>
          <dd className="text-xs text-gray-600 mt-1">
            Good Progress! Encourage regular reading for social studies
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default Summarycard;