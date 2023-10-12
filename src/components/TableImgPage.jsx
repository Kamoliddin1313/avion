import React from "react";

const TableImgPage = () => {
  return (
      <div className="mx-auto flex  justify-between  sm:w-3/5 sm:flex-row-reverse sm:gap-[30px] sm:py-[30px] md:h-[350px] md:w-full md:flex-row md:gap-0 md:py-0 lg:h-[450px] xl:h-[600px]">
        <div className="w-1/2 sm:w-full md:h-[350px] md:w-1/2 lg:h-[450px] xl:h-[600px]">
          <img src="./src/assets/imgs/Image.png" className="h-full w-full" />
        </div>

        <div className="box-border w-1/2 font-normal not-italic sm:w-full sm:text-center md:h-[350px] md:w-1/2 md:px-[30px] md:py-[20px] md:text-left lg:py-[40px] lg:pl-[60px] lg:pr-10 xl:h-[600px] xl:py-[60px] xl:pl-[108px]">
          <div className="lg:pb-[30px] xl:mb-[120px]">
            <p className="fonts-clash-display w-full text-[#2A254B] sm:text-[20px] xl:text-[28px]">
              Our service isn’t just personal, it’s actually hyper personally
              exquisite
            </p>

            <p className="fonts-satoshi text-[#505977] md:my-3 lg:mb-9 lg:mt-5 lg:text-base">
              When we started Avion, the idea was simple. Make high quality
              furniture affordable and available for the mass market.
            </p>

            <p className="fonts-satoshi text-base text-[#505977] md:text-[14px]">
              Handmade, and lovingly crafted furniture and homeware is what we
              live, breathe and design so our Chelsea boutique become the hotbed
              for the London interior design community.
            </p>
          </div>

          <button className="fonts-satoshi border-solid bg-[#F9F9F9] font-normal leading-[140%] text-[#2A254B] sm:mb-4 sm:mt-7 sm:px-[25px] sm:py-[10px] md:py-[12px] lg:px-[32px] lg:py-[14px] lg:text-[16px]">
            View collection
          </button>
        </div>
      </div>
  );
};

export default TableImgPage;
