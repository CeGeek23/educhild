import React from "react";

const loading = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 lg:h-32 lg:w-32 border-b-2 border-white"></div>
      </div>
    </div>
  );
};

export default loading;
