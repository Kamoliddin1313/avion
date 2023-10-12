import React from "react";
import { CarImg, Checkmark, Purchase, Sprout } from "../assets/icons/icons";

const CardText = () => {
  return (
    <div>
      <div className="flex sm:mx-auto sm:mt-5 lg:px-12 sm:gap-6 md:gap-0 sm:w-3/4 md:p-8 sm:flex-col md:mt-0 md:w-full md:flex-row xl:px-[108px] xl:h-[500px] 2xl:px-15">
        
        <div className="relative box-border xl:h-full lg:p-12 md:p-10 sm:h-[400px] sm:p-12 bg-[#2A254B] not-italic text-[#fff] sm:text-center md:w-55% md:text-left lg:w-55% xl:w-3/5 xl:p-10 2xl:p-16">
          <p className="fonts-clash-display text-[32px] sm:text-[22px] xl:w-2/3 xl:text-[26px]">
            What makes our brand different
          </p>
          <button className="fonts-satoshi sm-text-[12px] border-solid bg-bg-color font-normal leading-[140%] sm:my-8 sm:px-[20px] sm:py-[8px] lg:py-[10px] lg:text-[14px] 2xl:px-[32px] 2xl:py-[14px] 2xl:text-[16px]">
            View collection
          </button>
          <p className="sm:text-[14px] xl:text-[14px] 2xl:text-[16px]">
            A new era in eco friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors and a beautiful way to
            display things digitally using modern web technologies.
          </p>
        </div>

        <div className="sm:h-[400px] md:w-45% xl:h-full lg:w-45% xl:w-2/5">
          <img src="src/assets/imgs/table.png" className="w-full sm:h-full" />
        </div>

      </div>

      <div className="py-16 font-normal not-italic text-[#2A254B] md:px-[30px] lg:px-[60px] xl:px-[108px]">
        <h1 className="fonts-clash-display text-center sm:text-[28px] 2xl:text-[24px]">
          What makes our brand different
        </h1>
        <div className="mt-10 flex sm:mx-auto sm:w-3/5 sm:flex-col sm:gap-[60px] md:w-full md:flex-row md:gap-6 lg:gap-[30px]">
          <div className="mx-auto sm:border-2 sm:border-solid sm:border-zinc-500 sm:p-[30px] sm:text-center md:border-none md:p-0 md:text-left">
            <CarImg className="sm:bg-red-800" />
            <p className="fonts-clash-display my-[12px] text-xl md:text-[16px]">
              Next day as standard
            </p>
            <p className="fonts-satoshi text-[16px] md:text-[13px]">
              Order before 3pm and get your order the next day as standard
            </p>
          </div>
          <div className="mx-auto sm:border-2 sm:border-solid sm:border-zinc-500 sm:p-[30px] sm:text-center md:border-none md:p-0 md:text-left">
            <Checkmark />
            <p className="fonts-clash-display my-[12px] text-xl md:text-[16px]">
              Made by true artisans
            </p>
            <p className="fonts-satoshi text-[16px] md:text-[13px]">
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>
          <div className="mx-auto sm:border-2 sm:border-solid sm:border-zinc-500 sm:p-[30px] sm:text-center md:border-none md:p-0 md:text-left">
            <Purchase />
            <p className="fonts-clash-display my-[12px] text-xl md:text-[16px]">
              Unbeatable prices
            </p>
            <p className="fonts-satoshi text-[16px] md:text-[13px]">
              For our materials and quality you won’t find better prices
              anywhere
            </p>
          </div>
          <div className="mx-auto sm:border-2 sm:border-solid sm:border-zinc-500 sm:p-[30px] sm:text-center md:border-none md:p-0 md:text-left">
            <Sprout />
            <p className="fonts-clash-display my-[12px] text-xl md:text-[16px]">
              Recycled packaging
            </p>
            <p className="fonts-satoshi text-[16px] md:text-[13px]">
              We use 100% recycled packaging to ensure our footprint is
              manageable
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardText;
