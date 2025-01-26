import { Circle } from "./BlogCard";

export const BlogSkeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="p-4 border-b border-slate-200 pb-4 max-w-screen-md cursor-pointer">
        <div className="flex items-center">
          <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
          <div className="h-4 bg-gray-200 rounded-full w-24 ml-2"></div>
          <div className="pl-2">
            <Circle />
          </div>
          <div className="h-4 bg-gray-200 rounded-full w-24 ml-2"></div>
        </div>
        <div className="text-xl font-semibold pt-2">
          <div className="h-6 bg-gray-200 rounded-full w-3/4"></div>
        </div>
        <div className="text-md font-thin pt-2">
          <div className="h-4 bg-gray-200 rounded-full w-full"></div>
        </div>
        <div className="text-slate-500 text-sm font-thin pt-4">
          <div className="h-4 bg-gray-200 rounded-full w-16"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
