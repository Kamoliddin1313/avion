import React from "react";
import { Karzinka, SearchIcon, UserImg } from "../assets/icons/icons";

const Header = () => {
  return (
    <div className="lg:px-[60px] sm:px-[30px]">
      <div className="fonts-satoshi flex w-full items-center justify-between py-5">
        <a href="#">
          <SearchIcon />
        </a>
        <h1>Avion</h1>
        <div className="flex items-center gap-[20px]">
          <a href="#">
            <Karzinka />
          </a>
          <a href="#">
            <UserImg/>
          </a>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gray-600"></div>

      <div className="w-full py-[20px]">
        <ul className=" fonts-satoshi sm:text-[15px] sm:gap-5 flex items-center justify-center md:gap-[44px] lg:text-base md:text-sm font-normal not-italic text-[#726E8D]">
          <li className="hover:text-yellow-700">
            <a href="#">Plant pots</a>
          </li>
          <li className="hover:text-yellow-700">
            <a href="#">Ceramics</a>
          </li>
          <li className="hover:text-yellow-700">
            <a href="#">Tables</a>
          </li>
          <li className="hover:text-yellow-700">
            <a href="#">Chairs</a>
          </li>
          <li className="hover:text-yellow-700">
            <a href="#">Crockery</a>
          </li>
          <li className="hover:text-yellow-700">
            <a href="#">Tableware</a>
          </li>
          <li className="hover:text-yellow-700">
            <a href="#">Cutlery</a>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Header;
