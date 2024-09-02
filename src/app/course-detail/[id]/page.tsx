"use client";
import FrequentlyAskedQuestions from "@/components/common/courseDetail/faqs";
import { homeData } from "@/constants";
import { useParams } from "next/navigation";
import React from "react";

const CourseDetail = () => {
  const params = useParams();
  const id = params?.id as string;
  const courseData = homeData?.courses?.find((ele) => ele?.id === Number(id));

  return (
    <div className="">   
      <FrequentlyAskedQuestions data={courseData?.curriculm} type="curriculm" />
      <FrequentlyAskedQuestions data={courseData?.faqs?.faqsData} heading={courseData?.faqs?.faqsHeading} />
    </div>
  );
};

export default CourseDetail;
