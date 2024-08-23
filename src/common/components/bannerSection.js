import React from "react";
import history from "../../mangers/history";

const BannerSection = () => {
  return (
    <>
      {/* <CustomBanner /> */}
      <img className="h-[441px]" src="https://teclearns.com/images/main-banner.jpg" loading="lazy" alt="" />
      {/* <section className='bg-[url("https://teclearns.com/images/main-banner.jpg")] min-h-[500px]  h-auto w-full bg-no-repeat bg-cover bg-center relative'>
      </section> */}
    </>
  );
};

const CustomBanner = () => {
  return (
    <div className="w-full  bg-[#248de4]  py-20 px-4 md:px-6  bg-cover bg-center relative">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 text-white-10-10 relative z-10 ">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white-10 text-ft50-59">
          Unlock Your Learning Potential
        </h1>
        <p className="text-xl md:text-2xl text-white-10">
          Explore our wide range of courses and resources to elevate your
          knowledge.
        </p>
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => history.push("/courses")}
            className="inline-flex h-12 items-center justify-center rounded-md bg-white-10 px-8 py-2 text-sm font-medium text-[#248de4] transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            View Courses
          </button>
          <button className="inline-flex h-12 items-center justify-center rounded-md border border-white-10 px-8 py-2 text-sm font-medium text-white-10 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
            Explore Resources
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
