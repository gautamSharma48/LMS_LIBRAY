"use client";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import React from "react";
import { motion } from "framer-motion";
import { aboutUsData } from "@/constants";


const AboutPage = () => {
  return (
    <section className="w-full h-full">
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="my-10 w-full text-center max-w-[1280px] mx-auto px-4 lg:px-0"
      >
        <p className="mb-5">
          {aboutUsData?.heading.map((el, i) => (
            <motion.span
              className="text-center text-bold text-2xl w-full  text-neutral-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 2,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </p>
        <img
          src={"https://teclearns.com/images/about-banner.jpg"}
          alt="about-banner"
        />

        <BlurFadeText
          className="my-5 text-start text-bold text-lg w-full  text-black-60"
          yOffset={3}
          delay={0.4}
          text={aboutUsData?.welcomeMessage}
        />
      </motion.div>
      <div className="grid xs:grid-cols-2   lg:grid-cols-3 grid-cols-1 bg-white-10 max-w-[1280px] mx-auto gap-10 mb-5 px-4 lg:px-0">
        {aboutUsData?.ourMission?.map((data, index) => (
          <motion.div
            key={index}
            className="bg-white-10 w-full h-full shadow-2xl drop-shadow-sm p-5 flex-1 rounded-xl border border-gray-500"
            initial={{
              opacity: 0,
              // if odd index card,slide from right instead of left
              x: index % 2 === 0 ? 50 : -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0, // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
          >
            <div className="text-center text-2xl mb-2">{data?.title}</div>
            <p className="text-center">{data?.content}</p>
          </motion.div>
        ))}
      </div>

      <BlurFadeText
        className="bg-blue-20 text-white-10 w-full shadow-lg  p-4 drop-shadow border-t border-b border-gray-500 text-center"
        yOffset={3}
        delay={0.4}
        text={"Management Team"}
      />
      <div className="w-full bg-white-10 shadow-2xl drop-shadow">
        <div className="grid grid-cols-1 w-full max-w-[1280px] mx-auto gap-10">
          {aboutUsData?.team?.map((data, index) => (
            <div
              key={index}
              className="flex md:flex-row  flex-col items-center w-full  min-h-[300px] justify-between border-b"
              // initial={{
              //   opacity: 0,
              //   // if odd index card,slide from right instead of left
              //   x: index % 2 === 0 ? 50 : -50,
              // }}
              // whileInView={{
              //   opacity: 1,
              //   x: 0, // Slide in to its original position
              //   transition: {
              //     duration: 1, // Animation duration
              //   },
              // }}
              // viewport={{ once: true }}
            >
              {index % 2 === 0  && (
                <div className="flex-1 flex flex-col items-center justify-center gap-3">
                  <img
                    src={"https://teclearns.com/images/edu-avatar.jpg"}
                    className="w-[167px] h-[165px]"
                    alt="profile-pic"
                  />
                  <p className="text-center text-bold text-2xl text-black-30">
                  {data?.name}
                </p>
                <p className="text-center text-md">
                  {data?.profile}
                </p>
                <p className="text-start">
                  {"(" + data?.education +  ")"}
                </p>
                </div>
              )}

              <div className="p-4 flex-1 flex flex-col justify-center gap-3">
                <p className="text-start">
                  {data?.bio}
                </p>
              </div>

              {index % 2 !== 0 && (
                <div className="flex-1 flex-col items-center flex justify-center gap-3">
                  <img
                    src={"https://teclearns.com/images/edu-avatar.jpg"}
                    className="w-[167px] h-[165px]"
                    alt="profile-pic"
                  />
                  <p className="text-center text-bold text-2xl text-black-30">
                  {data?.name}
                </p>
                <p className="text-center text-md">
                  {data?.profile}
                </p>
                <p className="text-start">
                  {"(" + data?.education +  ")"}
                </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default AboutPage;
