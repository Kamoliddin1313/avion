import React from "react";
import { CarImg, Checkmark, Purchase, Sprout } from "../assets/icons/icons";
const AboutUs = () => {
  return (
    <div>
      <div className="">
        <h1 className="fonts-clash-display mx-auto mb-16 mt-10 w-1/2 text-center	text-[36px] font-normal not-italic">
          A brand built on the love of craftmanship, quality and outstanding
          customer service
        </h1>

        <div className="mx-auto flex  justify-between  sm:w-3/5 sm:flex-col-reverse sm:gap-[30px] sm:py-[30px] md:h-[350px] md:w-full md:flex-row md:gap-0 md:py-0 lg:h-[450px] xl:h-[600px]">
          <div className="box-border w-1/2 font-normal not-italic sm:w-full sm:text-center md:h-[350px] md:w-1/2 md:px-[30px] md:py-[20px] md:text-left lg:py-[40px] lg:pl-[60px] lg:pr-10 xl:h-[600px] xl:py-[60px] xl:pl-[108px]">
            <div className="lg:pb-[30px] xl:mb-[120px]">
              <p className="fonts-clash-display w-full text-[#2A254B] sm:text-[20px] xl:text-[28px]">
                From a studio in London to a global brand with over 400 outlets
              </p>

              <p className="fonts-satoshi text-[#505977] md:my-3 lg:mb-9 lg:mt-5 lg:text-base">
                When we started Avion, the idea was simple. Make high quality
                furniture affordable and available for the mass market.
              </p>

              <p className="fonts-satoshi text-base text-[#505977] md:text-[14px]">
                Handmade, and lovingly crafted furniture and homeware is what we
                live, breathe and design so our Chelsea boutique become the
                hotbed for the London interior design community.
              </p>
            </div>

            <button className="fonts-satoshi border-solid bg-[#F9F9F9] font-normal leading-[140%] text-[#2A254B] sm:mb-4 sm:mt-7 sm:px-[25px] sm:py-[10px] md:py-[12px] lg:px-[32px] lg:py-[14px] lg:text-[16px]">
              View collection
            </button>
          </div>

          <div className="w-1/2 sm:w-full md:h-[350px] md:w-1/2 lg:h-[450px] xl:h-[600px]">
            <img src="./src/assets/imgs/dds.png" className="h-full w-full" />
          </div>
        </div>

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
                live, breathe and design so our Chelsea boutique become the
                hotbed for the London interior design community.
              </p>
            </div>

            <button className="fonts-satoshi border-solid bg-[#F9F9F9] font-normal leading-[140%] text-[#2A254B] sm:mb-4 sm:mt-7 sm:px-[25px] sm:py-[10px] md:py-[12px] lg:px-[32px] lg:py-[14px] lg:text-[16px]">
              View collection111
            </button>
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

        <div className="w-full bg-[#F9F9F9] sm:p-[30px] lg:px-[60px] lg:py-12 xl:px-[108px] xl:py-12">
          <div className="mx-auto w-full bg-[#fff] py-[50px] text-center">
            <div className="mx-auto w-3/5">
              <p className="mb-5 sm:text-[28px] lg:text-[32px]">
                Join the club and get the benefits
              </p>
              <p className="mx-auto text-center md:my-4 md:text-[16px] lg:w-4/5 xl:w-3/5">
                Sign up for our newsletter and receive exclusive offers on new
                ranges, sales, pop up stores and more
              </p>
            </div>

            <form className="mx-auto flex justify-center sm:mt-8 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:mt-[72px]">
              <input
                placeholder="your@email.com"
                className="w-3/4 bg-[#F9F9F9] sm:px-[20px] sm:py-[10px] lg:py-[12px] 2xl:px-[32px] 2xl:py-[17px]"
              />
              <button className="w-1/4 bg-[#2A254B] text-white">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
