import { BookText, MousePointerClick, School } from "lucide-react";
import { Link, Outlet } from "react-router-dom";

function SelectUser() {
  return (
    <div className="sm:container md:container lg:container">
      <div className="w-2/4 h-screen flex flex-col justify-center">
        <>
          <h1 className="text-2xl font-bold">
            <MousePointerClick />
            Select who you are!
          </h1>
          <p className="my-3 italic">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            nulla. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ipsam perspiciatis quidem suscipit harum corporis volupttem minima
            ipsum omnis illo animi.
          </p>
        </>

        <div className="flex items-center gap-2">
          <Link to="/user/auth" className="flex flex-col gap-1 h-full">
            <BookText />
            Student
          </Link>
          <Link to="/user/auth" className="flex flex-col gap-1 h-full">
            <School />
            Teacher
          </Link>
          {<Outlet />}
        </div>
      </div>
    </div>
  );
}

export default SelectUser;
