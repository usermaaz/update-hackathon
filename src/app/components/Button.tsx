"use client"; 

import React from "react";

export default function Buttons  (){
  const notifyMe = () => {
    alert("You clicked Notify Me!");
  };

  const shopAirMax = () => {
    alert("You clicked Shop Air Max!");
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={notifyMe}
        className="bg-black text-white font-medium rounded-full px-6 py-2 hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-400"
      >
        Notify Me
      </button>
      <button
        onClick={shopAirMax}
        className="bg-black text-white font-medium rounded-full px-6 py-2 hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-400"
      >
        Shop Air Max
      </button>
    </div>
  );
};


