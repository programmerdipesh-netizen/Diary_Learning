import React from "react";
import { marks } from "../constants/Marks";

const MarksTable = () => {
  return (
    <table className="w-full border-collapse text-left text-[15px] text-gray-800">
      <thead>
        <tr className="bg-[#1e3a52] text-white">
          <th className="py-3 px-2 font-medium uppercase">Subject</th>
          <th className="py-3 px-2 font-medium text-center">Term 1</th>
          <th className="py-3 px-2 font-medium text-center">Term 2</th>
          <th className="py-3 px-2 font-medium text-center uppercase">Mid</th>
          <th className="py-3 px-2 font-medium text-center uppercase">Final</th>
          <th className="py-3 px-2 font-medium text-center uppercase">Grade</th>
        </tr>
      </thead>
      <tbody>
        {marks.map((row) => {
          return (
            <tr
              key={row.Subject}
              className="border-b border-gray-300 hover:bg-gray-50"
            >
              <td className="py-3 px-2">{row.Subject}</td>
              <td className="py-3 px-2 text-center">{row.term1}</td>
              <td className="py-3 px-2 text-center">{row.term2}</td>
              <td className="py-3 px-2 text-center">{row.mid}</td>
              <td className="py-3 px-2 text-center">{row.final}</td>
              <td className="py-3 px-2 text-center">
                <span className="inline-block min-w-7 px-1.5 py-1 rounded bg-blue-100 text-blue-700 text-sm font-medium">
                  {row.grade}
                </span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MarksTable;