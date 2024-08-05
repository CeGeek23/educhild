import React from "react";

const MainHero = () => {
  return (
    <div className="py-20" style={{ backgroundColor: "#FFF7F5" }}>
      <div className="flex justify-between items-center px-5 md:px-20">
        <div className="w-full lg:w-2/5">
          <h1 className="text-6xl font-bold">
            Let’s protect your child!
          </h1>
          <div className="bg-white shadow-sm p-5 mt-5 rounded-lg">
            <input
              type="text"
              className="bg-gray-200 text-gray-700 py-3 px-3 w-full rounded focus:outline-none"
              placeholder="Search for more functionnality"
            />
            <div className="flex my-4">
              <label htmlFor="" className="mr-5 text-gray-600">
                #security
              </label>
              <label htmlFor="" className="mr-5 text-gray-600">
                #monitoring
              </label>
              <label htmlFor="" className="mr-5 text-gray-600">
                #filtering
              </label>
              <label htmlFor="" className="mr-5 text-gray-600">
                #alerts
              </label>
              <label htmlFor="" className="mr-5 text-gray-600">
                #protection
              </label>
            </div>
          </div>
        </div>
        <div className="w-2/5 hidden lg:block">
          <img
            src="assets/image-header.png"
            alt="Child in the numeric world"
            className="block w-full right-0 object-cover"
            style={{ borderRadius: "0px 0px 0px 7rem" }}
          />

        </div>
      </div>
    </div>
  );
};

export default MainHero;
