import { Code2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex flex-col items-center justify-center px-4">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-8">
          <Code2 size={48} className="text-gray-800" />
        </div>

        <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-6">
          Code & Conquer
        </h1>

        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Write, share, and explore technical blogs. Dive into the world of
          code, tutorials, and cutting-edge technologies.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => navigate("/signup")}
          className="w-full text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-3.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 button-hover-effect"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};
