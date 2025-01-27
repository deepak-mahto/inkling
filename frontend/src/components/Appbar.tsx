import { useState } from "react";
import { Avatar } from "./BlogCard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Appbar = ({ name }: { name: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsMenuOpen(false);
    navigate("/signin");
  };

  return (
    <div className="border-b flex justify-between px-4 sm:px-10 py-4 relative">
      <Link
        to={`/blogs?name=${name}`}
        className="flex items-center cursor-pointer text-xl font-bold"
      >
        Inkling
      </Link>

      <div className="flex items-center gap-4">
        <Link to={`/publish?name=${name}`}>
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center"
          >
            New
          </button>
        </Link>

        <div className="relative">
          <button onClick={toggleMenu} className="focus:outline-none">
            <Avatar size={"big"} name={name} />
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
