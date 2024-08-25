import { homeData, imageUrlConstant } from "@/constants";
import React from "react";

const HomePage = () => {
  return (
    <>
      <img
        className="min-h-[441px] w-full h-full"
        src={imageUrlConstant?.mainBanner}
        loading="lazy"
        alt=""
      />
      <div className="bg-white grid grid-cols-3 gap-10 max-w-[1124px] mx-auto relative -top-10 ">
        {homeData?.become?.map((ele, index) => (
          <div className="relative">
            <div
              key={index}
              className="px-3 py-3 flex flex-col items-center gap-4 rounded-lg bg-linear-grad-yellow-10 shadow-md "
            >
              <h1 className="text-xl text-pretty font-semibold text-white-10 text-center whitespace-nowrap uppercase ">
                {ele?.title}
              </h1>
            </div>
            <button className="shadow-md transition-all text-sm font-bold hover:scale-110 top-10 bg-indigo-600 text-white-10 p-4 rounded-full flex items-center -mt-3 hover:underline mx-auto">
              Know More
            </button>
          </div>
        ))}
      </div>

      <div className=" mx-auto my-10">
        <div className="text-2xl ml-4 mt-3">Top Trending Courses</div>

        <div className="grid grid-cols-4">
          {homeData?.courses?.map((element, index) => (
            <div
              key={index}
              className="shadow-lg hover:shadow-blackShadow-20 bg-white-10 hover:scale-105 cursor-pointer transition-all rounded-lg  max-w-[300px] ml-4 my-4"
            >
              <i class="courseicon_Course-Icon-94"></i>
              <div
                style={{ background: element?.background || "" }}
                className={` text-white min-h-[100px] p-2 text-center flex items-center justify-center text-white-10 rounded-md`}
              >
                <h3 className="text-xl font-bold">{element?.title}</h3>
              </div>
              <div className="p-7">
                <div className="text-[#4a4a4a] text-1xl">
                  {element?.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full h-[230px]">
        <img
          className="absolute w-full h-full"
          src="/business.png"
          alt="business"
        />
        <div className="max-w-[1520px] mx-auto">
          <div className="text-2xl text-white-10 absolute  top-12 px-15 ">
            {homeData?.bannerMsgTitle}
          </div>
          <div className="text-xl text-white-10 absolute  top-20 px-15 ">
            {homeData?.bannerMsgTitle2}
          </div>
          <button className="w-[170px] bg-white-10 hover:bg-indigo-600 hover:scale-110 hover:text-white-10 transition-all inset-0 top-29 mx-auto mt-5 uppercase h-10 rounded-sm text-ft12-18 text-[#0c5397] absolute">
            Learn more
          </button>
        </div>
      </div>
    </>
  );
};

export default HomePage;
