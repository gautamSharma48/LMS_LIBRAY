"use client";
import BlurTypingAnimation from "@/components/common/blur-typing";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { profile } from "console";

const aboutUsData = {
  heading: "Welcome to Teclearn".split(" "),
  welcomeMessage: `There are countless online education marketplaces on the internet. And there's us. We are not the biggest. We are not the cheapest. But we are the fastest growing. We have the highest course completion rate in the industry.
  And the reason is, we don't give up. When a student commits to a course, we commit to the student. We are not going to sugar coat it - we will make you complete, come what may. You may not have given much thought to what you are signing up for, but we believe you are signing up for knowledge that is useful and complete. And what we do, we do to make that belief a reality. We are ridiculously committed to our students. Be it constant reminders, relentless masters or 
  24 x 7 online support - we will absolutely make sure that you run out of excuses to not complete the course.`,
  ourMission: [
    {
      title: "Our Vision",
      content:
        "To become the largest online learning ecosystem for continuing education, in partnership with corporates and academia.",
    },
    {
      title: "Our Mission",
      content:
        "To create an alternate platform for students who wish to continue and complete courses by attending live online courses, using a team of ridiculously committed educators who will stop at nothing to impart education, helped by a 24 x 7 support system. By deploying our world class team of industry experts, we aim to educate our learners with the skills they need to advance their professional life to the next level.",
    },
    {
      title: "Our Client",
      content:
        "To create an alternate platform for students who wish to continue and complete courses by attending live online courses",
    },
  ],
  team: [
    {
      name: "Lovleen Bhatia",
      profile: "Co-Founder & CEO",
      education: "B.Tech.IIT BHU",
      profilePic: "",
      bio: `Lovleen Bhatia is instrumental in setting up the strategic direction of the company, defining company's priorities, driving the mission and company's work culture. He brings with him 13 years of expertise across domains like technology, digital marketing, growth hacking, customer acquisition and hiring. Prior to co-founding techlearn, he headed the R&D at DbyDX Labs.
            At Texas Instruments, Lovleen was a technology evangelist and helped the company stay on the cutting edge. His interests include Artificial Intelligence and Virtual Reality. He started his career at Infosys as a software engineer and has also held key roles at Texas Instruments and Synopsys.`,
    },
    {
      name: "Lovleen Bhatia",
      profile: "Co-Founder & CEO",
      education: "B.Tech.IIT BHU",
      profilePic: "",
      bio: `Lovleen Bhatia is instrumental in setting up the strategic direction of the company, defining company's priorities, driving the mission and company's work culture. He brings with him 13 years of expertise across domains like technology, digital marketing, growth hacking, customer acquisition and hiring. Prior to co-founding techlearn, he headed the R&D at DbyDX Labs.
              At Texas Instruments, Lovleen was a technology evangelist and helped the company stay on the cutting edge. His interests include Artificial Intelligence and Virtual Reality. He started his career at Infosys as a software engineer and has also held key roles at Texas Instruments and Synopsys.`,
    },
    {
      name: "Lovleen Bhatia",
      profile: "Co-Founder & CEO",
      education: "B.Tech.IIT BHU",
      profilePic: "",
      bio: `Lovleen Bhatia is instrumental in setting up the strategic direction of the company, defining company's priorities, driving the mission and company's work culture. He brings with him 13 years of expertise across domains like technology, digital marketing, growth hacking, customer acquisition and hiring. Prior to co-founding techlearn, he headed the R&D at DbyDX Labs.
                At Texas Instruments, Lovleen was a technology evangelist and helped the company stay on the cutting edge. His interests include Artificial Intelligence and Virtual Reality. He started his career at Infosys as a software engineer and has also held key roles at Texas Instruments and Synopsys.`,
    },
  ],
};

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
            <motion.div
              key={index}
              className="flex items-center w-full  min-h-[300px] justify-between border-b"
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
              {index % 2 === 0 && (
                <div className="flex-1 flex justify-center">
                  <img
                    src={"https://teclearns.com/images/edu-avatar.jpg"}
                    className="w-[167px] h-[165px]"
                    alt="profile-pic"
                  />
                </div>
              )}

              <div className="p-4 flex-1 flex flex-col justify-center gap-3">
                <p className="text-start text-bold text-2xl text-black-30">
                  {data?.name}
                </p>
                <p className="text-start text-lg">
                  <span className="font-semibold text-black-60 text-xl">
                    Profile:
                  </span>{" "}
                  {data?.profile}
                </p>
                <p className="text-start">
                  <span className="font-semibold text-black-60 text-xl">
                    Education :
                  </span>{" "}
                  {data?.education}
                </p>
                <p className="text-start">
                  {data?.bio}
                </p>
              </div>

              {index % 2 !== 0 && (
                <div className="flex-1 flex justify-center">
                  <img
                    src={"https://teclearns.com/images/edu-avatar.jpg"}
                    className="w-[167px] h-[165px]"
                    alt="profile-pic"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default AboutPage;
