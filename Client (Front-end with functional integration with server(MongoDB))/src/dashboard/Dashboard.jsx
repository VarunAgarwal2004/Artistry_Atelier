import React from "react";
import { HiOutlineLifebuoy } from "react-icons/hi2";

const Dashboard = () => {
  return (
    <div className=" ml-4 w-[80%] h-full flex flex-col items-center justify-center bg-[#15121F] text-white mt-[10%] rounded-lg">
      <div className="flex flex-col items-center justify-between h-full max-w-screen-xl mx-auto">
        <div className="flex items-center">
          <HiOutlineLifebuoy className="text-9xl text-red-700 font-bold -mb-4" />
          <div className="text-9xl font-extrabold text-red-700">Artistry Atelier</div>
        </div>
        <div className="text-3xl mt-16 mb-8 text-center flex flex-col items-center gap-4">
          <div className="text-5xl font-bold">Welcome!</div>
          <div>Buy, Sell, and Manage With Ease</div>
        </div>
        <div className="flex justify-around gap-8 mb-5">
          <div className="text-center ">
            <div className="text-5xl font-bold text-red-700">BUY</div>
            <div className="text-xl ">Find your perfect creation</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-red-700">SELL</div>
            <div className="text-xl">List your masterpieces for sale</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-red-700">MANAGE</div>
            <div className="text-xl">Manage your creations effortlessly</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
