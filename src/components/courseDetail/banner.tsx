import React from "react";
import { CheckCircle2, DownloadIcon, HomeIcon, Share2Icon } from "lucide-react";
import { FadeIn, SlideInFromBottom } from "@/components/animation";


const Banner: React.FC<any> = ({ courseData }) => {
  return (
    <div className="max-w-[1280px] mx-auto p-6 w-full">
      <div className="flex items-center w-full gap-4 justify-between">
        <div className="flex-1 flex flex-col">
          <FadeIn>
            <nav className="flex items-center text-sm text-gray-500 mb-4">
              <HomeIcon className="w-4 h-4 mr-1" />
              <a href="#" className="hover:underline">
                {courseData?.courseDetail?.courseCategory}
              </a>{" "}
              &nbsp;&gt;&nbsp;
              <a href="#" className="hover:underline">
                {courseData?.title}
              </a>
            </nav>
          </FadeIn>
          
          <SlideInFromBottom delay={0.2}>
            <h1 className="text-lg font-semibold text-gray-700 mb-2">
              {courseData?.title} Course
            </h1>
          </SlideInFromBottom>
          
          <SlideInFromBottom delay={0.4}>
            <h2 className="text-4xl font-bold text-black-50 mb-4">
              {courseData?.courseSubtitle}
            </h2>
          </SlideInFromBottom>
          
          <FadeIn delay={0.6}>
            <p className="text-xl text-black-50 mb-6">
              {courseData?.description}
            </p>
          </FadeIn>
          
          <FadeIn delay={0.8}>
            <div className="flex items-center mb-4">
              <div className="flex -space-x-2">
                <img
                  src="https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo-690564ff6367412f95b702a69888a2dd.svg"
                  alt={"enrolled"}
                  className="w-[141px]"
                />
              </div>
              <span className="ml-3 text-gray-700">
                {courseData?.courseDetail?.learnersEnrolled}
              </span>
            </div>
          </FadeIn>
          
          <FadeIn delay={1}>
            <ul className="list-none space-y-2 mb-6">
              {courseData?.courseDetail?.highlights?.map((element:any, index:number) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-black-60 text-sm"
                >
                  <CheckCircle2 className="text-green-700" />
                  {element}
                </li>
              ))}
            </ul>
          </FadeIn>
          
          <SlideInFromBottom delay={1.2}>
            <div className="flex space-x-4 mb-6">
              <button className="px-6 py-2 border border-black-40 rounded-md text-black-60 bg-transparent hover:bg-gray-100">
                Training Options
              </button>
              <button className="px-6 py-4 bg-black-60 flex items-center gap-3 text-white-10 rounded-md hover:bg-blue-700">
                <DownloadIcon className="text-white-10" />
                Download Brochure
              </button>
            </div>
          </SlideInFromBottom>
        </div>

        <div className="flex-1 flex flex-col rounded-3xl">
          <FadeIn delay={0.2}>
            <div className="relative rounded-3xl">
              <img
                alt=""
                src={courseData?.courseDetail?.bannerImage}
                className="w-full h-full rounded-3xl"
              />
              <div className="bg-new-banner-image-gradient absolute rounded-3xl left-0 top-0 bottom-0 right-0 h-full w-full z-10 flex justify-center items-end pb-10 gap-10">
                {courseData?.courseDetail?.rating?.map((element:any, index:number) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-white-10"
                  >
                    <img
                      src={element?.logo}
                      alt={element?.from}
                      className="w-6 h-6"
                    />
                    <span>{element?.rate}/5</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={1.4}>
            <div className="mt-3 w-full text-center">
              <Share2Icon className="mx-auto cursor-pointer" />
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};

export default Banner;