'use client'
import React, { useState, useEffect } from "react";

const Navbar = () => {
    const [pastSplash, setPastSplash] = useState("");
    const [showSearch, setShowSearch] = useState(false);
  
    function handleScroll() {
      if (window.scrollY > Math.round(window.innerHeight / 2)) {
        setPastSplash(
          "fixed shadow-sm transition-colors duration-500 ease-in-out bg-white z-40"
        );
        setShowSearch(true);
      } else {
        setPastSplash("bg-red-100");
        setShowSearch(false);
      }
    }
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      
      // Nettoyage de l'event listener lors du démontage du composant
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    return (
      <nav
        className={`p-4 px-5 md:px-20  flex items-center w-full ${pastSplash}`}
      >
        <h4 className="text-2xl font-semibold text-red-500">EduChild</h4>
  
        <div className="ml-auto hidden md:block">
          <div className="flex items-center justify-between">
            {showSearch && (
              <input
                type="text"
                className="px-5 py-2 rounded-full border  focus:outline-none text-sm w-full placeholder-gray-800"
                placeholder="Search Functionnality"
              />
            )}
            <a href="/login" className="mx-4">
              Login
            </a>
            <a
              href="/register"
              className="px-5 py-2 text-white rounded-full bg-red-500 mx-4 text-sm"
            >
              Register
            </a>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar;