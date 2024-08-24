import React from "react";

const data = [
  {
    title: "Microsoft Project",
    description: "Analyze the facts and make forecasts.",
    background: "linear-gradient(110deg, #53a2ff, #2a387b)",
  },
  {
    title: "Microsoft Excel",
    description: "Analyze the facts and make forecasts.",
    background: "linear-gradient(242deg, #f49cae, #b05ce2)",
  },
  {
    title: "PRINCE2® Foundation",
    description: "Develop project-related abilities",
    background: "linear-gradient(240deg,#6568ff,#d879ec)",
  },
  {
    title: "PMI RMP Certification Training Course",
    description: "Schedules that PMI RMP course will include",
    background: "linear-gradient(240deg,#d677c0,#41bbbd)",
  },
  {
    title: "PMP® Certification Training Course",
    description: "Schedules that PMP course will include",
    background: "linear-gradient(240deg,#d677c0,#41bbbd)",
  },
  {
    title: "Six Sigma yellow",
    description: "Learn Six Sigma Expert",
    background: "linear-gradient(240deg,#ff6364,#ff88bc)",
  },
];
const CourseSection = () => {
  return (
    <div className=" mx-auto my-10">
      <div className="text-2xl ml-4 mt-3">Top Trending Courses</div>

      <div className="grid grid-cols-4">
        {data?.map((data, index) => (
          <div
            key={index}
            className="shadow-lg hover:shadow-blackShadow-20 bg-white-10 hover:scale-105 cursor-pointer transition-all rounded-lg  max-w-[300px] ml-4 my-4"
          >
            <i class="courseicon_Course-Icon-94"></i>
            <div style={{background: data?.background || ""}} className={` text-white min-h-[100px] p-2 text-center flex items-center justify-center text-white-10 rounded-md`}>
              <h3 className="text-xl font-bold">{data?.title}</h3>
            </div>
            <div className="p-7">
              <div className="text-[#4a4a4a] text-1xl">
                {data?.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSection;
