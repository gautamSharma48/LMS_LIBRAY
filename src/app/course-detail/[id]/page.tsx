"use client";
import FrequentlyAskedQuestions from "@/components/common/courseDetail/faqs";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { homeData } from "@/constants";
import {
  CheckCircle,
  CheckCircle2Icon,
  HeadphonesIcon,
  ListTodoIcon,
  Monitor,
} from "lucide-react";
import { useParams } from "next/navigation";
import React from "react";
import { motion } from "framer-motion";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import UserReviewCard from "@/components/landing-page/userReviewCard";
import { SpeakerLoudIcon } from "@radix-ui/react-icons";

// Define a type for the course
type Course = (typeof homeData.courses)[number];

const CourseDetail = () => {
  const params = useParams();
  const id = params?.id as string;
  const courseData: Course | undefined = homeData?.courses?.find(
    (ele) => ele?.id === Number(id)
  );

  if (!courseData) {
    return <div>Course not found</div>; // Handle case where courseData is not found
  }

  return (
    <div className="overflow-x-hidden bg-grey-50">
      <Header />
      <Banner />
      <Banner2 />
      <TrainingFeature />
    
      <FrequentlyAskedQuestions data={courseData?.curriculm} type="curriculm" />
      <CourseDetailSection />
      <LearningObjective />

      <FrequentlyAskedQuestions
        data={courseData?.courseDescription?.courseData}
        heading={courseData?.courseDescription?.courseHeading}
      />
     
     <Banner3 />
      <TestimonialReview />
      <FrequentlyAskedQuestions
        data={courseData?.faqs?.faqsData}
        heading={courseData?.faqs?.faqsHeading}
      />
      <Footer />
    </div>
  );
};

