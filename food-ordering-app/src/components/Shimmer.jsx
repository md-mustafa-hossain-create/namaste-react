const Shimmer = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16">
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 w-full mb-8">
        <div className="flex gap-3 w-full sm:w-auto">
          <div className="w-full sm:w-96 h-12 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
        <div className="w-full sm:w-48 h-10 bg-gray-200 rounded-full animate-pulse"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 justify-items-center sm:justify-items-start">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="w-full flex flex-col gap-2">
            <div className="w-full h-48 sm:h-56 bg-gray-200 rounded-2xl animate-pulse"></div>
            <div className="px-1 flex flex-col gap-2">
              <div className="w-3/4 h-5 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-1/2 h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="w-full h-4 bg-gray-200 rounded animate-pulse mt-2"></div>
              <div className="w-1/3 h-4 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;
