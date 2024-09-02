import { MinusCircle, PlusCircle } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import BlurFadeText from "@/components/magicui/blur-fade-text";

const FrequentlyAskedQuestions = ({ type = "", ...props }) => {
  return (
    <>
      {(() => {
        switch (type) {
          case "curriculm":
            return <Curriculm {...props} />;
          default:
            return <FaqsQuestion {...props} />;
        }
      })()}
    </>
  );
};

const Curriculm = ({ data = [], heading = "" }) => {
  const [openIndex, setOpenIndex] = useState(1);
  return (
    <section className="mx-auto max-w-[1024px] pt-5 sm:px-0 px-4">
      <div className="">
        <div className="flex items-center justify-between mb-5 gap-3">
          <BlurFadeText
            className="text-black-70 text-xl font-bold"
            yOffset={3}
            delay={0.4}
            text={heading || "Curriculm"}
          />

          <motion.div
            whileTap={{ scale: 0.8 }}
            className="border cursor-pointer select-none bg-blue-10 text-white-10 p-2 rounded-lg"
          >
            Download Curriculm
          </motion.div>
        </div>

        <div className="flex flex-col w-full gap-2">
          {data?.map((element: any, index:number) => (
            <motion.div
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
              key={index}
              onClick={() => setOpenIndex(index)}
            >
              <div
                className={`${
                  openIndex === index
                    ? "rounded-tl-xl rounded-tr-xl"
                    : "rounded-xl "
                } bg-white-10 shadow-2xl drop-shadow flex items-center gap-3 p-3 cursor-pointer`}
              >
                {openIndex === index ? (
                  <MinusCircle className="text-black-60" />
                ) : (
                  <PlusCircle className="text-black-60" />
                )}
                <div className="text-md font-bold text-black-60">
                  {element?.heading}
                </div>
              </div>
              {openIndex === index && (
                <div className="">
                  <motion.div className="bg-white-10 shadow-md rounded-bl-xl rounded-br-xl p-3 border-b border-r border-l">
                    <span className="font-bold text-black-60">
                      Learning Objectives -
                    </span>{" "}
                    {element?.objective} <br />
                    <span className="font-bold text-black-60">
                      Topics -
                    </span>{" "}
                    {element?.topic}
                    <div className="bg-[lightBlue] text-black-30  p-4 mt-3 border border-gray-500 rounded-md">
                      Get detailed course syllabus in your inbox{" "}
                      <span className="text-blue-700 hover:underline cursor-pointer">
                        Download Curriculm
                      </span>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FaqsQuestion = ({ data = [], heading = "" }) => {
  const [openIndex, setOpenIndex] = useState(1);
  return (
    <section className="mx-auto max-w-[1024px] pt-5 sm:px-0 px-4">
      <div className="">
        <BlurFadeText
          className="text-black-70 text-xl font-bold"
          yOffset={3}
          delay={0.4}
          text={heading || "Curriculm"}
        />

        <div className="flex flex-col w-full gap-2 mt-5">
          {data?.map((element: any, index: number) => (
            <motion.div
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
              key={index}
              onClick={() => setOpenIndex(index)}
            >
              <div
                className={`${
                  openIndex === index
                    ? "rounded-tl-xl rounded-tr-xl"
                    : "rounded-xl "
                } bg-white-10 shadow-2xl drop-shadow flex items-center gap-3 p-3 cursor-pointer`}
              >
                {openIndex === index ? (
                  <MinusCircle className="text-black-60" />
                ) : (
                  <PlusCircle className="text-black-60" />
                )}
                <div className="text-md font-bold text-black-60">
                  {element?.question}
                </div>
              </div>
              {openIndex === index && (
                <div className="">
                  <motion.div
                    dangerouslySetInnerHTML={{ __html: element?.answer }}
                    className="bg-white-10 shadow-md rounded-bl-xl rounded-br-xl p-3 border-b border-r border-l"
                  >
                    {/* {element?.answer} */}
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FrequentlyAskedQuestions;
