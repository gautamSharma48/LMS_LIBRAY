import React from "react";

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
          <button className=" shadow-md text-sm font-bold hover:scale-110 top-10 bg-indigo-600 text-white-10 p-4 rounded-full flex items-center -mt-3 hover:underline mx-auto">
            Know More
          </button>
        </div>
      ))}
      <div></div>
    </div>
  );
};

export default BecomeComponent;
