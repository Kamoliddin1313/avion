import React from "react";

const SearchPage = () => {
  return (
    <div className="w-full bg-[#F9F9F9] lg:px-[60px] sm:p-[30px] lg:py-12 xl:px-[108px] xl:py-12">

      <div className="mx-auto w-full bg-[#fff] py-[50px] text-center">
        <div className="mx-auto w-3/5">
          <p className="mb-5 lg:text-[32px] sm:text-[28px]">
            Join the club and get the benefits
          </p>
          <p className="mx-auto text-center xl:w-3/5 lg:w-4/5 md:text-[16px] md:my-4">
            Sign up for our newsletter and receive exclusive offers on new
            ranges, sales, pop up stores and more 
          </p>
        </div>

        <form className="mx-auto flex justify-center xl:mt-[72px] lg:w-2/5 md:w-1/2 sm:w-3/5 sm:mt-8">
          <input
            placeholder="your@email.com"
            className="w-3/4 bg-[#F9F9F9] sm:px-[20px] lg:py-[12px] sm:py-[10px] 2xl:px-[32px] 2xl:py-[17px]"
          />
          <button className="w-1/4 bg-[#2A254B] text-white">Sign up</button>
        </form>
      </div>

    </div>
  );
};

export default SearchPage;
