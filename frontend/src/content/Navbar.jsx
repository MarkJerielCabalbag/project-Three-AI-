import { BrainCircuit, GraduationCap, House, SchoolIcon } from "lucide-react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="p-10">
      <div className="flex gap-1 items-center italic font-bold">
        <BrainCircuit size={30} />
        eduGemini
      </div>
      <div className="border-b-2 border-black my-5"></div>
      <ul>
        <li className="flex gap-2 my-3 items-center text-xs font-bold">
          <Link to={"/home"}>
            <House /> Home
          </Link>
        </li>
        <li className="flex gap-2 my-3 items-center text-xs font-bold">
          <Link to={"/class"}>
            <GraduationCap /> Class
          </Link>
        </li>
        <li className="flex gap-2 my-3 items-center text-xs font-bold">
          <Link to={"/enrolled"}>
            <SchoolIcon /> Enrolled
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