const Banner = () => {
  return (
    <section className="my-10">
      <div className="flex justify-between items-center max-w-[1024px] mx-auto">
        <div className="flex-1 flex flex-col gap-4">
          <p className="font-semibold text-sm">
            Certified ScrumMaster Certification Training Course
          </p>
          <p className="text-2xl font-bold">CSM® Certification Training</p>
          <p>
            Become an Exceptional Scrum Master with Real-Time Scrum Activities
            and Simulations
          </p>

          <div className="text-3xl font-bold flex items-center w-full">
            <div className="whitespace-nowrap">Best Deal:-</div>
            <div className="flex items-center gap-2 w-full justify-start ml-2">
              <p className="text-sm line-through"> (₹) 13000</p>
              <button className="px-5 py-2 text-sm bg-blue-10 rounded-xl text-white-10">
                (₹) 10,000
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <img
              className="max-w-full w-[120px]"
              alt="enrolled"
              src="https://d2o2utebsixu4k.cloudfront.net/Banner user icons combo_3-3bee0eeae0884bb08b3b1e82723b2c62.svg"
            />{" "}
            144,000+ Enrolled
          </div>

          <div className="flex flex-col gap-4 items-start">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500" />
              Guaranteed-to-run, live, fun and interactive training
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500" />
              Complimentary mock exams and unlimited Scrum-enablement sessions
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 w-6 h-6" />
              Experiential learning with games, role-plays, simulations, and
              case studies
            </div>
          </div>
        </div>

        <div className="flex-1 rounded-3xl">
          <img
            src={
              "https://ww2.knowledgehut.com/_next/image?url=https%3A%2F%2Fd2o2utebsixu4k.cloudfront.net%2FTop%20Banner_04-71595147d1884278af34145e2f7018bb.webp&w=1920&q=75"
            }
            className="w-full h-full rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

const Banner2 = () => {
  return (
    <section className="max-w-[1024px] mx-auto">
      
      <div className="text-center text-3xl font-bold">
        Our Secret Sauce for Exam and Career Success
      </div>
      <div className="grid grid-cols-4 place-items-center gap-4 mt-5">
        <div className="bg-white-10 border border-grey-10 shadow-2xl drop-shadow rounded-xl">
          <img
            className="w-full h-[188px]"
            src="https://d2o2utebsixu4k.cloudfront.net/Learn%20With%20Us_Experiential%20Learning_CSM_Revised-79e5519eb45244c98cf06fa7153f5d22.svg"
            alt=""
          />
          <div className="w-full bg-grey-50 text-center p-4 rounded-xl text-ellipsis">
            Engaging, Hands-On Learning
          </div>
        </div>

        <div className="bg-white-10 border border-grey-10 shadow-2xl drop-shadow rounded-xl">
          <img
            className="w-full h-[188px]"
            src="https://d2o2utebsixu4k.cloudfront.net/Learn%20With%20Us_Complimentary%20Mock%20Tests_CSM-01-2b7c9e6768584b72bc6c2d4a0b6a466d.svg"
            alt=""
          />
          <div className="w-full bg-grey-50 text-center p-4 rounded-xl">
            Unlimited Scrum-Enablement
          </div>
        </div>

        <div className="bg-white-10 border border-grey-10 shadow-2xl drop-shadow rounded-xl">
          <img
            className="w-full h-[188px]"
            src="https://d2o2utebsixu4k.cloudfront.net/Learn With Us_Scrum Enablement Sessions_CSM-6a6626d72fe14f6e9a86191dd6b507f9.svg"
            alt=""
          />
          <div className="w-full bg-grey-50 text-center p-4 rounded-xl">
            Complimentary Mock Exams
          </div>
        </div>

        <div className="bg-white-10 border border-grey-10 shadow-2xl drop-shadow rounded-xl">
          <img
            className="w-full h-[188px]"
            src="https://d2o2utebsixu4k.cloudfront.net/Learn%20With%20Us_Free%20Agile%20and%20Scrum_20%20SEUs_CSM-01-01-91096e895f5e427db5635a1a7ccc8a81.svg"
            alt=""
          />
          <div className="w-full bg-grey-50 text-center p-4 rounded-xl">
            Free Agile and Scrum Course
          </div>
        </div>
      </div>
    </section>
  );
};

const Banner3 = () => {
  return (
    <div className="bg-white-10 p-8 rounded-lg shadow-2xl drop-shadow flex items-center justify-between max-w-[1024px] mx-auto">
    <div>
        <h4 className="text-sm text-gray-500 mb-2">WHO CAN ATTEND THE CSM COURSE</h4>
        <h2 className="text-2xl font-bold mb-4">Who This Course Is For</h2>
        <div className="grid grid-cols-2 gap-4 text-lg">
            <ul className="list-disc list-inside">
                <li>Software Engineers</li>
                <li>Project Managers</li>
                <li>Business Analysts</li>
                <li>Testers</li>
            </ul>
            <ul className="list-disc list-inside">
                <li>Product Managers</li>
                <li>Team Leaders</li>
                <li>Developers</li>
            </ul>
        </div>
    </div>
    <div className="relative">
        <img src="https://d2o2utebsixu4k.cloudfront.net/Prerequisites-7a0e6d93848a4b9baec819249cc90c5d.svg" alt="A person standing with arms crossed, smiling confidently" className="rounded-full w-full h-full" />
        
    </div>
</div>
  )
}

const CourseDetailSection = () => {
  return (
    <section className="bg-blue-10  w-full my-10">
      <ul className="flex items-center p-10 max-w-[1024px] mx-auto justify-between text-white-10">
        <li className="flex flex-col">
          <p className="text-2xl font-bold">450K+</p>
          <div>Professionals trained</div>
        </li>

        <li className="flex flex-col">
          <p className="text-2xl font-bold">250+</p>
          <div>Workshops every month</div>
        </li>

        <li className="flex flex-col">
          <p className="text-2xl font-bold">300+</p>
          <div>Agile transformations</div>
        </li>
      </ul>
    </section>
  );
};

const TestimonialReview = () => {
  return (
    <motion.div className="max-w-[1024px] mx-auto my-10">
      <BlurFadeText
        className="text-gray-600 my-10  px-4 w-full text-start text-2xl font-bold"
        yOffset={3}
        delay={0.4}
        text={"Testiominal Reviews"}
      />
      <div className="grid place-items-center gap-4 grid-flow-col   grid-cols-auto ">
        {homeData?.reviewUsers?.map((review, index) => (
          <UserReviewCard key={index} review={review} />
        ))}
      </div>
    </motion.div>
  );
};

const TrainingFeature = () => {
  return (
    <div className="w-full max-w-[1024px] mx-auto my-10">
      <p className="text-xl font-bold">Training Features</p>

      <div className="grid grid-cols-3 gap-4 mt-5">
        <div className="bg-white-10 max-w-[300px] p-3 rounded-xl shadow-2xl drop-shadow">
          <div className="flex items-center gap-3">
            <Monitor />
            <div className="text-xl">Course Duration</div>
          </div>
          <div className="mt-10 text-sm">
            You will undergo self-paced learning where you will get an in-depth
            knowledge of various concepts that will be covered in the course.
          </div>
        </div>

        <div className="bg-white-10 max-w-[300px] p-3 rounded-xl shadow-2xl drop-shadow">
          <div className="flex items-center gap-2">
            <SpeakerLoudIcon />
            <div className="text-xl">Real-life Case Studies</div>
          </div>
          <div className="mt-10 text-sm">
            Towards the end of the training, you will be working on a project
            where you will implement the techniques learnt to visualize and
            analyze
          </div>
        </div>

        <div className="bg-white-10 max-w-[300px] p-3 rounded-xl shadow-2xl drop-shadow">
          <div className="flex items-center gap-2">
            <ListTodoIcon />
            <div className="text-xl">Assignments</div>
          </div>
          <div className="mt-10 text-sm">
            Each class has practical assignments which shall be finished before
            the next class and helps you to apply the concepts taught during
          </div>
        </div>

        <div className="bg-white-10 max-w-[300px] p-3 rounded-xl shadow-2xl drop-shadow">
          <div className="flex items-center gap-2">
            <HeadphonesIcon className="text-grey-40" />
            <div className="text-xl">Lifetime Access</div>
          </div>
          <div className="mt-10 text-sm">
            You get lifetime access to Learning Management System (LMS) where
            presentations, quizzes, installation guide & class recordings are
            there.
          </div>
        </div>
      </div>
    </div>
  );
};

const LearningObjective = () => {
  return (
    <div className="bg-white-10 p-8 rounded-lg shadow-2xl max-w-[1024px] drop-shadow my-10 mx-auto">
      <h2 className="text-sm text-gray-500 font-semibold mb-2">
        WHAT YOU WILL LEARN
      </h2>
      <h1 className="text-2xl font-bold mb-6">Learning Objectives</h1>
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full font-semibold">
            1
          </div>
          <div>
            <h3 className="text-lg font-semibold">Scrum Theory</h3>
            <p className="text-gray-600">
              Understand the definition of Scrum, its values and pillars. Learn
              about the benefits of an iterative approach and the dangers of
              partial implementation.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full font-semibold">
            2
          </div>
          <div>
            <h3 className="text-lg font-semibold">The Scrum Team</h3>
            <p className="text-gray-600">
              Illustrate the interaction between the Product Owner, Developers,
              and Scrum Master in delivering Increments within a Sprint.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full font-semibold">
            3
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              Scrum Events and Activities
            </h3>
            <p className="text-gray-600">
              Understand the benefits of timeboxing, sprint purpose and
              duration, key Scrum events and Product Backlog refinement.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full font-semibold">
            4
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              Scrum Artifacts and Commitments
            </h3>
            <p className="text-gray-600">
              Learn about Agile artifacts (Backlog, Sprint Backlog, Increment)
              and their roles in iterative development, goal setting.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full font-semibold">
            5
          </div>
          <div>
            <h3 className="text-lg font-semibold">The Team</h3>
            <p className="text-gray-600">
              Understand the three Scrum Roles: development team builds, PO owns
              backlog (prioritizes), Scrum Master coaches and protects process.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full font-semibold">
            6
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              Scrum Events and Activities
            </h3>
            <p className="text-gray-600">
              Learn to plan sprints, review work, reflect and adapt. Delve into
              daily Scrum Events/Practices and Definition of Done (DoD).
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full font-semibold">
            7
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              Scrum Master Core Competencies
            </h3>
            <p className="text-gray-600">
              Learn the role of the Scrum Master in facilitating the needs of
              the Scrum Team and organization, including facilitating group
              decision-making.
            </p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div className="flex items-center justify-center w-8 h-8 bg-green-100 text-green-600 rounded-full font-semibold">
            8
          </div>
          <div>
            <h3 className="text-lg font-semibold">
              Service to the Team, PO, and Org
            </h3>
            <p className="text-gray-600">
              {"Identify the Scrum Master's role in leading the Scrum Team, managing technical debt, supporting the Product Owner and more."}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center">
        <a href="#" className="text-green-600 font-semibold">
          View less <i className="fas fa-chevron-up"></i>
        </a>
      </div>
    </div>
  );
};

export default CourseDetail;
