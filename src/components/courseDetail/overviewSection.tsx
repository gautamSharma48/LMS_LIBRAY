import {
  ArrowLeftSquareIcon,
  PanelBottomOpenIcon,
  PanelTop,
  UserIcon,
} from "lucide-react";
import React, { useState } from "react";
import { FadeIn } from "../animation";

const OverviewSection: React.FC<any> = ({ courseData }) => {
  const [showOverviewDescription, setShowOverviewDescription] = useState(false);
  const overview = courseData?.courseDetail?.overview;
  return (
    <section className="mt-5">
      <p className="text-sm uppercase font-semibold text-neutral-500">
        {courseData?.title}
      </p>
      <p className="text-3xl leading-9.75 font-bold text-mono-black mt-spacing6 mb-spacing40 my-5">
        The Most Effective ITIL Foundation Exam Preparation
      </p>
      <div className="grid grid-cols-3 w-full gap-3">
        {overview?.courseDetail?.map((element: any, index: number) => (
          <div
            key={index}
            className="p-2 text-base leading-6.5 w-full md:max-w-[300px] text-neutral-800  overview-list bg-white-10 shadow-2xl rounded-xl drop-shadow"
          >
            <UserIcon className="text-green-700" />
            <p className="mt-2 text-sm">{element?.value}</p>
          </div>
        ))}
      </div>

      {!showOverviewDescription && (
        <div
          onClick={() => setShowOverviewDescription(!showOverviewDescription)}
          className="underline cursor-pointer text-blue-10 font-bold my-3 flex items-center gap-2"
        >
          {showOverviewDescription ? <PanelBottomOpenIcon /> : <PanelTop />}
          {showOverviewDescription ? "Read Less" : "Read More"}
        </div>
      )}

      {showOverviewDescription && (
        <FadeIn delay={0.2}>
          <div className="transition-all duration-500 overflow-hidden w-full">
            <p className="text-sm  text-ellipsis my-5">
              {overview?.overviewDetail}
            </p>
            <ol className="list-decimal list-inside ml-6 space-y-4 mt-3">
              {overview?.overviewPoints?.map((element: any, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="flex-none">
                    {/* Automatically display the list number */}
                    <span className="font-semibold">{index + 1}.</span>{" "}
                    {/* Show the number */}
                  </div>
                  <div className="flex-grow">
                    {/* Display title and value with proper formatting */}
                    <b className="whitespace-nowrap text-gray-800">
                      {element?.title}:&nbsp;
                    </b>
                    <span className="text-gray-600">{element?.value}</span>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-3 text-sm">
              {overview?.overviewCourseDescription}
            </p>
          </div>
        </FadeIn>
      )}

      {showOverviewDescription && (
        <div
          onClick={() => setShowOverviewDescription(!showOverviewDescription)}
          className="underline cursor-pointer text-blue-10 font-bold my-3 flex items-center gap-2"
        >
          {showOverviewDescription ? <PanelBottomOpenIcon /> : <PanelTop />}
          {showOverviewDescription ? "Read Less" : "Read More"}
        </div>
      )}
    </section>
  );
};

export default OverviewSection;
