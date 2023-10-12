import React from "react";
import { Link } from "react-router-dom";
const CardImgs = () => {
  return (
    <div className="md:p-[30px] lg:p-[60px] xl:p-[108px]">
      <div className="fonts-clash-display font-normal not-italic text-[#2A254B]	">
        <p className="mb-5 text-center sm:text-[28px] 2xl:text-[32px]">
          New ceramics
        </p>
        <div className="mx-auto flex justify-between sm:flex-col sm:gap-5 md:flex-row md:gap-3 lg:gap-4">
          <div className="mx-auto text-center">
            <Link>
              <img src="src/assets/imgs/Parent.svg" />
            </Link>
            <p className="my-3 text-xl md:text-center md:text-[16px] lg:text-[18px]">
              The Dandy chair £250
            </p>
            <p className="md:text-center md:text-[14px] xl:text-[16px] 2xl:text-lg">
              £250
            </p>
          </div>

          <div className="mx-auto text-center">
            <Link to={"/tableimgpage"}>
              <img
                src="src/assets/imgs/kozaImgs.svg"
              />
            </Link>
            <p className="my-3 text-xl md:text-center md:text-[16px] lg:text-[18px]">
              The Dandy chair £250
            </p>
            <p className="md:text-center md:text-[14px] xl:text-[16px] 2xl:text-lg">
              £250
            </p>
          </div>

          <div className="mx-auto text-center">
            <Link>
              <img src="src/assets/imgs/kozaImg.svg" />
            </Link>
            <p className="my-3 text-xl md:text-center md:text-[16px] lg:text-[18px]">
              The Dandy chair £250
            </p>
            <p className="md:text-center md:text-[14px] xl:text-[16px] 2xl:text-lg">
              £250
            </p>
          </div>

          <div className="mx-auto text-center">
            <Link className="hover:scale-100">
              <img src="src/assets/imgs/chiroq.svg" />
            </Link>
            <p className="my-3 text-xl md:text-center md:text-[16px] lg:text-[18px]">
              The Dandy chair £250
            </p>
            <p className="md:text-center md:text-[14px] xl:text-[16px] 2xl:text-lg">
              £250
            </p>
          </div>
        </div>
        <button className="fonts-satoshi mx-auto my-9 flex justify-center bg-[#F9F9F9] px-8 py-4 md:py-3">
          View collection
        </button>
      </div>

      <div className="fonts-clash-display font-normal not-italic text-[#2A254B]	">
        <p className="mb-5 text-center md:text-[28px] 2xl:text-[32px]">
          Our popular products
        </p>

        <div className="mx-auto flex justify-between text-center sm:flex-col sm:gap-5 md:flex-row md:gap-3 lg:gap-4 2xl:gap-6">
          <div className="w-1/2 flex-1 sm:mx-auto">
            <img src="src/assets/imgs/Large.svg" className="w-full" />
            <p className="my-3 md:text-center md:text-[16px] lg:text-[18px] 2xl:text-xl">
              The Dandy chair £250
            </p>
            <p className="md:text-center md:text-[14px] xl:text-[16px] 2xl:text-lg">
              £250
            </p>
          </div>

          <div className="flex w-1/2 flex-1 sm:mx-auto sm:gap-4 md:gap-3 2xl:gap-6">
            <div className="w-1/2">
              <img src="src/assets/imgs/Parent.svg" className="w-full" />
              <p className="my-3 md:text-center md:text-[16px] lg:text-[18px] 2xl:text-xl">
                The Dandy chair £250
              </p>
              <p className="md:text-center md:text-[14px] xl:text-[16px] 2xl:text-lg">
                £250
              </p>
            </div>

            <div className="w-1/2">
              <img src="src/assets/imgs/Photo.svg" className="w-full" />
              <p className="my-3 md:text-center md:text-[16px] lg:text-[18px] 2xl:text-xl">
                The Dandy chair £250
              </p>
              <p className="md:text-center md:text-[14px] xl:text-[16px] 2xl:text-lg">
                £250
              </p>
            </div>
          </div>
        </div>
        <button className="fonts-satoshi mx-auto mt-9 flex justify-center bg-[#F9F9F9] sm:mb-6 sm:px-8 sm:py-3 md:text-[16px]">
          View collection
        </button>
      </div>
    </div>
  );
};

export default CardImgs;

{
  /* {data.map((value)=>(
            <div key={value.id}>
                <img src={value.img}/>
                <p>{value.title}</p>
            </div>
          )} */
}
