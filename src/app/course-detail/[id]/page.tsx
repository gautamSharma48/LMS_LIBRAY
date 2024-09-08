"use client";
import React, { useRef, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Banner from "@/components/courseDetail/banner";
import FrequentlyAskedQuestions from "@/components/courseDetail/faqs";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import { homeData } from "@/constants";
import { Course } from "@/types";
import AdvisorForm from "@/components/courseDetail/advisorForm";
import StickyHeader from "@/components/courseDetail/stickyHeader";
import OverviewSection from "@/components/courseDetail/overviewSection";

const CourseDetail = () => {
  const params = useParams();
  const id = params?.id as string;
  const courseData: Course | undefined = homeData?.courses?.find(
    (ele) => ele?.id === Number(id)
  );
  const [isSticky, setIsSticky] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bannerRef.current) {
        const bannerBottom = bannerRef.current.getBoundingClientRect().bottom;
        setIsSticky(bannerBottom <=0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!courseData) {
    return <div>Course not found</div>;
  }

  return (
    <div className="overflow-x-hidden">
      <Header isSticky={false} />
      <div ref={bannerRef}>
        <Banner courseData={courseData} />
      </div>

      <div className="flex relative w-full max-w-[1280px] mx-auto">
        <StickyHeader isSticky={isSticky} />

        <div className="w-[70%] p-4">
          <div className="mb-8 h-auto">
           <OverviewSection courseData={courseData} />
          </div>
        </div>

        <div className="w-[30%] p-4">
          <div className={`${isSticky ? "fixed top-16 right-4 pr-9" : ""}`}>
            <AdvisorForm />
            {/* Add more content here */}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseDetail;
