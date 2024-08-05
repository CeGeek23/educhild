'use client'
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Bottombar = () => {
    const router = useRouter();
  
    return (
      <div className="fixed bottom-0 left-0 w-full z-30 lg:hidden">
        <div className="flex justify-center bg-white border-t border-gray-300">
          <Link href="/">
              className={`py-2 w-3/12 flex flex-col justify-center items-center ${
                router.pathname == "/" ? "text-red-500" : "text-gray-500"
              }`}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-current h-8 w-8 inline-block"
              >
                <g data-name="Layer 2">
                  <g data-name="home">
                    <rect width="24" height="24" opacity="0" />
                    <path d="M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2h14.22A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44zM10 20v-6h4v6zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15 7 7.19z" />
                  </g>
                </g>
              </svg>
              <label htmlFor="" className="inline-block text-xs pt-1">
                Home
              </label>
          </Link>
          <Link href="/login">
              className={`py-2 w-3/12 flex flex-col justify-center items-center ${
                router.pathname == "/login" ? "text-red-500" : "text-gray-500"
              }`}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8 h-8 fill-current inline-block"
              >
                <g data-name="Layer 2">
                  <g data-name="person">
                    <rect width="24" height="24" opacity="0" />
                    <path d="M12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
                    <path d="M12 13a7 7 0 0 0-7 7 1 1 0 0 0 2 0 5 5 0 0 1 10 0 1 1 0 0 0 2 0 7 7 0 0 0-7-7z" />
                  </g>
                </g>
              </svg>
              <label htmlFor="" className="inline-block text-xs pt-1">
                Masuk
              </label>
          </Link>
        </div>
      </div>
    );
};

export default Bottombar;
  