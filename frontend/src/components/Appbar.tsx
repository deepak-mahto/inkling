import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";

export const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-4 sm:px-10 py-4">
      <Link
        to={"/blogs"}
        className="flex items-center cursor-pointer text-xl font-bold"
      >
        Medium
      </Link>
      <div className="flex items-center gap-4">
        <Link to={`/publish`}>
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
          >
            New
          </button>
        </Link>
        <Avatar size={"big"} name="Deepak" />
      </div>
    </div>
  );
};
