import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Pinterest,
  Skype,
  Twitter,
} from "../assets/icons/icons";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="fonts-satoshi bg-[#2A254B]  sm:px-[60px] sm:py-[30px] md:p-[30px] lg:mt-0 md:mt-7 xl:px-[108px] lg:px-[60px] pb-[50px] xl:pt-[84px] lg:pt-[50px] font-normal not-italic text-[#fff]">
      <div className="flex justify-between sm:gap-[60px] sm:flex-col md:flex-row lg:gap-24 md:gap-10 pb-10 xl:text-[14px] md:text-[14px]">
        
        <div className="flex justify-between xl:flex-1 md:w-3/5">
          <ul className="leading-8">

            <li className="fonts-clash-display lg:text-[18px] md:text-[16px] sm:text-[20px]">
              <a href="#">Menu</a>
            </li>

            <li>
              <a href="#">New arrivals</a>
            </li>

            <li>
              <a href="#">Best sellers</a>
            </li>

            <li>
              <a href="#">Recently viewed</a>
            </li>

            <li>
              <a href="#">Popular this week</a>
            </li>

            <li>
              <a href="#">All products</a>
            </li>

          </ul>

          <ul className="leading-8">
            <li className="fonts-clash-display lg:text-[18px] md:text-[16px] sm:text-[20px]">
              <a href="#">Categories</a>
            </li>
            <li>
              <a href="#">Crockery</a>
            </li>
            <li>
              <a href="#">Furniture</a>
            </li>
            <li>
              <a href="#">Homeware</a>
            </li>
            <li>
              <a href="#">Plant pots</a>
            </li>
            <li>
              <a href="#">Chairs</a>
            </li>
            <li>
              <a href="#">Crockery</a>
            </li>
          </ul>

          <ul className="leading-8">
            <li className="fonts-clash-display lg:text-[18px] md:text-[16px] sm:text-[20px]">
              <a href="#">Our company</a>
            </li>
            <li>
              <Link to={"/aboutus"}>About us</Link>
            </li>
            <li>
              <a href="#">Vacancies</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Returns policy</a>
            </li>
          </ul>
        </div>

        <div className="xl:flex-1 md:w-2/5">
          <ul className="leading-8">
            <li className="fonts-clash-display lg:text-[20px] md:text-[16px]">
              <a href="#">Join our mailing list</a>
            </li>
          </ul>

          <form className="mt-4 flex">
            <input
              type="email"
              className="2xl:w-4/5 lg:w-2/3 bg-[#475569] xl:p-[17px] lg:py-[10px] sm:px-[20px] sm:py-2 md:w-3/5"
              placeholder="your@email.com"
            />
            <button className="fonts-clash-display bg-[#fff] lg:w-1/3 xl:px-8 lg:px-5 xl:text-[16px] md:w-2/5 sm:px-5 text-[#2A254B]">
              Sign up
            </button>
          </form>
        </div>
      </div>

      <div className="h-[1px] w-full bg-[#4E4D93]"></div>

      <div className="mt-[20px] flex justify-between">
        <p className="xl:text-[18px]">Copyright 2022 Avion LTD</p>
        <div className="flex gap-[20px]">
          <a href="#">
            <Linkedin />
          </a>
          <a href="#">
            <Facebook />
          </a>
          <a href="#">
            <Instagram />
          </a>
          <a href="#">
            <Skype />
          </a>
          <a href="#">
            <Twitter />
          </a>
          <a href="#">
            <Pinterest />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
