export const FullBlogSkeleton = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 px-4 sm:px-10 w-full max-w-screen-xl pt-12 gap-8">
        <div className="col-span-12 md:col-span-8">
          <div className="h-10 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 mb-4 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
        </div>

        <div className="col-span-12 md:col-span-4">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4 animate-pulse"></div>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <div>
              <div className="h-12 w-12 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
            <div>
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
