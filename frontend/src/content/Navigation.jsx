import { BrainCircuit, GraduationCap, House, SchoolIcon } from "lucide-react";
import React from "react";

function Navigation() {
  return (
    <>
      <div className="p-10">
        <div className="flex gap-1 items-center italic font-bold">
          <BrainCircuit size={30} />
          eduGemini
        </div>
        <div className="border-b-2 border-black my-5"></div>
        <ul>
          <li className="flex gap-2 my-3 items-center text-xs font-bold">
            <House /> Home
          </li>
          <li className="flex gap-2 my-3 items-center text-xs font-bold">
            <GraduationCap /> Class
          </li>
          <li className="flex gap-2 my-3 items-center text-xs font-bold">
            <SchoolIcon /> Enrolled
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
