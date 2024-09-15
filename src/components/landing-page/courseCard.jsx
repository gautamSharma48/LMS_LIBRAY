import React from "react";
import BlurFadeText from "../magicui/blur-fade-text";
import { useRouter } from "next/navigation";

const CourseCard = ({ title, data }) => {
  const router = useRouter();
  console.log(data);
  return (
    <div className=" mx-auto my-10">
      <BlurFadeText
        className="text-gray-600 my-10  px-4 w-full text-center text-2xl font-bold uppercase"
        yOffset={3}
        delay={0.4}
        text={title}
      />
      <div className="grid grid-cols-4">
        {data?.map((element, index) => (
          <div
            onClick={()=> router.push(`/course-detail/${element?.id}`)}
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
  );
};

export default CourseCard;
