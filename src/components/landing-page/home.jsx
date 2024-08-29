"use client";
import { homeData, imageUrlConstant } from "@/constants";
import React from "react";
import { motion } from "framer-motion";

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
          <div key={index} className="relative">
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
      <WhyChooseUs />
      <Banner />
      <BlogPost />
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

const WhyChooseUs = () => {
  const whyChooseData = [
    {
      img: "https://teclearns.com/images/icn-track.jpg",
      heading1: "Live Instructors to address",
      heading2: "questions in real time",
    },
    {
      img: "https://teclearns.com/images/icn-unlimited.jpg",
      heading1: "Online Training Portal",
      heading2: "with Unlimited Access",
    },
    {
      img: "https://teclearns.com/images/icn-24-7.jpg",
      heading1: "Seek guidance from a",
      heading2: "learning assistant",
    },
    {
      img: "https://teclearns.com/images/icn-realtime.jpg",
      heading1: "Monitor Your ",
      heading2: "Learning",
    },
  ];
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 100 }}
        viewport={{ once: true }}
        className="my-9 p-3"
      >
        <p className="text-center text-gray-600 text-2xl font-bold uppercase">
          Why Choose Us
        </p>
        <div className="grid-cols-4 grid place-items-center text-center">
          {whyChooseData?.map((ele, index) => (
            <div className="grid place-items-center" key={index}>
              <img
                loading="lazy"
                src={ele?.img}
                alt="why-choose"
                className="w-auto "
              ></img>
              <p>Live Instructor to address </p>
              <p>question in real time</p>
            </div>
          ))}
        </div>
      </motion.div>

    </>
  );
};

const Banner = () => {
  return (
    <motion.div className="p-5 bg-linear-grad-blue-20 w-full my-10">
      <motion.div className="flex items-center w-full justify-center">
        <motion.p className="uppercase text-white-10">
          When you learn better you do better! Study with us, grow with us.
        </motion.p>
        <motion.button
          whileTap={{ scale: "0.8" }}
          className="bg-black-10 h-10 text-white-10 rounded-xl ml-4 w-[150px]"
        >
          Log In
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const BlogPost = () => {
  const blogPost = [
    {
      img: "https://teclearns.com/images/blog/blog-1.jpg",
      title: "Microsoft Project",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type...`,
    },
    {
      img: "https://teclearns.com/images/blog/blog-3.jpg",
      title: "Business Management",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type...`,
    },
    {
      img: "https://teclearns.com/images/blog/blog-4.jpg",
      title: "Finance Modeling",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type...`,
    },
    {
      img: "https://teclearns.com/images/blog/blog-2.jpg",
      title: "Prince2 Foundation",
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of
                    type...`,
    },
  ];
  return (
    <motion.div className="max-w-[1280px] mx-auto my-10">
      <p className="text-gray-600 my-10  px-4 text-center text-2xl font-bold uppercase">Latest blog post</p>

      <div className="grid grid-cols-4 place-items-center">
        {blogPost?.map((element, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: "1.06" }}
            className="rounded-xl cursor-pointer bg-white-10 w-[300px] p-4 flex flex-col gap-4 shadow-2xl drop-shadow"
          >
            <motion.span
              className="text-blue-10 text-center text-xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 2,
              }}
              key={i}
            >
              {element?.title}
            </motion.span>
            <img
              src={element?.img}
              alt="blog-post"
            />
            <div className="text-sm">
              {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
            type...`}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
export default HomePage;
