"use client";
import FrequentlyAskedQuestions from "@/components/common/courseDetail/faqs";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { homeData } from "@/constants";
import { useParams } from "next/navigation";
import React from "react";

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
      <FrequentlyAskedQuestions data={courseData?.curriculm} type="curriculm" />
      <FrequentlyAskedQuestions
        data={courseData?.courseDescription?.courseData}
        heading={courseData?.courseDescription?.courseHeading}
      />
      <FrequentlyAskedQuestions
        data={courseData?.faqs?.faqsData}
        heading={courseData?.faqs?.faqsHeading}
      />
      <Footer />
    </div>
  );
};

export default CourseDetail;
