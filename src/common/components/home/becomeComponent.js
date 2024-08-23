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
    <div className="bg-white grid grid-cols-3 gap-10 max-w-[1124px] mx-auto relative -top-10 relative ">
      {data.map((ele, index) => (
        <>
          <div
            key={index}
            className="px-3 py-3 flex flex-col items-center gap-4 bg-white-10 rounded-lg bg-yellow-10"
          >
            <h1 className="text-xl text-pretty font-semibold text-white-10 text-center whitespace-nowrap uppercase ">
              {ele?.title}
            </h1>

            <button className="text-[#0c5397] text-sm font-bold  absolute bottom-0 top-10 bg-red-50 p-4 rounded-full">Know More</button>
          </div>
        </>
      ))}
      <div></div>
    </div>
  );
};

export default BecomeComponent;
