import React from "react";
import CourseSection from "./courseSection";

const data = [
  {
    title: "Become A Project Manager",
    pic: "/project-manager.jpeg",
  },
  {
    title: "Become A Quality Manager",
    pic: "quality-manager.jpeg",
  },
  {
    title: "Become A Business Manager",
  },
];

const BecomeComponent = () => {
  return (
    <>
      <div className="bg-white grid grid-cols-3 gap-10 max-w-[1124px] mx-auto relative -top-10 ">
        {data.map((ele, index) => (
          <div className="relative">
            <div
              key={index}
              className="px-3 py-3 flex flex-col items-center gap-4 bg-black-10 rounded-lg bg-yellow-10 shadow-md "
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
      <CourseSection />
      <SectionComponent />
    </>
  );
};

const SectionComponent = () => {
  const data1 =
    "No more dull edges in your company. Make your employees into masters.";
  const data2 =
    "Nurture talent with instructor-led courses on trending technologies";
  return (
    <div className="relative w-full h-[230px]">
      <img
        className="absolute w-full h-full"
        src="/business.png"
        alt="business"
      />
      <div className="max-w-[1520px] mx-auto">
      <div className="text-2xl text-white-10 absolute  top-12 px-15 ">{data1}</div>
      <div className="text-xl text-white-10 absolute  top-20 px-15 ">{data2}</div>
      <button className="w-[170px] bg-white-10 hover:bg-indigo-600 hover:scale-110 hover:text-white-10 transition-all inset-0 top-29 mx-auto mt-5 uppercase h-10 rounded-sm text-ft12-18 text-[#0c5397] absolute">Learn more</button>
      </div>
     
    </div>
  );
};

export default BecomeComponent;
